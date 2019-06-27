const userRepository = require('./user')

describe('Repository', () => {
  describe('user', () => {
    it.only('throws an error if model is not validated', async () => {
      try {
        await userRepository.create({ name: 'test' })
      } catch (error) {
        expect(error.message).toContain('Error')
      }
    })
  })
})
