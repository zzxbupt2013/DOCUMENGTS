/*
*用户权限管理
* */
var req = {}   //请求数据
var res = {}   //返回数据
/*
* 1、获取用户列表
* 方法：POST
* 路由：/system/user_permission/getUserData
* */
req = {
    userName: 'string',
  
}
Sucess:
    res = {
           userData:[{
                userName:'string',
                userPhone:'string',
                connectCompany:'string',
                userType:'string',
           }],
    }
Error:返回一个error
/*
* 2、依据用户名、手机号、企业名查询用户列表
* 方法：POST
* 路由：/system/user_permission/getUserDataByQuery
* */
req = {
    userName: 'string',
    queryMsg:'string',
  
}
Sucess:
    res = {
           userData:[{
                userName:'string',
                userPhone:'string',
                connectCompany:'string',
                userType:'string',
           }],
    }
Error:返回一个error
/*
* 3、更新用户信息
* 方法：POST
* 路由：/system/user_permission/updateUserData
* */
req = {
    userName: 'string',
    updateData:{
                oldUserPhone:'string'
                userName:'string',
                userPhone:'string',
                connectCompany:'string',
    }
  
}
Sucess:
    res = {
           msg:'更新成功'
    }
Error:返回一个error
/*
* 4、更新用户权限
* 方法：POST
* 路由：/system/user_permission/updateUserPermission
* */
req = {
    userName: 'string',
    updateData:{
               users:[],
               permissions:[]
    }
  
}
Sucess:
    res = {
           msg:'更新成功'
    }
Error:返回一个error
/*
* 5、删除用户
* 方法：POST
* 路由：/system/user_permission/updateUserPermission
* */
req = {
    userName: 'string',
    deleteUser:'string'
  
}
Sucess:
    res = {
           msg:'删除成功'
    }
Error:返回一个error
