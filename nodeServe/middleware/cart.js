const { token:t } = require('../config/app')

const jwt = require('jsonwebtoken')

//路由中间件
function token( req, res, next){
    const { authorization:token } = req.headers
    const { username, password }  = req.body

    if(!token){
        res.send({
            code:0,
            msg:'参数请携带authorization:token字段'
        })

    return
    }

    if(!username || !password){
        res.send({
            code:0,
            msg:'参数请携带 username 和 password'
        })
        return
    }

    jwt.verify(token,t,(err,info) => {
        if(err) return res.send('token有问题，请重试')

        if(info.username !== username) return res.send('token有问题，请重试')

    })

    next() //流入下一环节
}

function add(req , res , next){
    const id = req.body.goodsid

    if(!id){
        res.send({
            code:0,
            msg:"请携带参数 goodsid 进行添加操作",
            data:req.body
        })
        return
    }

    next()
}

function remove(req , res , next){
    const id = req.body.goodsid

    if(!id){
        res.send({
            code:0,
            msg:"请携带参数 goodsid 进行删除操作",
            data:req.body
        })
        return
    }

    next()
}

module.exports = {
    token,
    add,
    remove
}