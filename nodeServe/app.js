const express = require('express')

const serverCors = require('cors')

const body = require('body-parser')

const { port , cors } = require('./config/app')
const empty = require('./middleware/empty')

const userRouter = require('./router/users')
const goodsRouter = require('./router/goods')
const cartRouter = require('./router/cart')

const filesRouter = require('./router/files')

const app = express()

if(cors) app.use(serverCors())

//处理静态资源
app.use('/public',express.static('./dict/'))

//处理POST请求的请求体数据
app.use(body.json())
app.use(body({ extended:false }))

//处理接口数据
app.use('/users',userRouter)
app.use('/goods',goodsRouter)
app.use('/cart',cartRouter)

//处理上传文件
app.use('/files',filesRouter)


//全局空路由
//对错误路径进行统一处理
app.use(empty)

app.listen( port, () => {console.log(`express 服务器开启在 HTTP 默认 ${ port } 端口`)})