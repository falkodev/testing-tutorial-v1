const userRepository = require('./user')

describe('Repository', () => {
  describe('user', () => {
    it('throws an error if model is not validated', async () => {
      try {
        await userRepository.create({ name: 'test' })
      } catch (error) {
        expect(error.message).toContain('Error')
      }
    })

    it('throws an error if userName does not exist', async () => {
      try {
        await userRepository.get({ userName: 'test' })
      } catch (error) {
        console.log(
          'error.message',
          require('util').inspect(error.message, { colors: true, depth: 1 }),
        )
        expect(error.message).toContain('Error')
      }
    })
  })
})
