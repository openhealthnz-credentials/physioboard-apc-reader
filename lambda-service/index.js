let physioboardApcReader = require("@openhealthnz-credentials/physioboard-apc-reader");

exports.handler = async function (event, context, callback) {
    if (event.isBase64Encoded) {
        let body = Buffer.from(event.body, 'base64');
        try {
            return await physioboardApcReader.ApcFromPDFBuffer(body);
        } catch(e) {
            return {error: "Invalid PDF"};
        }
    } else {
        return JSON.stringify({error: "Must upload binary data"});
    }
};
