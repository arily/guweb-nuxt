// load .env files, must on top
require('dotenv').config()

const { app } = require('./app')

app.listen(process.env.PORT_BACKEND, () => {
  console.log('listen on port', process.env.PORT_BACKEND)
})
