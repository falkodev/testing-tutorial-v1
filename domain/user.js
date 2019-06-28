const create = user => repository => repository.create(user)
const get = userName => repository => repository.get(userName)

module.exports = {
  create,
  get,
}
