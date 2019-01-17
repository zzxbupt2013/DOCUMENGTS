/* 1.获取广告牌列表
*方法：POST
*路由：/data/getDataDeviceList
* 返回数据：devicesList=[
* {
number : '设备编号',
Illuminance : '光照度',
wind : '风速',
vertical : '垂直度',
tremor : '震颤度',
horizontal : '水平偏差',
Electric : '电流值',
devState : '状态',
canvasLevel : '画布等级',
totalHeight : '广告牌总高度',
circleHeight : '柱体高度',
alertState : '报警状态',
time : '时间'
* },
* ]
* */
req = {
 userName:'string',
 startDate:'日期字符串，如2018-09-10',
 endDate:'日期字符串，如2018-09-10',
 areaType:'string',
 roadType:'string'
 }
Success:
 res={
 devicesList:[]
}
 Error:返回一个error
/*
*2.获取设备GPS信息以及设备编号
*方法：POST
* 路由：/data/getDataDeviceGPS
* 发送数据：checkedDevices=['设备编号1','设备编号2','设备编号3'...]
* 返回数据：devicesGPSList=[{lon:'string',lat:'string',billboardId:'string',isAlert:true/false},{lon:'string',lat:'string',billboardId:'string',isAlert:true/false}]
* */
req = {
    userName:'string',
   checkedDevices:[]
}
Success:
    res={
        devicesGPSList:[]
    }
Error:返回一个error
/*
*3.定位单个广告牌
*方法：POST
* 路由：/data/locationSingleDataDevice
* */
req = {
   userName:'string',
    deviceIdentify:'string',
}
Success:
    res={
        lon:'string',
        lan:'string',
        billboardId:'string'
    }
Error:返回一个error
 /*
* 4.获取marker弹框展示所需信息
* 方法：POST
* 路由：/data/getMarkerDetailMsg
* */
 req = {
 userName:'string',
 billboardId:'string',
 }
 Success:
res={
 number : '设备编号',
 canvasLevel : '画布等级',
 Illuminance : '光照度',
 wind : '风速',
 vertical : '垂直度',
 tremor : '震颤度',
 horizontal : '水平偏差',
 Electric : '电流值',
 devState : '状态',
 totalHeight : '广告牌总高度',
 circleHeight : '柱体高度',
 alertState : '报警状态',
 alertimg: '广告牌图片',
 imgSrc : []'报警图片地址',
 }
 Error:返回一个error
  /*
*5.获取已有区划
*方法：POST
* 路由：/data/getRegions
* */
req = {
    userName:'string',
}
Success:
    res={
        regions:['区划一','区划二',],
        roads:['路线一','路线二',]
    }
Error:返回一个error  
  /*
*6.获取区划对应路线
*方法：POST
* 路由：/data/getRoads
* */
req = {
    userName:'string',
    region:'string',
}
Success:
    res={
        roads:['路线一','路线二',]
    }
Error:返回一个error  
 
