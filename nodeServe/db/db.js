const mongoose = require('mongoose')

//和数据库建立连接
exports.connect = () => {

    mongoose.connect('mongodb://localhost:27017/demo',() => console.log("数据库连接成功"))

}


