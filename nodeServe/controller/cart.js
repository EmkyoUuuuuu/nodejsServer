function listHandler(req, res){
    const { username , password } = req.body

    res.send({
        code:1,
        msg:'获取购物车列表成功',
        data:req.body,
        username,
        password
    })
}

function addHandler(req, res){
    const { username , password } = req.body

    res.send({
        code:1,
        msg:'购物车商品添加成功',
        data:req.body,
        username,
        password
    })
}

function removedHandler(req, res){
    const { username , password } = req.body

    res.send({
        code:1,
        msg:'购物车商品删除成功',
        data:req.body,
        username,
        password
    })
}


module.exports = {
    listHandler,
    addHandler,
    removedHandler
}