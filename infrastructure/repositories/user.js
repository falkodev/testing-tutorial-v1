const User = require('../db/models/user')

const create = async user => {
  try {
    await new User(user).save()
    return { success: true }
  } catch (error) {
    console.error(error.message)
    throw new Error(error)
  }
}

const get = async userName => {
  try {
    const user = await User.findOne({ userName })
    return user
  } catch (error) {
    console.error(error.message)
    throw new Error(error)
  }
}

const wipe = () => User.deleteMany({})

module.exports = { create, wipe, get }
