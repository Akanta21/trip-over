const mongoose = require('mongoose')
const UserSchema = require('./user')

// creating city schema with attractions embedded
const citySchema = new mongoose.Schema({
  name: String,
  attractions: [attractionSchema]
})

// creating attraction schema
const attractionSchema = new mongoose.Schema({
  name: String,
  details: String,
  geoCode: {
    Longititude: String,
    Lattitude: String
  },
  phoneNumber: String,
  img: String
})

const City = mongoose.model('City', citySchema)
module.exports = City
