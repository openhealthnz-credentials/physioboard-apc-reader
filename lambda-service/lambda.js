console.log()
console.log("lambda-service/lambda.js")
console.log()
const serverlessExpress = require('@vendia/serverless-express')
const app = require('./app')

exports.handler = serverlessExpress({ app })
