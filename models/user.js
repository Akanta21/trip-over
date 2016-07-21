const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const uuid = require('uuid')
const Trip = require('./trip')
const uniqueValidator = require('mongoose-unique-validator')

const userSchema = new mongoose.Schema({
  name: {type: String},
  email: {type: String, required: true, unique: true, uniqueCaseInsensitive: true, match: /\S+@\S+\.\S+/},
  password: {type: String, minlength: 6},
  myTrips: [Trip.schema],
  auth_token: {type: String, unique: true}
})

userSchema.pre('save', function (done) {
  const user = this

  if (!user.auth_token) user.auth_token = uuid.v4()

  if (user.isModified('password')) {
    bcrypt.genSalt(8, (err, salt) => {
      if (err) return done(err)

      bcrypt.hash(user.password, salt, (err, hash) => {
        if (err) return done(err)
        user.password = hash
        return done()
      })
    })
  } else {
    bcrypt.genSalt(8, (err, salt) => {
      if (err) return done(err)

      bcrypt.hash(user.password, salt, (err, hash) => {
        if (err) return done(err)
        user.password = hash
        done()
      })
    })
  }
})

userSchema.methods.authenticate = function (password, callback) {
  bcrypt.compare(password, this.password, callback)
}

userSchema.plugin(uniqueValidator, { message: 'Error, expected {PATH} to be unique.' })
const User = mongoose.model('User', userSchema)

module.exports = User
