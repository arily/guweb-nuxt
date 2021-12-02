const express = require('express')
const app = express()
app.use('/test-api/test-user', require('./test-api/GuestUser'))
module.exports = { app }
