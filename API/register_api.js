var req = {}   //请求数据
var res = {}   //返回数据
/*
* 1、获取注册验证码
* 方法：GET
* 路由：/verficode
* */
Sucess:
    res = {
        checkcode: 'string'
    }
Error:返回一个error
/*
* 2、提交注册
* 方法：POST
* 路由：/registerin
* */
req = {
    email: 'string',
    password: 'string',
    phone: 'string',
    checkCode: 'string',
}
Sucess:重定向到登录页
Error:返回一个error
