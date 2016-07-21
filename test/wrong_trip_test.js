/* globals it describe context*/
const supertest = require('supertest')
const api = supertest('http://localhost:3000')
const expect = require('chai').expect
require('../app')

const currentUser = {
  email: 'admin@gmail.com',
  auth_token: 'd4113582-3868-46a1-9aef-dd930faadb15'
}

describe('Invalid credentials for', () => {
  context('GET /trips', () => {
    it('should not allow access to all trips', (done) => {
      api.get('/trips')
      .set('Accept', 'application/json')
      .set('User-Email', 'any@gmail.com')
      .set('Auth-Token', currentUser.auth_token)
      .expect(401, done)
    })
    it('should not allow access to a single trip', (done) => {
      api.get('/trips/5790db85f84bba1000673fe4')
      .set('Accept', 'application/json')
      .set('User-Email', 'any@gmail.com')
      .set('Auth-Token', currentUser.auth_token)
      .expect(401, done)
    })
  })
})

describe('Invalid inputs for', () => {
  context('POST /trips', () => {
    it('should not allow post with invalid authentication', (done) => {
      api.post('/trips')
      .set('Accept', 'application/json')
      .set('User-Email', 'test@gmail.com')
      .set('Auth-Token', 'my_auth_token')
      .send({
        startDate: '01-Jan-2016',
        endDate: '02-Jan-2016'
      }).expect(401, done)
    })
    it('should not allow empty start date', (done) => {
      api.post('/trips')
      .set('Accept', 'application/json')
      .set('User-Email', currentUser.email)
      .set('Auth-Token', currentUser.auth_token)
      .send({
        startDate: '',
        endDate: '01-Jan-2016'
      }).expect(422, done)
    })
    it('should not allow wrong format for start date', (done) => {
      api.post('/trips')
      .set('Accept', 'application/json')
      .set('User-Email', currentUser.email)
      .set('Auth-Token', currentUser.auth_token)
      .send({
        startDate: '01Jan2016',
        endDate: '02-Jan-2016'
      }).expect(422, done)
    })
    it('should not allow empty end date', (done) => {
      api.post('/trips')
      .set('Accept', 'application/json')
      .set('User-Email', currentUser.email)
      .set('Auth-Token', currentUser.auth_token)
      .send({
        startDate: '01-Jan-2016',
        endDate: ''
      }).expect(422, done)
    })
    it('should not allow wrong format for end date', (done) => {
      api.post('/trips')
      .set('Accept', 'application/json')
      .set('User-Email', currentUser.email)
      .set('Auth-Token', currentUser.auth_token)
      .send({
        startDate: '01-Jan-2016',
        endDate: '02-Jan-2016'
      }).expect(422, done)
    })
  })
  context('PUT /trips/:id', (done) => {
    it('should not allow put with invalid authentication', (done) => {
      api.put('/trips/5790db85f84bba1000673fe4')
      .set('Accept', 'application/json')
      .set('User-Email', 'test@gmail.com')
      .set('Auth-Token', 'my_auth_token')
      .send({
        startDate: '01-Jan-2016',
        endDate: '02-Jan-2016'
      }).expect(401, done)
    })
    it('should not allow empty start date', (done) => {
      api.post('/trips')
      .set('Accept', 'application/json')
      .set('User-Email', currentUser.email)
      .set('Auth-Token', currentUser.auth_token)
      .send({
        startDate: '',
        endDate: '01-Jan-2016'
      }).expect(422, done)
    })
    it('should not allow wrong format for start date', (done) => {
      api.post('/trips')
      .set('Accept', 'application/json')
      .set('User-Email', currentUser.email)
      .set('Auth-Token', currentUser.auth_token)
      .send({
        startDate: '01Jan2016',
        endDate: '02-Jan-2016'
      }).expect(422, done)
    })
    it('should not allow empty end date', (done) => {
      api.post('/trips')
      .set('Accept', 'application/json')
      .set('User-Email', currentUser.email)
      .set('Auth-Token', currentUser.auth_token)
      .send({
        startDate: '01-Jan-2016',
        endDate: ''
      }).expect(422, done)
    })
    it('should not allow wrong format for end date', (done) => {
      api.post('/trips')
      .set('Accept', 'application/json')
      .set('User-Email', currentUser.email)
      .set('Auth-Token', currentUser.auth_token)
      .send({
        startDate: '01-Jan-2016',
        endDate: '02-Jan-2016'
      }).expect(422, done)
    })
  })
  context('DELETE /trips/:id', (done) => {
    it('should not allow delete with wrong authentication', (done) => {
      api.delete('/trips/5790db85f84bba1000673fe4')
      .set('Accept', 'application/json')
      .set('User-Email', 'test@gmail.com')
      .set('Auth-Token', 'my_auth_token')
      .expect(401, done)
    })
  })
})
