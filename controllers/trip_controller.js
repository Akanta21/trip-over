const Trip = require('../models/trip')

// get all trips of user
var getTrip = function (req, res) {
  res.status(200).json(req.currentUser.myTrips)
}
// show 1 trip by id
var showTrip = function (req, res) {
  res.status(200).json(req.currentUser.myTrips.id(req.params.id))
}
// create trip
var createTrip = function (req, res) {
  var userTrip = new Trip()

  userTrip.places = req.body.places
  userTrip.startDate = req.body.startDate
  userTrip.endDate = req.body.endDate

  req.currentUser.myTrips.push(userTrip)
  req.currentUser.save(function (error, user) {
    if (error)res.status(422).json({message: 'Could not create trip.'})
    else res.status(201).json(user)
  })
}
// delete trip
var deleteTrip = function (req, res) {
  req.currentUser.myTrips.id(req.params.id).remove()
  req.currentUser.save(function (error, user) {
    if (error)res.status(422).json({message: 'Could not delete trip.'})
    else res.status(201).json(req.currentUser.myTrips)
  })
}
// update trip
var updateTrip = function (req, res) {
  var currentTrip = req.currentUser.myTrips.id(req.params.id)

  if (req.body.places) currentTrip.places = req.body.places
  if (req.body.startDate) currentTrip.startDate = req.body.startDate
  if (req.body.endDate) currentTrip.endDate = req.body.endDate
  req.currentUser.save(function (error, user) {
    if (error)res.status(422).json({message: 'Could not update trip.'})
    else res.status(201).json(req.currentUser.myTrips)
  })
}

module.exports = {
  getTrip: getTrip,
  showTrip: showTrip,
  deleteTrip: deleteTrip,
  updateTrip: updateTrip,
  createTrip: createTrip
}
