const express = require('express')
const userRoutes = require('./user')

const router = express.Router()

router.get('/', (req, res, next) => res.end("Let's roll!"))
router.use('/user', userRoutes)

module.exports = router
