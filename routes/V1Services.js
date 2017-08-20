import MediaService from '../services/media.service'

const express = require('express')

const router = express.Router()

router.get('/media', MediaService.getMedia)


module.exports = router
