const server = require('./interface/http/server')

const PORT = process.env.PORT || 3000
server.listen(PORT, () => console.info(`✌️ Listening on port ${PORT}`))