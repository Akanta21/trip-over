const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const morgan = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const userController = require('./controllers/user_controller')
const cityController = require('./controllers/city_controller')

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

mongoose.connect(process.env.MONGODB_URI)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(morgan('dev'))

app.get('/', (req, res) => {
  res.status(200).send('This is our API for trip-over!')
})
// User routes
app.post('/signup', userController.signUp)
app.post('/signin', userController.signIn)

// routes for city
app.get('/city', cityController.getCity)
app.get('/:city/attractions', cityController.getAttraction)
app.get('/:city/attractions/:id', cityController.showAttraction)
app.post('/:city/attractions', userController.userLoggedIn, cityController.createAttraction)
app.put('/:city/attractions/:id', userController.userLoggedIn, cityController.updateAttraction)
app.delete('/:city/attractions/:id', userController.userLoggedIn, cityController.deleteAttraction)

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})

const tripController = require('./controllers/trip_controller')

app.get('/trips', userController.userLoggedIn, tripController.getTrip)
app.get('/trips/:id', userController.userLoggedIn, tripController.showTrip)
app.post('/trips', userController.userLoggedIn, tripController.createTrip)
app.delete('/trips/:id', userController.userLoggedIn, tripController.deleteTrip)
app.put('/trips/:id', userController.userLoggedIn, tripController.updateTrip)

module.exports = app
