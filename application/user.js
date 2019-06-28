const userRepository = require('../infrastructure/repositories/user')
const userDomain = require('../domain/user')

const service = {
  create: user => userDomain.create(user)(userRepository),
  get: userName => userDomain.get(userName)(userRepository),
}

module.exports = service
