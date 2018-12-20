/*
*设备资产管理--资产管理--物联卡管理
* */
var req = {}   //请求数据
var res = {}   //返回数据
/*
* 1、获取物联卡列表
* 方法：POST
* 路由：/system/dev_TrafficCard/getTrafficCardData
* */
req = {
    userName: 'string', 
}
Sucess:
    res = {
           TrafficCardData:[{
               trafficCardId:'string',
               connectDevId:'string',
               trafficCardFlow:'string',
               installDate:'string',
               maturityDate:'string',
           },],
    }
Error:返回一个error
/*
* 2、获取物联卡续费记录
* 方法：POST
* 路由：/system/dev_TrafficCard/getTrafficCardRecord
* */
req = {
    userName: 'string', 
    trafficCardId:'string',
}
Sucess:
    res = {
           trafficCardRecord:['续费记录1',...],
    }
Error:返回一个error
/*
* 3、修改物联卡关联设备
* 方法：POST
* 路由：/system/dev_TrafficCard/updateTrafficCardConnectDev
* */
req = {
    userName: 'string', 
    trafficCardId:'string',
    connectDevId:'string',
}
Sucess:
    res = {
         msg:'修改成功'
    }
Error:返回一个error
/*
* 4、删除物联卡
* 方法：POST
* 路由：/system/dev_TrafficCard/deletaTrafficCard
* */
req = {
    userName: 'string', 
    trafficCardId:'string',
}
Sucess:
    res = {
         msg:'删除成功'
    }
Error:返回一个error



