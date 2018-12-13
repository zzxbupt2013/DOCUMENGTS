var req = {}   //请求数据
var res = {}   //返回数据
/*
* 1、用户登出
* 方法：GET
* 路由：/index/loginout
* */
Sucess:重定向到登录页
Error:返回一个error
/*
* 2、修改密码
* 方法：POST
* 路由：/index/modifyPass
* */
req = {
    userName: 'string',
    oldPassword: 'string',
    newPassword: 'string',
}
Sucess:
    res = {
        msg: '修改成功'
    }
Error:返回一个error
