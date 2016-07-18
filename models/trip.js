const mongoose = require('mongoose')
const City = require('./city')

const tripSchema = new mongoose.Schema({
  places: [City.schema],
  startDate: Date,
  endDate: Date
})

const Trip = mongoose.model('Trip', tripSchema)

module.exports = Trip
