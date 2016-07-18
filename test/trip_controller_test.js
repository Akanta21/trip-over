/* globals describe it before */
const expect = require('chai').expect
const supertest = require('supertest')
const api = supertest('http://localhost:3000')
const Trip = require('../models/trip')
const app = require('../app')

describe('GET /', () => {
  it('should return a 200 response', (done) => {
    api.get('/')
      .set('Accept', 'application/json')
      .expect(200, done)
  })
})
describe('GET /trips', function () {
  this.timeout(5000)
  it('should return a 200 response', (done) => {
    api.get('/trips')
    .set('Accept', 'application/json')
    .expect(200, done)
  })
  it('should return all trips in an array', (done) => {
    api.get('/events')
    .set('Accept', 'application/json')
    .end((error, response) => {
      expect(error).to.be.a('null')
      expect(response.body).to.be.an('array')
      done()
    })
  })
})
describe('POST /trips', function () {
  this.timeout(5000)
  it('should add new trip to database', (done) => {
    api.get('/trips')
       .set('Accept', 'application/json')
       .end((error, response) => {
         expect(error).to.be.a('null')
         expect(response.body[response.body.length - 1].startDate).to.equal('25 May 2016')
         done()
       })
  })
})
describe('SHOW /trips/:id', () => {
  it('should return a 200 response', (done) => {
    api.get('/trips/1')
      .set('Accept', 'application/json')
      .end((error, response) => {
        expect(200, done)
        done()
      })
  })
})
describe('PUT /trips/:id/', () => {
  it('should receive a 201 response', (done) => {
    api.put('/trips/1')
     .set('Accept', 'application/json')
     .send({ })
     .expect(201, done)
  })
})

describe('PUT /trips/:id/', () => {
  it('should update trip', (done) => {
    api.get('/trips/1')
    .set('Accept', 'application/json')
    .end((err, response) => {
      expect(response.body.trip[0].startDate.to.equal('26 May 2016'), done)
     })
   })
})

describe('DELETE /trips/:id', () => {
  it('should delete a trip from database', (done) => {
    api.delete('/trips/1')
      .set('Accept', 'application/json')
      .end((err,response) => {
       expect(response.body.message).to.eql('deleted')
       done()
      })
  })
})
