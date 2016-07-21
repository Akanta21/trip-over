/* globals describe it context after*/
const expect = require('chai').expect
const supertest = require('supertest')
require('../app')
const api = supertest('http://localhost:3000')
const User = require('../models/user')

describe('Sessions', () => {
  var id
  context('signup /signup', function () {
    this.timeout(5000)
    it('Should create a user', (done) => {
      api.post('/signup')
      .set('Accept', 'application/json')
      .send({
        user: {
          name: 'user',
          email: 'user@email.com',
          password: '1234'
        }
      }).end((err, res) => {
        expect(err).to.be.null
        id = res.body._id
        done()
      })
    })
    context('signin /signin', () => {
      it('Should allow user to sign in', function (done) {
        this.timeout(5000)
        api.post('/signin')
          .set('Accept', 'application/json')
          .send({
            user: {
              name: 'user',
              email: 'user@email.com',
              password: '1234'
            }
          }).end((err, res) => {
            expect(err).to.be.null
            expect(res.body.message).to.eq('user logged in')
            done()
          })
      })
    })
    after((done) => {
      User.findOne({_id: id}, (err, res) => {
        expect(err).to.be.null
        res.remove()
        done()
      })
    })
  })
})
