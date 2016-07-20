/* globals describe it before after */
const expect = require('chai').expect
const supertest = require('supertest')
const api = supertest('http://localhost:3000')
// require('../app')

const currentUser = {
  email: 'wayne@gmail.com',
  auth_token: 'e5d827ca-c4a5-4037-b42b-2b06dfcac9d7'
}

describe('GET /trips', function () {
  this.timeout(5000)
  it('should return a 200 response', (done) => {
    api.get('/trips')
    .set('Accept', 'application/json')
    .set('User-Email', currentUser.email)
    .set('Auth-Token', currentUser.auth_token)
    .expect(200, done)
  })
  it('should return all trips in an array', (done) => {
    api.get('/trips')
    .set('Accept', 'application/json')
    .set('User-Email', currentUser.email)
    .set('Auth-Token', currentUser.auth_token)
    .end((error, response) => {
      expect(error).to.be.a('null')
      expect(response.body).to.be.an('array')
      done()
    })
  })
})

describe('SHOW /trips/:id', () => {
  it('should return a 200 response', (done) => {
    api.get('/trips/578ca2051716e55a0faccd7d')
      .set('Accept', 'application/json')
      .set('User-Email', currentUser.email)
      .set('Auth-Token', currentUser.auth_token)
      .end((error, response) => {
        expect(error).to.be.a('null')
        expect(response.status).to.eq(200)
        done()
      })
  })
})

describe('POST /trips', () => {
  var id
  var array = [{
    'name': 'Test object',
    'details': 'more test objects'
  },
    {
      'name': 'Test object2',
      'details': 'more test objects too'
    }]
  before((done) => {
    api.post('/trips')
    .set('Accept', 'application/json')
    .set('User-Email', currentUser.email)
    .set('Auth-Token', currentUser.auth_token)
    .send({
      'places': array,
      'startDate': '19/09/1990',
      'endDate': '21/09/1990'
    })
    .end((err, res) => {
      expect(err).to.be.a('null')
      id = res.body.myTrips[res.body.myTrips.length - 1]._id
      done()
    })
  })
  it('should add new trip to database', (done) => {
    api.get('/trips/' + id)
    .set('Accept', 'application/json')
    .set('User-Email', currentUser.email)
    .set('Auth-Token', currentUser.auth_token)
    .end((err, res) => {
      expect(err).to.be.a('null')
      expect(res.body).to.have.property('startDate')
      expect(res.body).to.have.property('endDate')
      done()
    })
  })
  after((done) => {
    api.delete('/trips/' + id)
    .set('Accept', 'application/json')
    .set('User-Email', currentUser.email)
    .set('Auth-Token', currentUser.auth_token)
    .end((err) => {
      expect(err).to.be.a('null')
      done()
    })
  })
})

describe('PUT /trips/:id/', () => {
  var id
  var array = [{
    'name': 'Test object',
    'details': 'more test objects'
  },
    {
      'name': 'Test object2',
      'details': 'more test objects too'
    }]
  before((done) => {
    api.put('/trips/578eeec28a3b352919f2d3d4')
    .set('Accept', 'application/json')
    .set('User-Email', currentUser.email)
    .set('Auth-Token', currentUser.auth_token)
    .send({
      'places': array,
      'startDate': 'This is the start',
      'endDate': 'This is the end'
    }).end((err, res) => {
      expect(err).to.be.a('null')
      id = res.body._id
      done()
    })
  })
  it('should update trip', (done) => {
    api.get('/trips/578eeec28a3b352919f2d3d4')
    .set('Accept', 'application/json')
    .set('User-Email', currentUser.email)
    .set('Auth-Token', currentUser.auth_token)
    .end((err, res) => {
      expect(err).to.be.a('null')
      expect(res.body.startDate).to.eq('This is the start')
      expect(res.body.endDate).to.eq('This is the end')
      done()
    })
  })
  after((done) => {
    api.put('/trips/578eeec28a3b352919f2d3d4')
    .set('Accept', 'application/json')
    .set('User-Email', currentUser.email)
    .set('Auth-Token', currentUser.auth_token)
    .send({
      startDate: 'Update was started',
      endDate: 'And update has ended'
    }).end((err) => {
      expect(err).to.be.a('null')
      done()
    })
  })
})
  // describe('PUT /trips/:id/', () => {
  //   it('should update trip', (done) => {
  //     api.get('/trips/1')
  //     .set('Accept', 'application/json')
  //     .set('User-Email', currentUser.email)
  //     .set('Auth-Token', currentUser.auth_token)
  //     .end((err, response) => {
  //       expect(response.body.trip[0].startDate.to.equal('26 May 2016'), done)
  //      })
  //    })
  // })
  //
  // describe('DELETE /trips/:id', () => {
  //   it('should delete a trip from database', (done) => {
  //     api.delete('/trips/1')
  //       .set('Accept', 'application/json')
  //       .set('User-Email', currentUser.email)
  //       .set('Auth-Token', currentUser.auth_token)
  //       .end((err,response) => {
  //        expect(response.body.message).to.eql('deleted')
  //        done()
  //       })
  //   })
  // })
