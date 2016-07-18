const supertest = require('supertest')
const api = supertest('http://localhost:3000')
const app = require('../app')
const expect = require('chai').expect
var mongoose = require ('mongoose')

var City = require('../models/city')

describe('GET /city', () => {
  it('should return a 200 response', (done) => {
    api.get('/city')
      .set('Accept', 'application/json')
      .expect(200, done)
  })
  // it('should return all the cities', function (done) {
  //   api.get('/city')
  //     .set('Accept', 'application/json')
  //     .end(function (error, response) {
  //       City.find(function (err, city) {
  //         expect(response.body.length).to.eq(city.length)
  //         done()
  //       })
  //     })
  // })
})

describe('SHOW /city/:id', () => {
  it('should return a 200 response')
  it('should return one city with all the attractions')
})

// describe('POST /city/:id/new', () => {
//   it('should return a 201 response', (done) => {
//     api.get('/city/:id/new')
//       .set('Accept', 'application/json')
//       .expect(201, done)
//   })
//   it('should let user create an attraction', (done) => {
//     Attraction.count(function (err, beforeCount) {
//       api.post('/attraction')
//         .set('Accept', 'application/json')
//         .send({ 'name': 'Test 1', 'details': 'Test 1 detail text', 'geoCode': {'Longititude': '1.3521', 'Lattitude': '103.8198'}, 'phoneNumber': '0341-111111', 'img': 'http://i2.wp.com/www.culledculture.com/wp-content/uploads/2014/10/Screen-Shot-2014-10-28-at-11.25.37-AM.png' })
//         .end(function (error, response) {
//           Attraction.count(function (err, afterCount) {
//             expect(afterCount).to.eq(++beforeCount)
//             done()
//           })
//         })
//     })
//   })
// })

describe('POST /city/:id/new', () => {
  it('should return a 201 response', (done) => {
    api.get('/city/:id/new')
      .set('Accept', 'application/json')
      .expect(201, done)
  })
  it('should let user create an attraction', (done) => {
    Attraction.count(function (err, beforeCount) {
      api.post('/attraction')
        .set('Accept', 'application/json')
        .send({ 'name': 'Test 1', 'details': 'Test 1 detail text', 'geoCode': {'Longititude': '1.3521', 'Lattitude': '103.8198'}, 'phoneNumber': '0341-111111', 'img': 'http://i2.wp.com/www.culledculture.com/wp-content/uploads/2014/10/Screen-Shot-2014-10-28-at-11.25.37-AM.png' })
        .end(function (error, response) {
          Attraction.count(function (err, afterCount) {
            expect(afterCount).to.eq(++beforeCount)
            done()
          })
        })
    })
  })
})

describe('UPDATE /city/:id/attraction_id', () => {
  it('should return a 201 response')
  it('should let user update an attraction')
})

describe('DELETE /city/:id/attraction_id', () => {
  it('should return a 201 response')
  it('should let user destroy an attraction')
})
