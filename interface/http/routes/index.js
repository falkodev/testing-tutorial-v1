const express = require('express')

const router = express.Router()

router.get('/', (req, res, next) => res.end("Let's roll!"))

module.exports = router
