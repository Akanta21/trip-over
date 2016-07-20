const mongoose = require('mongoose')

// creating attraction schema
const attractionSchema = new mongoose.Schema({
  name: {type: String, required: true},
  details: {type: String, required: true},
  geoCode: {
    longitude: {type: String, required: true},
    lattitude: {type: String, required: true}
  },
  phoneNumber: String,
  img: String
})

const Attraction = mongoose.model('Attraction', attractionSchema)
module.exports = Attraction
