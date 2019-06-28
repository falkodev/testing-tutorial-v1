const request = require('supertest')
const express = require('express')
const routes = require('./index')
const app = express()
const db = require('../../../infrastructure/db/mongoose')
const repository = require('../../../infrastructure/repositories/user')

beforeAll(() => {
  // given
  db.connect('mongodb://localhost/testing-tutorial-test').catch(err => console.error(err))
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
  app.use(routes)
})

afterAll(async () => {
  await repository.wipe()
  db.disconnect()
})

describe('Router', () => {
  describe('POST /user', () => {
    it('creates a user', async () => {
      const res = await request(app)
        .post('/user/create')
        .send({
          firstName: 'Bob',
          lastName: 'Smith',
          userName: 'bsmith',
          password: 'test',
        })
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')

      expect(res.status).toBe(200)
      expect(res.text).toBe('ok')
    })

    it('sends an error if body is not valid', async () => {
      const res = await request(app)
        .post('/user/create')
        .send({
          firstName: 'Bob',
          lastName: 'Smith',
          userName: 'bsmith',
        })
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')

      expect(res.status).toBe(400)
      expect(res.text).toBe('ValidationError: password: Path `password` is required.')
    })

    it('should validate an empty lastName', async () => {
      // when
      const res = await request(app)
        .post('/user/create')
        .send({
          firstName: 'Bob',
          userName: 'ttt',
          password: 'test',
        })
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')

      //then
      expect(res.status).toBe(200)
      expect(res.text).toBe('ok')
    })

    it('should return an error if userName is duplicated', async () => {
      // when
      const res = await request(app)
        .post('/user/create')
        .send({
          firstName: 'Bob',
          userName: 'bsmith',
          password: 'test',
        })
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')

      //then
      expect(res.status).toBe(400)
      expect(res.text).toBe(
        'MongoError: E11000 duplicate key error collection: testing-tutorial-test.users index: userName_1 dup key: { : "bsmith" }',
      )
    })
  })
})
