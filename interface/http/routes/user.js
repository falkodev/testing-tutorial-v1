const express = require('express')
const userService = require('../../../application/user')
const router = express.Router()

router.post('/create', async (req, res, next) => {
  try {
    await userService.create(req.body)
    res.send('ok')
  } catch (error) {
    res.status(400).send(error.message)
  }
})

router.get('/:userName', async (req, res, next) => {
  try {
    const user = await userService.get(req.params.userName)
    res.send(user)
  } catch (error) {
    res.status(400).send(error.message)
  }
})

module.exports = router
