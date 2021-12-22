module.exports = function(req, res){
    res.send({
        code:0,
        msg:"路径错误，请仔细检查",
        data:req.url
    })
}