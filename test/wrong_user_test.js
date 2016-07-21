/* globals it describe context*/
const supertest = require('supertest')
const api = supertest('http://localhost:3000')
const expect = require('chai').expect
require('../app')

describe('Invalid inputs for', () => {
  context('POST /signup', () => {
    it('should not accept empty name', (done) => {
      api.post('/signup')
      .set('Accept', 'application/json')
      .send({
        name: '',
        email: 'haha@gmail.com',
        password: '123456'
      }).expect(401, done)
    })
    it('should not accept empty email', (done) => {
      api.post('/signup')
      .set('Accept', 'application/json')
      .send({
        name: 'haha',
        email: '',
        password: '123456'
      }).expect(401, done)
    })
    it('should not accept empty email', (done) => {
      api.post('/signup')
      .set('Accept', 'application/json')
      .send({
        name: 'test',
        email: '',
        password: '123456'
      }).expect(401, done)
    })
    it('should not accept email with invalid format', (done) => {
      api.post('/signup')
      .set('Accept', 'application/json')
      .send({
        name: 'test',
        email: 'email',
        password: '123456'
      }).expect(401, done)
    })
    it('should not accept empty password', (done) => {
      api.post('/signup')
      .set('Accept', 'application/json')
      .send({
        name: 'test',
        email: 'email@gmail.com',
        password: ''
      }).expect(401, done)
    })
    it('should not accept password with length lesser than 6', (done) => {
      api.post('/signup')
      .set('Accept', 'application/json')
      .send({
        name: 'test',
        email: 'email@gmail.com',
        password: '1234'
      }).expect(401, done)
    })
  })
  context('POST /signin', () => {
    it('should not allow empty name', (done) => {
      api.post('/signin')
      .set('Accept', 'application/json')
      .send({
        name: '',
        email: 'test@gmail.com',
        password: '123456'
      }).expect(500, done)
    })
    it('should not allow empty email', (done) => {
      api.post('/signin')
      .set('Accept', 'application/json')
      .send({
        name: 'test',
        email: '',
        password: '123456'
      }).expect(500, done)
    })
    it('should not allow wrong email', (done) => {
      api.post('/signin')
      .set('Accept', 'application/json')
      .send({
        name: '',
        email: 'email',
        password: '123456'
      }).expect(500, done)
    })
    it('should not allow empty password', (done) => {
      api.post('/signin')
      .set('Accept', 'application/json')
      .send({
        name: '',
        email: 'test@gmail.com',
        password: ''
      }).expect(500, done)
    })
    it('should not allow invalid password', (done) => {
      api.post('/signin')
      .set('Accept', 'application/json')
      .send({
        name: '',
        email: 'test@gmail.com',
        password: '123457'
      }).expect(500, done)
    })
  })
})

describe('Invalid inputs for', () => {
  context('PUT /profile', () => {
    it('should not allow put with wrong authentication', (done) => {
      api.put('/profile')
      .set('User-Email', 'haha')
      .set('Auth-Token', 'lol')
      .send({
        name: 'Test',
        email: 'test@gmail.com',
        password: '123456'
      }).expect(401, done)
    })
    it('should not allow put for empty name', (done) => {
      api.put('/profile')
      .set('User-Email', 'test@gmail.com')
      .set('Auth-Token', 'a2b88193-0b4b-4746-9e69-ec775e3fdd76')
      .send({
        name: '',
        email: 'test@gmail.com',
        password: '123456'
      }).expect(401, done)
    })
    it('should not allow put for empty email', (done) => {
      api.put('/profile')
      .set('User-Email', 'test@gmail.com')
      .set('Auth-Token', 'a2b88193-0b4b-4746-9e69-ec775e3fdd76')
      .send({
        name: 'Test',
        email: '',
        password: '123456'
      }).expect(401, done)
    })
    it('should not allow put for invalid email', (done) => {
      api.put('/profile')
      .set('User-Email', 'test@gmail.com')
      .set('Auth-Token', 'a2b88193-0b4b-4746-9e69-ec775e3fdd76')
      .send({
        name: 'Test',
        email: 'test',
        password: '123456'
      }).expect(401, done)
    })
    it('should not allow put with empty password', (done) => {
      api.put('/profile')
      .set('User-Email', 'test@gmail.com')
      .set('Auth-Token', 'a2b88193-0b4b-4746-9e69-ec775e3fdd76')
      .send({
        name: 'Test',
        email: 'test@gmail.com',
        password: ''
      }).expect(401, done)
    })
    it('should not allow put with invalid password', (done) => {
      api.put('/profile')
      .set('User-Email', 'test@gmail.com')
      .set('Auth-Token', 'a2b88193-0b4b-4746-9e69-ec775e3fdd76')
      .send({
        name: 'Test',
        email: 'test@gmail.com',
        password: '1234'
      }).expect(401, done)
    })
  })
})
