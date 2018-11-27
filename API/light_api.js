var req = {}   //请求数据
var res = {}   //返回数据
/*
* 1.获取广告牌列表
*方法：POST
*路由：/getLightDeivceList
* 返回数据：devicesList=[
* {
*               name: '设备名称',
                number: '设备编号',
                light_state: '照明状态',
                light_value: '照度值',
                i_state: '电流状态',
                i_value: '电流值',
                cur_state: '当前状态',
                str_time: '2018-09-10 09:56',
                end_time: '2018-09-10 10:56',
                rec_time: '2018-09-10 10:56',
* },
* ]
* */
req = {
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
*2.获取设备GPS信息以及设备图片
*方法：POST
* 路由：/getLightDeviceGPS
* 发送数据：checkedDevices=['设备编号1','设备编号2','设备编号3'...]
* 返回数据：devicesGPSList=[{lon:'string',lan:'string',deviceImg:'url'},{lon:'string',lan:'string',deviceImg:'url'}]
* */
req = {
   checkedDevices:[]
}
Success:
    res={
        devicesGPSList:[]
    }
Error:返回一个error
/*
* 3.手动控制照明设备
* 方法：POST
* 路由：/manualControlLight
* */
req = {
    deviceId:'string',
    isOpen:true/false,
}
Success:
    res={
       msg:'照明灯已开启/已关闭'
    }
Error:返回一个error
/*
* 4.设置照明灯自动开启时间段
* 方法：POST
* 路由：/audioControlLight
* 发送数据：periodLight=[{periodId:'string',str_time:'2018-11-27 17:23',cls_time:'2018-11-27 19:23'},...]
* */
req = {
    deviceId:'string',
    periodLight:[]
}
Success:
    res={
        msg:'设置已生效'
    }
Error:返回一个error
/*
*5.定位单个广告牌
*方法：POST
* 路由：/locationSingleLightDevice
* */
req = {
    deviceIdentify:'string',
}
Success:
    res={
        name: '设备名称',
        number: '设备编号',
        light_state: '照明状态',
        light_value: '照度值',
        i_state: '电流状态',
        i_value: '电流值',
        cur_state: '当前状态',
        str_time: '2018-09-10 09:56',
        end_time: '2018-09-10 10:56',
        rec_time: '2018-09-10 10:56',
        lon:'string',
        lan:'string',
        deviceImg:'url'
    }
Error:返回一个error
/*
* 6.获取默认标注设备GPS信息以及设备编号
* 方法：GET
* 路由：/getDefaultMarkerList
* 返回数据：defaultMarkerList=[{deviceNum:'设备编号',lon:'经度',lan:'纬度'}]
* */
Success:
res={
    defaultMarkerList:[]
}
Error:返回一个error
/*
* 7.推送报警信息
* 方法：阿里云推送服务
* */
res={
    alertDeviceId:'string',
    alertType:'照明/电流状态异常'
}


