const userApplication = require('./user')
const db = require('../infrastructure/db/mongoose')
const repository = require('../infrastructure/repositories/user')

beforeAll(() => {
  db.connect('mongodb://localhost/testing-tutorial-test').catch(err => console.error(err))
})

afterAll(async () => {
  await repository.wipe()
  db.disconnect()
})

describe('Application', () => {
  describe('user', () => {
    it('combines a repository and a domaine to create a user', async () => {
      const res = await userApplication.create({
        firstName: 'Bob',
        lastName: 'Smith',
        userName: 'bsmith',
        password: 'test',
      })
      expect(res).toEqual({ success: true })
    })
  })
})
