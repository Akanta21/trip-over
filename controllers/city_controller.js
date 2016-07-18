var City = require('../models/city')

var getCity = function (req, res) {
  res.status(200).json('hello')

  City.find(function (error, cities) {
    response.send(cities)
  })
}

var createAttraction = function (req, res) {
  var attraction = new Attraction()

  attraction.name = request.body.name
  attraction.details = request.body.details
  attraction.geoCode = {request.body.Longititude, request.body.Lattitude}
  attraction.phoneNumber = request.body.phoneNumber
  attraction.img = request.body.img

  attraction.save(function (error, attraction) {
    if (error) response.status(422).json({message: 'Could not ceate attraction b/c:' + error})
    response.send(attractions)
  })
}

module.exports = {
  getCity: getCity
}
