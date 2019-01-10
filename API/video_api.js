var req = {}   //请求数据
var res = {}   //返回数据
/*
* 1.获取广告牌列表
*方法：POST
*路由：/video/getVideoDeviceList
* 返回数据：devicesList=[
* {
*  
                number: '广告牌编号',
                company:'广告牌所属公司'
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
* 路由：/video/getVideoDeviceGPS
* 发送数据：checkedDevices=['设备编号1','设备编号2','设备编号3'...]
* 返回数据：devicesGPSList=[{lon:'string',lat:'string',billboardId:'string'},{lon:'string',lat:'string',billboardId:'string'}]
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
*3.图片查询
*方法：POST
* 路由：/video/getVideoImageList
*  使用：图片查询
* */
req = {
    userName:'string',
    startTime:'string',//开始时间
    endTime:'string',//结束时间
    queryType:'string'//正常/报警
}
Success:
    res={
        queryImageList:[{name:'图片标识',imgSrc:'图片地址'},{name:'图片标识',imgSrc:'图片地址'}]
    }
Error:返回一个error
/*
*4.获取广告牌对应录像机的P2P通信ID以及服务器查询报警录像的P2P通信ID
*方法：POST
* 路由：/video/getBillboardRecordId
* 使用：录像查询回放
* */
req = {
    userName:'string',
    billboardId:'string',
}
Success:
    res={
        recordId:'string',//广告牌对应录像机的P2P通信ID
        severRecordId:'string',//服务器查询报警录像的P2P通信ID
    }
Error:返回一个error
/*
*5.获取广告牌对应摄像头的P2P通信ID
*方法：POST
* 路由：/video/getBillboardCameraId
* 使用：视频监控
* */
req = {
    userName:'string',
    billboardId:'string',
}
Success:
    res={
        screenId:['ID1','ID2'],//广告牌画面监控摄像头的P2P通信ID数组，最多3个
        environmentId:'string',//广告牌环境监控摄像头的P2P通信ID
    }
Error:返回一个error
