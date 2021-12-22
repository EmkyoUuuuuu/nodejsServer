const jwt = require('jsonwebtoken')

const { token:t , duration }= require('../config/app')

//模拟用户数据表
const userlist = [
    {id:1,username:'edison',password:'123456',cart:[]},
    {id:2,username:'mike',password:'1234567',cart:[]},
    {id:3,username:'emkyo',password:'12345678',cart:[]}
]

function loginHandler(req, res){
    const { username , password } = req.body

    const info = userlist.find(item => { return item.username === username && item.password === password })

    if(!info){
        res.send({
            code:0,
            msg:"用户不存在，请确认后重新登录",
            data:req.body
        })

        return
    }

    //生成token最好不要使用用户密码，有安全问题隐患
    const token = jwt.sign({id:info.id,username:info.username},t,{expiresIn:duration})

    res.send({
        code:1,
        msg:'登录成功',
        token:token
    })
}

function registerHandler(req, res){
    const { username , password } = req.body

    const info = {
        id: Math.ceil(Math.random() * 100),
        username,
        password,
        cart:[]
    }

    userlist.push(info)

    res.send({
        code:1,
        msg:'注册成功',
        data:info
    })
}

function listHandler(req, res){
    const { authorization:token } = req.headers
    const { username } = req.body

    if(!token){
        res.send({
            code:0,
            msg:'参数请携带authorization:token字段'
        })

    return
    }

    jwt.verify(token,t,(err,info) => {
        if(err) return res.send('token有问题，请重试')

        if(info.username !== username) return res.send('token有问题，请重试')

        console.log('您的管理员信息是' + JSON.stringify(info))

        res.send({
            code:1,
            msg:'用户列表获取成功',
            data:userlist
        })
    })
}

module.exports = {
    loginHandler,
    registerHandler,
    listHandler
}