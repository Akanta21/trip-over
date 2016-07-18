const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const morgan = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(morgan('dev'))

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})

const tripController = require('./controllers/trip_controller')
app.use('/trips', tripController.getTrip)
app.post('/trips/:id', tripController.createTrip)

module.exports = app
