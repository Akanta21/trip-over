var City = require('../models/city')
var Attraction = require('../models/attraction')

var getCity = function (req, res) {
  City.find({}, (err, foundCity) => {
    if (err) console.log(err)
    res.status(200).json(foundCity)
  })
}

var createAttraction = function (req, res) {
  City.findOne({name: req.params.city}, (err, city) => {
    if (err) console.log(err)
    var attraction = new Attraction()

    attraction.name = req.body.name
    attraction.details = req.body.details
    attraction.geoCode = {
      Longititude: req.body.Longititude,
      Lattitude: req.body.Lattitude
    }
    attraction.phoneNumber = req.body.phoneNumber
    attraction.img = req.body.img
    city.attractions.push(attraction)

    city.save((err) => {
      if (err) console.log(err)
      res.status(201).json(city)
    })
  })
}

var getAttraction = function (req, res) {
  City.find({name: req.params.city}, (err, foundCity) => {
    if (err) console.log(err)
    res.status(200).json(foundCity)
  })
}

var updateAttraction = function (req, res) {
  City.findOne({name: req.params.city}, (err, city) => {

  })
}

module.exports = {
  getCity: getCity,
  createAttraction: createAttraction,
  getAttraction: getAttraction
}
