const mongoose = require('mongoose')
const attractionSchema = require('./attraction')
const uniqueValidator = require('mongoose-unique-validator')

// creating city schema with attractions embedded
const citySchema = new mongoose.Schema({
  name: {type: String, required: true, unique: true, uniqueCaseInsensitive: true},
  attractions: [attractionSchema.schema]
})

citySchema.plugin(uniqueValidator, { message: 'Error, expected {PATH} to be unique.' })

const City = mongoose.model('City', citySchema)
module.exports = City
