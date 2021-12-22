
//请求中间件
function userLogin( req, res, next){
    const { username, password } = req.body 

    if(!username || !password){
        res.send({
            code:0,
            msg:'登录请携带 username 和 password'
        })
        return
    }

    next()
}

function userRegister(req , res , next){
    const { username, password } = req.body
    
    if(!username || !password){
        res.send({
            code:0,
            msg:'注册请携带 username 和 password'
        })
        return
    }

    next()
}

function userlist(req , res , next){
    const { username } = req.body
    
    if(!username){
        res.send({
            code:0,
            msg:'查询用户列表请携带你的用户名'
        })
        return
    }

    next()
}


module.exports = {
    userLogin,
    userRegister,
    userlist
}