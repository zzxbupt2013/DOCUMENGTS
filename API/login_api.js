var req = {}   //请求数据
var res = {}   //返回数据
/*
* 1、获取登录验证码
* 方法：GET
* 路由：/verficode
* */
Sucess:
    res = {
        checkcode: 'string'
    }
Error:返回一个error
/*
* 2、提交登录
* 方法：POST
* 路由：/signin
* */
req = {
    userName: 'string',
    password: 'string',
    checkCode: 'string',
}
Sucess:重定向到界面首页
Error:返回一个error
