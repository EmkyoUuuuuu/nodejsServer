//获取商品表的控制器
const mongoose = require('mongoose')

const goods = new mongoose.Schema({
    
})

const goodsModel =  mongoose.model('goods',goods)

module.exports = goodsModel