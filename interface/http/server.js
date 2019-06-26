const express = require('express')
const logger = require('morgan')
const routes = require('./routes')

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(routes)

// global error handler
app.use((error, req, res, next) => {
  console.error('global error handler', error)
  res.status(400).send('applicative error')
  next()
})

module.exports = app
