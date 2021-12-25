
const id = window.localStorage.getItem('id')
const token = window.localStorage.getItem('token')

const form = document.querySelector('form')

const fileInp = document.querySelector('#fileInp')
const avatarBox = document.querySelector('.avatar')
const nicknameInp = document.querySelector('.nickname')
const ageInp = document.querySelector('.age')
const genderInp = document.querySelector('.gender')

bingInfo()
function bingInfo(){
    const xhr = new XMLHttpRequest()
    xhr.open('POST','http://localhost/users/info')
    xhr.onload = function(){
        const res = JSON.parse(xhr.responseText)
        avatarBox.src = 'http://localhost/' + res.data.avatar
        nicknameInp.value = res.data.nickname
        ageInp.value = res.data.age
        genderInp.value = res.data.gender
    }

    xhr.setRequestHeader('authorization',token)
    xhr.setRequestHeader('content-type','application/json')
    xhr.send(JSON.stringify({id}))
}

let path = ''

fileInp.addEventListener('change', e => {
    
    const file = fileInp.files[0]

    if(!file) return
    
    if (file.type.indexOf('image') === -1) return alert('您选中的不是图片')

    const fd = new FormData()
    fd.append('avatar',file)

    const xhr = new XMLHttpRequest()
    xhr.open('POST','http://localhost/files/avatar/' + id)
    xhr.onload = function(){
        const res = JSON.parse(xhr.responseText)
        path = res.data.path
        avatarBox.src = 'http://localhost/' + path
        
    }
    xhr.setRequestHeader('authorization',token)
    xhr.send(fd)

})


form.addEventListener('submit', e => {
    e.preventDefault()

    const info = {
        id,
        avatar:path,
        nickname:nicknameInp.value,
        age:ageInp.value,
        gender:genderInp.value
    }

    const xhr = new XMLHttpRequest()
    xhr.open('POST','http://localhost/users/update')

    xhr.onload = function(){
        const res = JSON.parse(xhr.responseText)
        console.log(res)
    }

    xhr.setRequestHeader('authorization',token)
    xhr.setRequestHeader('content-type','application/json')
    xhr.send(JSON.stringify(info))
})