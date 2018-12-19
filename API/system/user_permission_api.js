/*
*用户权限管理
* */
var req = {}   //请求数据
var res = {}   //返回数据
一、用户信息
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
                userType:'string',
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
* 路由：/system/user_permission/deleteUserData
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
/*
* 6、添加新用户
* 方法：POST
* 路由：/system/user_permission/addNewUserData
* */
req = {
    userName: 'string',
    newData:{
               
                userName:'string',
                userPhone:'string',
                connectCompany:'string',
                userType:'string',
    }
  
}
Sucess:
    res = {
           msg:'添加成功'
    }
Error:返回一个error
二、角色权限
/*
* 1、获取未分配角色用户列表
* 方法：POST
* 路由：/system/user_permission/getNoPermissionUsers
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
           }],
    }
Error:返回一个error
/*
* 2、获取未分配广告牌
* 方法：POST
* 路由：/system/user_permission/getUnConnectBillboards
* */
req = {
    userName: 'string',
  
  
}
Sucess:
    res = {
           billboardData:[{
                billboardId:'string',
                connectCompany:'string', 
           }],
    }
Error:返回一个error
/*
* 3、创建用户角色
* 方法：POST
* 路由：/system/user_permission/createUserRole
* */
req = {
    userName: 'string',
    roleData:{
               userType:'string',
               checkedUsers:[],
               connectRegions:[],//仅在角色类型为管理人员时有效
               connectBillboards:[],//仅在角色类型为客户人员时有效
               checkedPermissions:[],
    }
  
}
Sucess:
    res = {
           msg:'角色创建成功'
    }
Error:返回一个error
三、系统日志
/*
* 1、依据用户名、手机号查询用户登录日志
* 方法：POST
* 路由：/system/user_permission/getSingleUserLoginLogs
* */
req = {
    userName: 'string',
    queryMsg:'string',
  
}
Sucess:
    res = {
           logData:['登录日志描述','登录日志描述'],//每次最多十条日志
    }
Error:返回一个error
/*
* 2、获取用户登录日志
* 方法：POST
* 路由：/system/user_permission/getUserLoginLogs
* */
req = {
    userName: 'string',
  
}
Sucess:
    res = {
           logData:['登录日志描述','登录日志描述'],//每次最多十条日志
    }
Error:返回一个error
/*
* 3、获取更多日志
* 方法：POST
* 路由：/system/user_permission/getMoreUserLoginLogs
* */
req = {
    userName: 'string',
    isSingle：true/false,//是否指定用户
    queryMsg:'string',//在指定用户时有效
  
}
Sucess:
    res = {
           logData:['登录日志描述','登录日志描述'],//每次最多十条日志
    }
Error:返回一个error
