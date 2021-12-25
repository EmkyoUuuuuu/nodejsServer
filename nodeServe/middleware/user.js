
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
    const { username, password, nickname, age, gender } = req.body
    
    if(!username || !password || !nickname){
        res.send({
            code:0,
            msg:'注册请携带 username 、 password 和 nickname'
        })
        return
    }

    next()
}

async function userinfo(req , res , next){
    const { id } = req.body
    const { authorization:token } = req.headers
    
    if(!id){
        res.send({
            code:0,
            msg:'查询用户列表请携带你的id'
        })
        return
    }

    if(!token){
        res.send({
            code:0,
            msg:'参数请携带authorization:token字段'
        })

    return
    }

    next()
}

function updataInfo(req , res , next){

    //此处复用用户信息处理中间件

    next()
}

function updataPwd(req, res, next){
    const { newpwd, oldpwd, rnewpwd } = req.body    

    if(!newpwd || !oldpwd || !rnewpwd) return res.send({code:0,msg:'请完整填写表单'})

    if(newpwd !== rnewpwd) return res.send({code:0,msg:'两次密码不一致'})

    next()
}


module.exports = {
    userLogin,
    userRegister,
    userinfo,
    updataInfo,
    updataPwd
}