const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const uuid = require('uuid')
const City = require('./city')

const tripSchema = new mongoose.Schema({
  places: [City.schema],
  startDate: Date,
  endDate: Date
})

const userSchema = new mongoose.Schema({
  name: {type: String},
  email: {type: String, reuired: true, unique: true},
  password: {type: String, required: true},
  myTrips: [tripSchema],
  auth_token: {type: String, unique: true}
})

userSchema.pre('save', function (done) {
  const user = this

  if (!user.isModified('password')) return done()

  bcrypt.genSalt(8, (err, salt) => {
    if (err) return done(err)

    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) return done(err)
      user.password = hash
      done()
    })
  })
  user.auth_token = uuid.v4()
})

userSchema.methods.authenticate = function (password, callback) {
  bcrypt.compare(password, this.password, callback)
}

const User = mongoose.model('User', userSchema)
const Trip = mongoose.model('Trip', tripSchema)

module.exports = User
module.exports = Trip
