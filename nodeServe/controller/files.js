module.exports = function(req , res){
    res.send({
        code:1,
        msg:"文件上传完毕",
        data:req.files
    })
}