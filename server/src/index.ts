import express from 'express'
import bodyParser from 'body-parser'
import viewEngine from './config/viewEngine'
import initWebRouter from './router/web'

require('dotenv').config()
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

viewEngine(app)
initWebRouter(app)

const port = process.env.PORT || 600

app.listen(port , () => {console.log(`app listening on ${port}`)})
