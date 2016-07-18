const City = require('../models/city')
const Attraction = require('../models/attraction')

let getCity = function (req, res) {
  City.find({}, (err, foundCity) => {
    if (err) console.log(err)
    res.status(200).json(foundCity)
  })
}

let createAttraction = function (req, res) {
  City.findOne({name: req.params.city}, (err, city) => {
    if (err) console.log(err)
    var attraction = new Attraction()

    attraction.name = req.body.name
    attraction.details = req.body.details
    attraction.geoCode = {
      longitude: req.body.longitude,
      lattitude: req.body.lattitude
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

let getAttraction = function (req, res) {
  City.find({name: req.params.city}, (err, foundCity) => {
    if (err) console.log(err)
    res.status(200).json(foundCity)
  })
}

// update attraction
let updateAttraction = function (req, res) {
  City.findOne({name: req.params.city}, (err, foundCity) => {
    if (err) console.log(err)
    var updateAttraction = foundCity.attractions.id(req.params.id)
    updateAttraction.name = req.body.name
    updateAttraction.details = req.body.details
    updateAttraction.geoCode = {
      longitude: req.body.longitude,
      lattitude: req.body.lattitude
    }
    updateAttraction.phoneNumber = req.body.phoneNumber
    updateAttraction.img = req.body.img

    foundCity.save((err) => {
      if (err) console.log(err)
      else res.status(201).json(foundCity)
    })
  })
}

// delete attraction
let deleteAttraction = function (req, res) {
  City.findOne({name: req.params.city}, (err, foundCity) => {
    if (err) console.log(err)
    foundCity.attractions.id(req.params.id).remove()
    foundCity.save((err) => {
      if (err) console.log(err)
      else res.status(201).json(foundCity)
    })
  })
}

module.exports = {
  getCity: getCity,
  createAttraction: createAttraction,
  getAttraction: getAttraction,
  updateAttraction: updateAttraction,
  deleteAttraction: deleteAttraction
}
