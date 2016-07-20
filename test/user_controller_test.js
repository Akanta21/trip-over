/* globals describe it context before after*/
const expect = require('chai').expect
const supertest = require('supertest')
require('../app')
const api = supertest('http://localhost:3000')
const User = require('../models/user')

describe('Sessions', () => {
  // var id
  // context('signup /signup', () => {
  //   before((done) => {
  //     api.post('/signup')
  //     .set('Accept', 'application/json')
  //     .send({
  //       'user[name]': 'user',
  //       'user[email]': 'user@email.com',
  //       'user[password]': '1234'
  //     }).end((err, res) => {
  //       expect(err).to.be.null
  //       id = res.body._id
  //       console.log(res.body)
  //       done()
  //     })
  //   })
  //   it('Should create a session')
  //   // after((done) => {
  //   //   User.findOne({_id: id}, (err, res) => {
  //   //     expect(err).to.be.null
  //   //     res.remove()
  //   //     done()
  //   //   })
  //   // })
  // })
  context('signin /signin', () => {
    it('Should return the current session', (done) => {
      api.get('/signin')
      .end((err, res) => {
        expect(err).to.be.null
        expect(200)
        done()
      })
    })
  })
})
