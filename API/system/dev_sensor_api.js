/*
*设备资产管理--资产管理--传感器设备
* */
var req = {}   //请求数据
var res = {}   //返回数据
/*
* 1、获取传感器列表
* 方法：POST
* 路由：/system/dev_sensor/getSensorData
* */
req = {
    userName: 'string', 
    sensorType:'string',
}
Sucess:
    res = {
           sensorData:[{
               sensorId:'string',
               connectDevId:'string',
           },],
    }
Error:返回一个error
/*
* 2、获取传感器安装维修详情
* 方法：POST
* 路由：/system/dev_sensor/getSensorDetail
* */
req = {
    userName: 'string', 
    sensorType:'string',
    sensorId:'string',
}
Sucess:
    res = {
           sensorDetail:['安装维修记录1',...],
    }
Error:返回一个error
/*
* 3、修改传感器关联设备
* 方法：POST
* 路由：/system/dev_sensor/updateSensorConnectDev
* */
req = {
    userName: 'string', 
    sensorType:'string',
    sensorId:'string',
    connectDevId:'string',
}
Sucess:
    res = {
         msg:'修改成功'
    }
Error:返回一个error
/*
* 4、删除传感器
* 方法：POST
* 路由：/system/dev_sensor/deleteSensor
* */
req = {
    userName: 'string', 
    sensorType:'string',
    sensorId:'string',
}
Sucess:
    res = {
         msg:'删除成功'
    }
Error:返回一个error



