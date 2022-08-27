import express from 'express'
import serveStatic from 'serve-static'
import path from 'path'

const app = express()

app.use('/', serveStatic(path.join(__dirname, '/vue-water-meter', '/dist')))

const port = process.env.PORT || 3000

app.listen(port)