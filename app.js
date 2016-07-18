const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const morgan = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const User = require('./models/user')
const userController = require('./controllers/user_controller')

mongoose.connect(process.env.MONGODB_URI)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(morgan('dev'))

// sign up route
app.post('/signup', userController.signUp)

// sign in route
app.post('/signin', userController.signIn)

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})

module.exports = app
