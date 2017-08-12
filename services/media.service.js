import MediaDao from './dao/media.dao'

const MediaService = {
  async getMedia( req, res ) {
    try {
      const media = await MediaDao.getAllMedia()

      return res.json(media)
    } catch ( error ) {
      return res.status(500).send(error)
    }
  },
}

module.exports = MediaService
