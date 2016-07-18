/* globals describe it before */
const expect = require('chai').expect
const supertest = require('supertest')
const api = supertest('http://localhost:3000')

describe('GET /trips', () => {
  it('should return a 200 response', (done) => {
    api.get('/trips')
      .set('Accept', 'application/json')
      .expect(200, done)
  })
})
describe( 'GET /trips', () => {
  it('should return an array of trips', (done) => {
    api.get('/trips')
       .set('Accept', 'application/json')
         expect((response.body).to.be.an('array'), done)
       })
})
describe('SHOW /trips/:id', () => {
  it('should return a 200 response', (done) => {
    api.get('/trip/1')
      .set('Accept', 'application/json')
      .end((error, response) => {
        expect(200, done)
        done()
      })
  })
})

describe('POST /trips', () => {
  before((done) => {
    api.post('/trips')
    .set('Accept', 'application/json')
    .send({
      places: ['fdsuhius'],
      startDate: Date,
      endDate: Date
    }).end(done)
  })
  it('should return a 201 response', (done) => {
    api.get('/trips')
       .set('Accept', 'application/json')
       .expect(201, done)
  })
  it('should add new trip to database', (done) => {
    api.get('/trips')
       .set('Accept', 'application/json')
       .end((error, response) => {
         expect(error).to.be.a('null')
         expect(response.body[response.body.length - 1].places).to.equal('Test')
         done()
       })
  })
})
describe('PUT /trips/:id/', () => {
  it('should receive a 201 response', (done) => {
    api.put('/trips/1')
     .set('Accept', 'application/json')
     .send({ })
     .expect(201, done)
  })
})

describe('PUT /trips/:id/', () => {
  it('should update trip', (done) => {
    api.get('/trips/1')
     .set('Accept', 'application/json')
     .end((err, response) => {
       expect(response.body.trip[0].places.to.equal(''), done)
     })
   })
})

describe('DELETE /trips/:id', () => {
  it('should delete a trip from database', (done) => {
      api.delete('/trips/1')
      .set('Accept', 'application/json')
      .end((err,response) => {
       expect(response.body.message).to.eql('deleted')
       done()
      })
  })
})
