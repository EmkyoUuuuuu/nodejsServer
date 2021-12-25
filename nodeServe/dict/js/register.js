const form = document.querySelector('form')

const usernameInp = document.querySelector('.username')
const passwordInp = document.querySelector('.password')
const nickname = document.querySelector('.nickname')

form.addEventListener('submit', e => {
    e.preventDefault()

    const info = {
        username:usernameInp.value,
        password:passwordInp.value,
        nickname:nickname.value,
    }

    const xhr = new XMLHttpRequest()
    xhr.open('POST','http://localhost/users/register')
    xhr.onload = function(){
        const res = JSON.parse(xhr.responseText)
        
        if(res.code !== 1) return

        alert('注册成功，点击确定后跳转首页')
        window.location.href = './login.html'
    }
    xhr.setRequestHeader('content-type','application/json')
    xhr.send(JSON.stringify(info))
})

