const mongoose = require('mongoose')
const attractionSchema = require('./attraction')

// creating city schema with attractions embedded
const citySchema = new mongoose.Schema({
  name: String,
  attractions: [attractionSchema.schema]
})

const City = mongoose.model('City', citySchema)
module.exports = City
