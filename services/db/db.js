let options = {}
if ( global.isTesting ) {
  options = { noLocking: true }
}

const PGP = require('pg-promise')(options)

const connectionString = process.env.LOCAL_POSTGRES
const client = new PGP(connectionString)

module.exports = client
