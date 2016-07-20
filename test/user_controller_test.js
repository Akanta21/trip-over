/* globals describe it */
const expect = require('chai').expect
const supertest = require('supertest')
require('../app')
const api = supertest('http://localhost:3000')

describe('Sessions', () => {
  before((done) => {
    api.post('/signup')
    .set('Accept', 'application/json')
    .send({
      username: 'user',
      password: 'pass'
    })
  })
  it('Should create a session')

  it('Should return the current session', (done) => {
    api.get('/signin')
    .end((err, res) => {
      expect(err).to.be.null
      expect(200)
      done()
    })
  })
})
