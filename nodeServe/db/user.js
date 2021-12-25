//获取用户表的控制器
const mongoose = require('mongoose')

const users = new mongoose.Schema({
    username:String,
    password:{
        type:String,
        required:true,
        minlength:6,
        maxlength:12
    },
    nickname:String,
    gender:{
        type:String,
        enum:['男','女','保密'],
        default:'保密'
    },
    createTime:{
        type:Date,
        default:Date.now()
    },
    cart:Array,
    age:{
        type:Number,
        min:12,
        max:60,
        default:22
    },
    avatar:{
        type:String,
        default:'upload/avatar/default.webp'
    }
})

const usersModel =  mongoose.model('users',users)

module.exports = usersModel