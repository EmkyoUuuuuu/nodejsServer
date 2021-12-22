const express = require('express')

const { userLogin , userRegister , userlist } = require('../middleware/user')

const { loginHandler , registerHandler , listHandler } = require('../controller/user')

const router = express.Router()

//用户登录处理
router.post('/login',userLogin,loginHandler)

//用户注册处理
router.post('/register',userRegister,registerHandler)

//用户信息处理
router.post('/list',userlist,listHandler)

//导出用户路由表
module.exports = router


