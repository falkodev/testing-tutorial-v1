const mongoose = require('mongoose')

const connect = dbURI => {
  return new Promise((resolve, reject) => {
    if (!dbURI) {
      reject('Missing database URI')
    }

    mongoose.connect(dbURI, { useNewUrlParser: true, useCreateIndex: true })
    const connection = mongoose.connection
    connection.on('error', console.error.bind(console, 'MongoDB connection error'))

    connection.on('connected', () => {
      console.log('MongoDB connection success')
      resolve(connection)
    })
  })
}

const disconnect = () => mongoose.disconnect()

module.exports = {
  connect,
  disconnect,
}
