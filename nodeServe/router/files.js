const router = require('express').Router()

const inspectToken = require('../middleware/inspectToken')

const avatarHandler = require('../controller/files')

const upload = require('../utils/multer')

router.post('/avatar/:id',inspectToken,upload.single('avatar'),avatarHandler)

module.exports = router