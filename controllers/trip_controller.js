
var getTrip = function (req, res) {
  res.status(200).json('get all trips')
}

var showTrip = function (req, res) {
  res.status(200).json('show trip')
}

var deleteTrip = function (req, res) {
  res.status(201).json('delete trip')
}

var updateTrip = function (req, res) {
  res.status(201).json('update trip')
}

var createTrip = function (req, res) {
  res.status(201).json('create trip')
}

module.exports = {
  getTrip: getTrip,
  showTrip: showTrip,
  deleteTrip: deleteTrip,
  updateTrip: updateTrip,
  createTrip: createTrip
}
