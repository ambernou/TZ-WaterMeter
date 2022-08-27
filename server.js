const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')
const bodyParser = require('body-parser')

const app = express()

app.use(express.json());
app.use('/', serveStatic(path.join(__dirname, 'vue-water-meter', 'dist')))
app.use('/number', bodyParser.urlencoded({
    extended: true
}))

app.post('/number', (req, res) => {
    const number = req.body.form.number;
    console.log(req.body);
    res.send(`Your number: ${number}`);
});

const port = process.env.PORT || 3000

app.listen(port)