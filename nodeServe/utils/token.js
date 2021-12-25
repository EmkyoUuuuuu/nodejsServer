const jwt = require('jsonwebtoken')

const { token:t , duration }= require('../config/app')

function tokenify(info){
    //生成token最好不要使用用户密码，有安全问题隐患
    return jwt.sign(info,t,{expiresIn:duration})
}

function tokenParse(token){
    return new Promise(function (resolve){
        jwt.verify(token,t,(err,info) => {
            if(err) return resolve({code:0})

            resolve({code:1,data:info})
        })
    })
}

module.exports = {
    tokenify,
    tokenParse
}
