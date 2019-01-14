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
       addDate:'string',//录入日期
       billboard_dev_id:'string',//广告牌编号
       billboard_position_msg:'string', //位置描述
       billboard_gps_lon:'string',//经度
       billboard_gps_lat:'string',//纬度
       billboard_navigation:'string',//导航点
       billboard_police:'string',//派出所
       billboard_land:'string',//用地属性
       billboard_layout:'string',//版面描述
       billboard_power:'string', //供用电情况
       billboard_light_type:'string',//灯具型号
       billboard_power_route:'string', // 供电路由
       billboard_canvas:'string',  //画面喷绘信息
       billboard_base:'string',  //设施基础
       billboard_height:'string',  //总高度
       billboard_circleHeight:'string',  //柱体高度
       billboard_diameter:'string', //柱体直径
       billboard_structure:'string',//设施结构
       billboard_complete_date:'string',//竣工日期
       billboard_remark:'string',//备注信息
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
    sensorType: 'string',//传感器类型
    sensorMsg: {
       addDate:'string',//录入日期
       addNum:'string',//传感器串口号
       addSensorId:'string',//传感器ID
       connectBillboardId:'string',//关联广告牌ID
    },
}
Sucess:
    res = {
        msg: '录入成功'
    }
Error:返回一个error
/*
* 5、录入物联卡
* 方法：POST
* 路由：/system/entry/addTrafficCard
* */
req = {
    userName: 'string',
    sensorType: 'string',
    sensorMsg: {
       addDate:'string',
       addNum:'string',
       addSensorId:'string',
       connectBillboardId:'string',
        trafficFlow:'string',
        installDate:'string',
        maturityDate:'string',
    },
}
Sucess:
    res = {
        msg: '录入成功'
    }
Error:返回一个error
/*
* 6、录入画布
* 方法：POST
* 路由：/system/entry/addCanvas
* */
req = {
    userName: 'string',
    sensorType: 'string',
    sensorMsg: {
       addDate:'string',
       addNum:'string',
       addSensorId:'string',
       connectBillboardId:'string',
       installDate:'string',
       damaged:'string',
        level:'string',
        material:'string',
        msg:'string',
        
    },
}
Sucess:
    res = {
        msg: '录入成功'
    }
Error:返回一个error
/*
* 7、录入摄像头
* 方法：POST
* 路由：/system/entry/addCamera
* */
req = {
    userName: 'string',
    sensorType: 'string',//传感器类型
    sensorMsg: {
       addDate:'string',//录入日期
       addSensorId:'string',//传感器ID
       cameraUserName:'string',//登录p2p的用户名
       cameraPassword:'string',//登录p2p的密码
       NVRIp:'string',//摄像头IP
       connectBillboardId:'string',//关联广告牌ID
       NVRchannel:NVRchannel,
       DVRip:DVRip,
       DVRpwd:DVRpwd
    },
}
Sucess:
    res = {
        msg: '录入成功'
    }
Error:返回一个error
