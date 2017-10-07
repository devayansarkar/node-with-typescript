import * as supertest from 'supertest'
import app from './App'

describe('App', () => {
  it('/GET request to the App', () =>
    supertest(app)
      .get('/')
      .expect('Content-Type', /json/)
      .expect(200)
  )
})