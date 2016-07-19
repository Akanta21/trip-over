/* globals describe it before */
const expect = require('chai').expect
const supertest = require('supertest')
const app = require('../app')
const api = supertest('http://localhost:3000')

describe('Sessions', () => {
  it('Should create a session', (done) => {
    api.post('/signup')
    .send({ username: 'user', password: 'pass' })
    .end((err, res) => {
      // expect(err).to.be.a('null')
      expect(201)
      done()
    })
  })

  it('Should return the current session', (done) => {
    api.get('/signin')
    .end((err, res) => {
      // expect(err).to.be.a('null')
      expect(200)
      done()
    })
  })
})
