const request = require('supertest')
const app = require('./index')

describe('Router', () => {
  describe('GET /', () => {
    test('returns text message', async () => {
      const res = await request(app).get('/')
      expect(res.status).toBe(200)
      expect(res.text).toBe('Let\'s roll!')
    })
  })
})