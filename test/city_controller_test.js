/* globals it describe */
const supertest = require('supertest')
const api = supertest('http://localhost:3000')
const expect = require('chai').expect

describe('GET /city', () => {
  it('should return a 200 response', (done) => {
    api.get('/city')
      .set('Accept', 'application/json')
      .expect(200, done)
  })
  it('should return all the cities', function (done) {
    api.get('/city')
      .set('Accept', 'application/json')
      .end((error, response) => {
        expect(error).to.be.a('null')
        expect(response.body.length).to.equal(2)
        done()
      })
  })
})

describe('GET /city/:id/attractions', () => {
  it('should return a 200 response', (done) => {
    api.get('/Batu/attractions')
      .set('Accept', 'application/json')
      .expect(200, done)
  })
  it('should return one city with all the attractions', (done) => {
    api.get('/Batu/attractions')
      .set('Accept', 'application/json')
      .end((error, response) => {
        expect(error).to.be.a('null')
        expect(response.body[0]).to.have.property('name')
        expect(response.body[0].attractions[0]).to.have.property('details')
        done()
      })
  })
})

describe('POST /city/:id/new', function () {
  it('should return a 201 response')
  it('should let user create an attraction')
})

describe('UPDATE /city/:id/attraction_id', () => {
  it('should return a 201 response')
  it('should let user update an attraction')
})

describe('DELETE /city/:id/attraction_id', () => {
  it('should return a 201 response')
  it('should let user destroy an attraction')
})
