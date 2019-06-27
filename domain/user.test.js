const userDomain = require('./user')

describe('Domain', () => {
  describe('user', () => {
    it('uses the injected repository to create a user', () => {
      const repository = {
        create: jest.fn(_ => ({ success: true })),
      }
      userDomain.create({ name: 'test' })(repository)

      expect(repository.create).toBeCalled()
      expect(repository.create).toReturnWith({ success: true })
    })
  })
})
