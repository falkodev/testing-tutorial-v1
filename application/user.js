const userRepository = require('../infrastructure/repositories/user')
const userDomain = require('../domain/user')

const service = {
  create: user => userDomain.create(user)(userRepository),
}

module.exports = service
