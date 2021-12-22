const express = require('express')

const router = express.Router()

const {token, add, remove} = require('../middleware/cart')

const { listHandler, addHandler, removedHandler } = require('../controller/cart')

router.use(token)

//购物车列表处理
router.post('/list',listHandler)

//购物车添加商品处理
router.post('/add',add,addHandler)

//购物车删除商品处理
router.post('/remove',remove,removedHandler)

//导出购物车路由表
module.exports = router