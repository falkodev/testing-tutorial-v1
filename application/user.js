const userRepository = require('../infrastructure/repositories/user')

const service = {
  create: user => userRepository.create(user),
}

module.exports = service
