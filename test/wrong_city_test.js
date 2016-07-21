/* globals it describe context*/
const supertest = require('supertest')
const api = supertest('http://localhost:3000')
const expect = require('chai').expect
// require('../app')

const currentUser = {
  email: 'admin@gmail.com',
  auth_token: 'd4113582-3868-46a1-9aef-dd930faadb15'
}

describe('Invalid credientials for', () => {
  context('POST /city', () => {
    it('should not allow post with wrong authentication', (done) => {
      api.post('/city')
      .set('User-Email', 'trying@gmail.com')
      .set('Auth-Token', 'to be funny')
      .send({
        name: 'My City'
      }).expect(401, done)
    })
  })
  context('POST /city/attractions', () => {
    it('should not allow post with wrong authentication', (done) => {
      api.post('/city/attractions')
      .set('Accept', 'application/json')
      .set('User-Email', 'trying@gmail.com')
      .set('Auth-Token', 'tobefunny')
      .send({
        name: 'Haha',
        details: 'hahaha',
        geoCode: {
          longitude: '1234',
          lattitude: '1234'
        }
      }).expect(401, done)
    })
  })
  context('PUT /city/attractions/:id', () => {
    it('should not allow put with wrong authentication', (done) => {
      api.put('/Malang/attractions/5790a659ee3cf610000534c2')
      .set('User-Email', 'trying@gmail.com')
      .set('Auth-Token', 'to be funny')
      .send({
        name: 'Haha',
        details: 'hahaha',
        geoCode: {
          longitude: '1234',
          lattitude: '1234'
        }
      }).expect(401, done)
    })
  })
  context('DELETE /city/attractions/:id', () => {
    it('should not allow delete with wrong authentication', (done) => {
      api.delete('/Malang/attractions/5790a659ee3cf610000534c2')
      .set('User-Email', 'trying@gmail.com')
      .set('Auth-Token', 'to be funny')
      .expect(401, done)
    })
  })
})

describe('Invalid inputs for', () => {
  context('POST /city', () => {
    it('should not allow post with empty name', (done) => {
      api.post('/city')
      .set('User-Email', currentUser.email)
      .set('Auth-Token', currentUser.auth_token)
      .send({
        name: ''
      }).expect(401, done)
    })
    it('should not allow post with same city name', (done) => {
      api.post('/city')
      .set('User-Email', currentUser.email)
      .set('Auth-Token', currentUser.auth_token)
      .send({
        name: 'Batu'
      }).expect(401, done)
    })
    it('should not allow post with same city name in different case', (done) => {
      api.post('/city')
      .set('User-Email', currentUser.email)
      .set('Auth-Token', currentUser.auth_token)
      .send({
        name: 'BATU'
      }).expect(401, done)
    })
  })
  context('POST /:city/attractions', () => {
    it('should not allow post with empty name', (done) => {
      api.post('/Malang/attractions')
      .set('User-Email', currentUser.email)
      .set('Auth-Token', currentUser.auth_token)
      .send({
        name: '',
        details: 'Testing details',
        geoCode: {
          longitude: '1234',
          lattitude: '1234'
        }
      }).expect(401, done)
    })
    it('should not allow post with empty details', (done) => {
      api.post('/Malang/attractions')
      .set('User-Email', currentUser.email)
      .set('Auth-Token', currentUser.auth_token)
      .send({
        name: 'Test',
        details: '',
        geoCode: {
          longitude: '1234',
          lattitude: '1234'
        }
      }).expect(401, done)
    })
    it('should not allow post with empty longitude', (done) => {
      api.post('/Malang/attractions')
      .set('User-Email', currentUser.email)
      .set('Auth-Token', currentUser.auth_token)
      .send({
        name: 'Test',
        details: 'Testing details',
        geoCode: {
          longitude: '',
          lattitude: '1234'
        }
      }).expect(401, done)
    })
    it('should nto allow post with empty lattitude', (done) => {
      api.post('/Malang/attractions')
      .set('User-Email', currentUser.email)
      .set('Auth-Token', currentUser.auth_token)
      .send({
        name: 'Test',
        details: 'Testing details',
        geoCode: {
          longitude: '1234',
          lattitude: ''
        }
      }).expect(401, done)
    })
  })
  context('PUT /:city/attractions/:id', () => {
    it('should not allow put with empty name', (done) => {
      api.put('/Malang/attractions/5790a659ee3cf610000534c2')
      .set('User-Email', currentUser.email)
      .set('Auth-Token', currentUser.auth_token)
      .send({
        name: '',
        details: 'Testing details',
        geoCode: {
          longitude: '1234',
          lattitude: '1234'
        }
      }).expect(401, done)
    })
    it('should not allow put with empty details', (done) => {
      api.put('/Malang/attractions/5790a659ee3cf610000534c2')
      .set('User-Email', currentUser.email)
      .set('Auth-Token', currentUser.auth_token)
      .send({
        name: 'Test',
        details: '',
        geoCode: {
          longitude: '1234',
          lattitude: '1234'
        }
      }).expect(401, done)
    })
    it('should not allow put with empty longitude', (done) => {
      api.put('/Malang/attractions/5790a659ee3cf610000534c2')
      .set('User-Email', currentUser.email)
      .set('Auth-Token', currentUser.auth_token)
      .send({
        name: 'Test',
        details: 'Testing details',
        geoCode: {
          longitude: '',
          lattitude: '1234'
        }
      }).expect(401, done)
    })
    it('should nto allow put with empty lattitude', (done) => {
      api.put('/Malang/attractions/5790a659ee3cf610000534c2')
      .set('User-Email', currentUser.email)
      .set('Auth-Token', currentUser.auth_token)
      .send({
        name: 'Test',
        details: 'Testing details',
        geoCode: {
          longitude: '1234',
          lattitude: ''
        }
      }).expect(401, done)
    })
  })
})
