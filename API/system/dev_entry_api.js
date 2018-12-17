var req = {}   //请求数据
var res = {}   //返回数据
/*
* 1、录入广告牌
* 方法：POST
* 路由：/system/entry/addBillboard
* */
req = {
    userName: 'string',
    sensorType: 'string',
    sensorMsg: {                  //17项信息
       addDate:'string',
       billboard_dev_id:'string',
       billboard_position_msg:'string', 
       billboard_gps:'string',
       billboard_navigation:'string',
       billboard_police:'string',
       billboard_land:'string',
       billboard_layout:'string',
       billboard_power:'string', 
       billboard_light_type:'string',
       billboard_power_route:'string',  
       billboard_canvas:'string',  
       billboard_base:'string',  
       billboard_height_diameter:'string',  
       billboard_structure:'string',
       billboard_complete_date:'string',
       billboard_remark:'string',
    },
}
Sucess:
    res = {
        msg: '录入成功'
    }
Error:返回一个error
/*
* 2、上传广告牌图片
* 方法：POST
* 路由：/system/entry/uploadBillboardImg
* */
req = {
    userName: 'string',
    billboard_dev_id:'string',
    file:fileObj,
}
Sucess:
    res = {
        msg: '录入成功'
    }
Error:返回一个error
/*
* 3、录入供电
* 方法：POST
* 路由：/system/entry/addPower
* */
req = {
    userName: 'string',
    sensorType: 'string',
    sensorMsg: {
       addDate:'string',
       addNum:'string',
       addSensorId:'string',
       connectBillboardId:'string',
       powerType:'string',
    },
}
Sucess:
    res = {
        msg: '录入成功'
    }
Error:返回一个error
/*
* 4、录入其他传感器
* 方法：POST
* 路由：/system/entry/addSensor
* */
req = {
    userName: 'string',
    sensorType: 'string',
    sensorMsg: {
       addDate:'string',
       addNum:'string',
       addSensorId:'string',
       connectBillboardId:'string',
    },
}
Sucess:
    res = {
        msg: '录入成功'
    }
Error:返回一个error
