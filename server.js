const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')
const bodyParser = require('body-parser')

const app = express()

app.use('/', serveStatic(path.join(__dirname, 'vue-water-meter', 'dist')))
app.use('/form_handler', bodyParser.urlencoded({
    extended: true
}))

app.post('/form_handler', (req, res) => {
    const number = req.body.number;
    console.log(req.body);
    //res.send(`Your number: , ${number}`);
});

const port = process.env.PORT || 3000

app.listen(port)