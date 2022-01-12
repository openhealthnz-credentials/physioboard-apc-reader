const path = require('path')
const express = require('express')
const cors = require('cors')
const compression = require('compression')
const fileUpload = require('express-fileupload');
const { getCurrentInvoke } = require('@vendia/serverless-express')
const app = express()
const router = express.Router()

const { ApcFromPDFBuffer } = require("@openhealthnz-credentials/physioboard-apc-reader");

router.use(compression())
router.use(cors())

app.use(fileUpload());


router.post('/', async (req, res) => {
  if (req.files && "data" in req.files) {
    try {
      let details = await ApcFromPDFBuffer(req.files.data.data);
      res.json({"details": details, "status": "success"});
    } catch(e) {
      console.log(e)
      res.status(400).send({"error": "Invalid PDF"});
    }
  } else {
    return res.status(400).json({"error": "No file uploaded"});
  }
})

// The serverless-express library creates a server and listens on a Unix
// Domain Socket for you, so you can remove the usual call to app.listen.
// app.listen(3000)
app.use('/', router)

// Export your express server so you can import it in the lambda function.
if (require.main === module) {
  // called directly i.e. "node app"
  app.listen(3000, (err) => {
    if (err) console.error(err)
    console.log('server listening on 3000')
  })
} else {
  // required as a module => executed on aws lambda
  module.exports = app
}

