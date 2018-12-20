/*
*设备资产管理--统计分析
* */
var req = {}   //请求数据
var res = {}   //返回数据
一、用户信息
/*
* 1、获取设备数量、故障异常次数、维修次数
* 方法：POST
* 路由：/system/analysis/getDevData
* */
req = {
    userName: 'string',
  
}
Sucess:
    res = {
           devData:['广告牌数量','摄像头数量','风速数量','压力数量','电流数量','画布数量','震颤度数量','光照度数量','垂直度数量',],
           errorData:['广告牌数量','摄像头数量','风速数量','压力数量','电流数量','画布数量','震颤度数量','光照度数量','垂直度数量',],//故障异常次数
           fixData:['广告牌数量','摄像头数量','风速数量','压力数量','电流数量','画布数量','震颤度数量','光照度数量','垂直度数量',],//维修次数
    }
Error:返回一个error
/*
* 2、获取设备详细列表
* 方法：POST
* 路由：/system/analysis/getDevList
* */
req = {
    userName: 'string',
    devType:'string',
  
}
Sucess:
    res = {
           devList:[{
                 devType:'string',
                 devName:'string',
                 devId:'string',
                 fixNum:'sting',
                 errorRate:'string',
           },],
        
    }
Error:返回一个error
/*
* 3、获取设备故障异常详情
* 方法：POST
* 路由：/system/analysis/getDevErrorDetail
* */
req = {
    userName: 'string',
    devId:'string',
  
}
Sucess:
    res = {
           errorList:['故障异常详情1','故障异常详情2',...],
        
    }
Error:返回一个error
