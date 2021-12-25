const { tokenify } = require('../utils/token')

const usersModel = require('../db/user')

async function loginHandler(req, res){
    const { username , password } = req.body

    //连接数据库操作
    const result = await usersModel.findOne({username,password})

    if(!result) return res.send({code:0,msg:'用户名或密码错误，请重试'})

    const token = tokenify({id:result._id,username:result.username})

    res.send({
        code:1,
        msg:'登录成功',
        token,
        id:result._id
    })
}

async function registerHandler(req, res){
    const { username, password, nickname, age, gender } = req.body

    const result = await new usersModel({
        username,
        password,
        nickname,
        gender,
        age
    }).save()

    //返回值是一个promise对象，可以使用 async 、 await 语法
    if(!result) return res.send({code:0,msg:'注册失败，服务器繁忙，请稍后再试'})

    res.send({code:1,msg:'注册成功',data:result})
}

async function infoHandler(req, res){
    const { id } = req.body


    //连接数据库操作
    const result = await usersModel.findOne({_id:id})

    if(!result) return res.send({code:0,msg:'获取个人信息失败，服务器繁忙，请重试'})
    
    console.log(result)
    res.send({
        code:1,
        msg:"获取个人用户信息成功",
        data:result
    })
}

async function udataInfoHandler(req, res){
    const { id, nickname, age, gender, avatar } = req.body
    
    const info = {}
    
    if(nickname) info.nickname = nickname
    if(age) info.age = age
    if(gender) info.gender = gender
    if(avatar) info.avatar = avatar

    //此时info是过滤后要修改的用户信息
    const result = await usersModel.findByIdAndUpdate(id,info)
    if(!result) return res.send({code:0,msg:'修改个人信息失败，服务器繁忙，请重试'})

    res.send({code:1,msg:'个人信息修改成功'})
}

async function updataPwdHandler(req, res){
    const { id, newpwd, oldpwd } = req.body

    let result = await usersModel.findOne({_id:id,password:oldpwd})

    if(!result) return res.send({code:0,msg:'原始密码错误，请重试'})

    result = await usersModel.findByIdAndUpdate(id,{password:newpwd})
    if(!result) return res.send({code:0,msg:'修改个人信息失败，服务器繁忙，请重试'})

    res.send({code:1,msg:'密码修改成功'})

}

module.exports = {
    loginHandler,
    registerHandler,
    infoHandler,
    udataInfoHandler,
    updataPwdHandler
}