const mongoose = require('mongoose')

// creating attraction schema
const attractionSchema = new mongoose.Schema({
  name: {type: String, required: true},
  details: {type: String, required: true},
  geoCode: {
    longitude: String,
    lattitude: String
  },
  phoneNumber: String,
  img: String
})

const Attraction = mongoose.model('Attraction', attractionSchema)
module.exports = Attraction
