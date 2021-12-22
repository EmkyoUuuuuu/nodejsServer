const express = require('express')

const { goodsCategroy} = require('../middleware/goods')

const { listHandler, infoHandler } = require('../controller/goods')

const router = express.Router()

//商品列表处理
router.get('/list',goodsCategroy,listHandler)

//商品详细信息处理
router.get('/info/:id',infoHandler)

//导出商品路由表
module.exports = router