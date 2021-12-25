const express = require('express')

const inspectToken = require('../middleware/inspectToken')

const { userLogin , userRegister , userinfo , updataInfo, updataPwd } = require('../middleware/user')

const { loginHandler , registerHandler , infoHandler , udataInfoHandler, updataPwdHandler } = require('../controller/user')

const router = express.Router()

//用户登录处理
router.post('/login',userLogin,loginHandler)

//用户注册处理
router.post('/register',userRegister,registerHandler)

//此路由级中间件使用在后面这几张表中
//用来验证 id 和 uthorization 是否携带
router.use(userinfo)

//用户信息处理
router.post('/info',inspectToken,infoHandler)

//修改个人信息
router.post('/update',inspectToken,udataInfoHandler)

//修改个人密码
router.post('/updatePwd',updataPwd,inspectToken,updataPwdHandler)


//导出用户路由表
module.exports = router


