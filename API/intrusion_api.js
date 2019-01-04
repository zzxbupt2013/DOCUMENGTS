var req = {}   //请求数据
var res = {}   //返回数据
/*
* 1.获取广告牌列表
*方法：POST
*路由：/intrusion/getIntrusionDeviceList
* 返回数据：devicesList=[
* {
*               name: '设备名称',
                number: '设备编号',
                time:'时间',
                imgSrc:'报警图片',
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
* 路由：/intrusion/getIntrusionDeviceGPS
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
* 路由：/intrusion/locationSingleIntrusionDevice
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
    }
Error:返回一个error
/*
* 4.获取marker弹框展示所需信息
* 方法：POST
* 路由：/intrusion/getMarkerDetailMsg
* 返回数据：{
                name: '设备名称',
                number: '设备编号',
                time:'时间',
                alertMsg:'报警信息',
                imgSrc:'报警图片',

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
        time:'时间',
        alertMsg:'报警信息',
        imgSrc:'报警图片',
    }
Error:返回一个error
/*
*5.获取已有区划、路线类型
*方法：POST
* 路由：/intrusion/getRegionsRoads
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
*6.获取报警图片
*方法：POST
* 路由：/intrusion/getAlertImgs
* 返回数据：imgs=[{name:'图片名称',src:'图片地址'}]
* */
req = {
    userName:'string',
    billboardId:'string',
    startDateTime:'string',
    endDateTime:'string',
}
Success:
    res={
        imgs:[]
    }
Error:返回一个error
/*
*7.入侵撤防
*方法：POST
* 路由：/intrusion/cancelBillboardIntrusion
* */
req = {
    userName:'string',
    billboardId:'string',
   
}
Success:
    res={
      msg:'撤防成功',
    }
Error:返回一个error
