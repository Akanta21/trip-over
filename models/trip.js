const mongoose = require('mongoose')

const tripSchema = new mongoose.Schema({
  places: [],
  startDate: Date,
  endDate: Date
})

const Trip = mongoose.model('Trip', tripSchema)

module.exports = Trip
