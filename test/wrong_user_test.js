/* globals it describe context*/
const supertest = require('supertest')
const api = supertest('http://localhost:3000')
const expect = require('chai').expect
require('../app')

describe('Invalid inputs for', () => {
  context('POST /signup', () => {
    it('should not accept empty email', (done) => {
      api.post('/signup')
      .set('Accept', 'application/json')
      .send({
        email: '',
        password: '123456'
      }).expect(401, done)
    })
    it('should not accept email with invalid format', (done) => {
      api.post('/signup')
      .set('Accept', 'application/json')
      .send({
        email: 'email',
        password: '123456'
      }).expect(401, done)
    })
    it('should not accept empty password', (done) => {
      api.post('/signup')
      .set('Accept', 'application/json')
      .send({
        email: 'email@gmail.com',
        password: ''
      }).expect(401, done)
    })
    it('should not accept password with length lesser than 6', (done) => {
      api.post('/signup')
      .set('Accept', 'application/json')
      .send({
        email: 'email@gmail.com',
        password: '1234'
      }).expect(401, done)
    })
  })
  context('POST /signin', () => {
    it('should not allow empty email', (done) => {
      api.post('/signin')
      .set('Accept', 'application/json')
      .send({
        email: '',
        password: '123456'
      }).expect(500, done)
    })
    it('should not allow wrong email', (done) => {
      api.post('/signin')
      .set('Accept', 'application/json')
      .send({
        email: 'email',
        password: '123456'
      }).expect(500, done)
    })
    it('should not allow empty password', (done) => {
      api.post('/signin')
      .set('Accept', 'application/json')
      .send({
        email: 'test@gmail.com',
        password: ''
      }).expect(500, done)
    })
    it('should not allow invalid password', (done) => {
      api.post('/signin')
      .set('Accept', 'application/json')
      .send({
        email: 'test@gmail.com',
        password: '123457'
      }).expect(500, done)
    })
  })
})
