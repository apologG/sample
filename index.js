const express = require('express')
const bodyParser = require('body-parser')
const http = require('http');
const app = express()
const routes = require('./routes/routes');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(routes)

const port = parseInt(process.env.PORT, 10) || 3000
app.set('port', port)
const server = http.createServer(app);
if (process.env.NODE_ENV !== 'test') {
    server.listen(port)
    console.log("Server is listening on port", port)
}
module.exports = app