module.exports = function(req , res){
    console.log(req.file)
    res.send({
        code:1,
        msg:"文件上传完毕",
        data:req.file
    })
}