const server = require('./interface/http/server')
const db = require('./infrastructure/db/mongoose')

const PORT = process.env.PORT || 3000

db.connect('mongodb://localhost/testing-tutorial').catch(err => console.error(err))
server.listen(PORT, () => console.info(`✌️  Listening on port ${PORT}`))
