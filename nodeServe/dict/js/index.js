//使用ajax上传文件
const form = document.querySelector('form')
form.addEventListener('submit',e => {
    e.preventDefault()

    //默认收集form表单中带有name属性的信息
    const fd = new FormData(form)
    //向收集到的信息中追加信息
    fd.append('id',3)

    const xhr = new XMLHttpRequest()
    xhr.open('POST','http://localhost/files/avatar')
    xhr.onload = function(){
        console.log(xhr.responseText)
    }
    //发送formData信息会自动添加请求头，不需要手动添加
    xhr.send(fd)
})

