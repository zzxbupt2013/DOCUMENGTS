var req = {}   //请求数据
var res = {}   //返回数据
/*
* 1.获取广告牌列表
*方法：POST
*路由：/screen/getScreenDeviceList
* 返回数据：devicesList=[
* {
*               name: '设备名称',
                number: '设备编号',
                time:'报警时间',
                canvasLevel:'画布等级',
                alertMsg:'报警信息',
                alertWind:'当前风速',
                alertFace:'报警牌面',
                alertImgSrc:'报警图片',            
* },
* ]
* */
req = {
    userName:'string',
    startDate:'日期字符串，如2018-09-10',
    endDate:'日期字符串，如2018-09-10',
    roadType:'string',
    areaType:'string',
    roadName:'string'
}
Success:
res={
    devicesList:[]
}
Error:返回一个error
/*
*2.获取设备GPS信息以及设备编号
*方法：POST
* 路由：/screen/getScreenDeviceGPS
* 发送数据：checkedDevices=['设备编号1','设备编号2','设备编号3'...]
* 返回数据：devicesGPSList=[{lon:'string',lat:'string',billboardId:'string',isAlert:'boolean'},{lon:'string',lat:'string',billboardId:'string',isAlert:'boolean'}]
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
* 路由：/screen/locationSingleScreenDevice
* */
req = {
   userName:'string',
    deviceIdentify:'string',
}
Success:
    res={
        lon:'string',
        lan:'string',
        billboardId:'string',
        isAlert:'boolean'
    }
Error:返回一个error
/*
* 4.获取marker弹框展示所需信息
* 方法：POST
* 路由：/screen/getMarkerDetailMsg
* 返回数据：{
                name: '设备名称',
                number: '设备编号',
                alertMsg:'报警信息',
                alertWind:'当前风速',
                imgSrc:'报警图片地址',
                
                
}
* */
req = {
    userName:'string',
    billboardId:'string',
}
Success:
    res={
                name: '设备名称',
                number: '设备编号',
                alertMsg:'报警信息',
                alertWind:'当前风速',
                imgSrc:'报警图片地址',
    }
Error:返回一个error
