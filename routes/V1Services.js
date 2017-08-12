import MediaService from '../services/media.service'

const express = require('express')

const router = express.Router()
router.get('/hello', ( req, res ) => {
  res.json('hello world!')
})
router.get('/media', MediaService.getMedia)

module.exports = router
