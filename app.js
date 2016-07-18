const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const morgan = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const userController = require('./controllers/user_controller')
const cityController = require('./controllers/city_controller')

mongoose.connect(process.env.MONGODB_URI)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(morgan('dev'))

// User routes
app.post('/signup', userController.signUp)
app.post('/signin', userController.signIn)

// routes for city
app.get('/city', cityController.getCity)
app.get('/:city/attractions', cityController.getAttraction)
app.post('/:city/attractions', cityController.createAttraction)
app.put('/:city/attractions/:id', cityController.updateAttraction)
app.delete('/:city/attractions/:id', cityController.deleteAttraction)

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})

module.exports = app
