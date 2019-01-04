/*
*设备资产管理--资产巡检
* */
var req = {}   //请求数据
var res = {}   //返回数据
/*
* 1、查询记录
* 方法：POST
* 路由：/system/dev_inspection/queryRecord
* */
req = {
    userName: 'string',
    queryData:{
       sensorType:'string',
       recordType:'string',
       recordDevId:'string',
       startDate:'string',
       endDate:'string',
    }
  
}
Sucess:
    res = {
           recordData:['记录1','记录2','记录3',...],
    }
Error:返回一个error
/*
* 1、新增记录
* 方法：POST
* 路由：/system/dev_inspection/addRecord
* */
req = {
    userName: 'string',
    addData:{
       sensorType:'string',
       recordType:'string',
       recordDevId:'string',
       recordDate:'string',
       recordDetail:'string',
    }
  
}
Sucess:
    res = {
           msg:'添加成功'
    }
Error:返回一个error
