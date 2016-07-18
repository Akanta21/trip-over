const mongoose = require('mongoose')

// creating attraction schema
const attractionSchema = new mongoose.Schema({
  name: String,
  details: String,
  geoCode: {
    longitude: String,
    lattitude: String
  },
  phoneNumber: String,
  img: String
})

const Attraction = mongoose.model('Attraction', attractionSchema)
module.exports = Attraction
