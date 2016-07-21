const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const morgan = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const userController = require('./controllers/user_controller')
const cityController = require('./controllers/city_controller')
const tripController = require('./controllers/trip_controller')

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, User-Email, Auth-Token')
  res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT')
  next()
})

mongoose.connect(process.env.MONGODB_URI)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(morgan('dev'))

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to our Trip-Over API',
    'IMPORTANT': 'Note that our API, for login areas, verifies through the User-Email and a Auth-Token generated upon signup. To receive more information, please contact us.',
    'User Routes': {
      'POST /signup': 'For user signup',
      'POST /signin': 'For user login',
      'PUT /profile': 'Edit user profile'
    },
    'City & Attraction Routes': {
      'GET /city': 'Get all cities',
      'GET /:city/attractions': 'Get specific city with all her attractions',
      'GET /:city/attractions/:id': 'Get specific city with a specific attraction',
      'When logged in': {
        'Admin ONLY': {
          'POST /city': 'Create new city',
          'POST /:city/attractions': 'Create new attractions in existing cities',
          'PUT /:city/attractions/:id': 'Edit selected attraction in the city',
          'DELETE /:city/attractions/:id': 'Delete selected attraction in the city'
        }
      }
    },
    'Trip Routes (Needs user to be logged in)': {
      'GET /trips': 'Get all trips belonging to a user',
      'GET /trips/:id': 'Get a single trip belonging to a user',
      'POST /trips': 'Create a new trip',
      'PUT /trips/:id': 'Edit a current trip',
      'DELETE /trips/:id': 'Delete a current trip'
    }
  })
})
// User routes
app.post('/signup', userController.signUp)
app.post('/signin', userController.signIn)
app.put('/profile', userController.userLoggedIn, userController.editUser)

// routes for city
app.get('/city', cityController.getCity)
app.get('/:city/attractions', cityController.getAttraction)
app.get('/:city/attractions/:id', cityController.showAttraction)
app.post('/city', userController.userLoggedIn, userController.isAdmin, cityController.createCity)
app.post('/:city/attractions', userController.userLoggedIn, userController.isAdmin, cityController.createAttraction)
app.put('/:city/attractions/:id', userController.userLoggedIn, userController.isAdmin, cityController.updateAttraction)
app.delete('/:city/attractions/:id', userController.userLoggedIn, userController.isAdmin, cityController.deleteAttraction)

// routes for trips
app.get('/trips', userController.userLoggedIn, tripController.getTrip)
app.get('/trips/:id', userController.userLoggedIn, tripController.showTrip)
app.post('/trips', userController.userLoggedIn, tripController.createTrip)
app.put('/trips/:id', userController.userLoggedIn, tripController.updateTrip)
app.delete('/trips/:id', userController.userLoggedIn, tripController.deleteTrip)

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})

module.exports = app
