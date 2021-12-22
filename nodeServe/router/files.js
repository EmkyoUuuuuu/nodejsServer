const router = require('express').Router()

const avatarHandler = require('../controller/files')

const upload = require('../middleware/files')

router.post('/avatar',upload.fields([{name:'avatar'},{name:'pic'},{name:'bgc'}]),avatarHandler)

module.exports = router