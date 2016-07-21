const mongoose = require('mongoose')

const tripSchema = new mongoose.Schema({
  places: [],
  startDate: {type: String, required: true, validate: /^(([0-9])|([0-2][0-9])|([3][0-1]))\-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\-\d{4}$/},
  endDate: {type: String, required: true, validate: /^(([0-9])|([0-2][0-9])|([3][0-1]))\-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\-\d{4}$/}
})

const Trip = mongoose.model('Trip', tripSchema)

module.exports = Trip
