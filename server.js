const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')

// const host = '127.0.0.1'
// const port = '5173'

const userData = {
    id: 12345,
    coldWater: {
        number: 24680,
        value: 447
    },
    hotWater: {
        number: 35791,
        value: 382
    }
}

const app = express()

//app.use(cors())
app.use(express.json());
app.use('/', serveStatic(path.join(__dirname, 'vue-water-meter', 'dist')))
app.use('/', bodyParser.urlencoded({
    extended: true
}))
// app.use('/newdata', bodyParser.urlencoded({
//     extended: true
// }))

app.post('/number', (req, res) => {
    // const number = req.body.number;
    console.log(req.body);
    res.send(userData);
});

app.post('/newdata', (req, res) => {
    const data = req.body;
    console.log(data);
    res.send(data);
});


const port = process.env.PORT || 3000

app.listen(port)