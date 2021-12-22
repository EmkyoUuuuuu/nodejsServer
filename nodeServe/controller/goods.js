function listHandler(req, res){
    const { categroy } = req.query

    res.send({
        code:1,
        msg:'获取商品列表成功',
        data:req.query,
        categroy
    })
}

function infoHandler(req, res){
    const { id } = req.params

    res.send({
        code:1,
        msg:'获取商品详细信息成功',
        data:req.params,
        id
    })
}


module.exports = {
    listHandler,
    infoHandler,
}