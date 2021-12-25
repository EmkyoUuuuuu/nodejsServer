const form = document.querySelector('form')

const usernameInp = document.querySelector('.username')
const passwordInp = document.querySelector('.password')

form.addEventListener('submit', e => {
    e.preventDefault()

    const info = {
        username:usernameInp.value,
        password:passwordInp.value
    }

    const xhr = new XMLHttpRequest()
    xhr.open('POST','http://localhost/users/login')
    xhr.onload = function(){
        const res = JSON.parse(xhr.responseText)
        
        if(res.code !== 1) return

        window.localStorage.setItem('id',res.id)
        window.localStorage.setItem('token',res.token)

        alert('登陆成功，点击确定后跳转首页')
        window.location.href = './index.html'
    }
    xhr.setRequestHeader('content-type','application/json')
    xhr.send(JSON.stringify(info))
})

















//使用ajax上传文件
// const form = document.querySelector('form')
// form.addEventListener('submit',e => {
//     e.preventDefault()

//     //默认收集form表单中带有name属性的信息
//     const fd = new FormData(form)
//     //向收集到的信息中追加信息
//     fd.append('id',3)

//     const xhr = new XMLHttpRequest()
//     xhr.open('POST','http://localhost/files/avatar')
//     xhr.onload = function(){
//         console.log(xhr.responseText)
//     }
//     //发送formData信息会自动添加请求头，不需要手动添加
//     xhr.send(fd)
// })

