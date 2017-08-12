const client = require('../db/db')

const getAllMediaQuery = 'SELECT * FROM media'

const MediaDao = {
  async getAllMedia() {
    try {
      const result = await client.any(getAllMediaQuery, [])

      return result
    } catch ( error ) {
      console.log('Error: ', error) // eslint-disable-line no-console
      throw error
    }
  },
}

module.exports = MediaDao
