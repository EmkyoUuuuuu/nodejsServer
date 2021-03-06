const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination(req, file, cb){
        cb(null,'./upload/avatar/')
    },
    filename(req, file, cb){
        let name = 'avatar_' + new Date().getTime() + Math.random().toString().slice(2)
        name += path.parse(file.originalname).ext
        cb(null,name)
    }
})

const upload = multer({ storage })

module.exports = upload