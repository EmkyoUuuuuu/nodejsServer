const { tokenParse } = require('../utils/token')

async function inspectToken(req, res, next){
    const id = req.body.id || req.params.id
    
    const { authorization:token } = req.headers

    const { code, data } = await tokenParse(token)

    if( code === 0 || data.id !== id ) return res.send({code:0,msg:"token字段有问题"})

    next()

}

module.exports = inspectToken