
//请求中间件
function goodsCategroy( req, res, next){
    const categroy = req.query.categroy

    if(!categroy){
        res.send({
            code:0,
            msg:'参数请携带 categroy'
        })
        return
    }

    next()
}


module.exports = {
    goodsCategroy
}
    
