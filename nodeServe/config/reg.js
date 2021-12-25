module.exports = {
    username:/^\w{5,12}$/,    //用户名和密码的正则验证
    password:/^\w{5,12}$/,
    nickname: /^.{2,6}$/,
    gender: /^(男|女|保密)$/,
    age: /^(1[89]|[2-5]\d|60)$/
}