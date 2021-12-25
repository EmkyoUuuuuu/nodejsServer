const id = window.localStorage.getItem('id')
const token = window.localStorage.getItem('token')

const xhr = new XMLHttpRequest()
xhr.open('POST','http://localhost/users/info')
xhr.onload = function(){
    const res = JSON.parse(xhr.responseText)

    if(res.code !== 1) return

    document.querySelector('.offBox').classList.add('active')
    document.querySelector('.onBox').classList.remove('active')

    const nickBox = document.querySelector('.nickname')
    nickBox.innerText = res.data.nickname
}
xhr.setRequestHeader('authorization',token)
xhr.setRequestHeader('content-type','application/json')
xhr.send(JSON.stringify({id}))