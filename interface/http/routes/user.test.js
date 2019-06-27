const request = require('supertest')
const express = require('express')
const routes = require('./index')
const app = express()
const db = require('../../../infrastructure/db/mongoose')
const repository = require('../../../infrastructure/repositories/user.js')

beforeAll(() => {
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
  describe('POST /user/create', () => {
    test('create a user', async () => {
      const res = await request(app)
        .post('/user/create')
        .send({
          firstName: 'Anthony',
          lastName: 'Tarlao',
          userName: 'atarlao',
          password: 'test',
        })
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')

      expect(res.status).toBe(200)
      expect(res.text).toBe('ok')
    })
  })
})
