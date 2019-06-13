//错误返回码402
//e.g.
// res.status(402).send('user do not exist');

//除'/api/getCaptcha'外全是POST
//'/api/getCaptcha'是GET

let URL = '', API_URL = '', dataSend = {};
/*登录页*/
/*1、获取验证码*/
URL = API_URL + '/api/getCaptcha';
//返回值是svg图片
Header('Content-Type', 'image/svg+xml');
/*2、登录*/
dataSend = {
    userName: user,
    password: pass,
    checkCode: check,
};
URL = API_URL + "/login/signin";
/*注册页*/
/*1、注册*/
dataSend = {
    email: email,
    password: pass,
    phone: phone,
    company: company,
};
URL = API_URL + "/registerin";
/*密码重置页*/
/*1、获取验证码*/
//Get. 向email发送确认码
dataSend = {
    email: email,
};
URL = API_URL + "/reset/verficode";
/*1、密码重置*/
dataSend = {
    password: pass,
    checkCode: phone,//邮箱中收到的确认码"/reset/verficode"
};
URL = API_URL + "/reset/resetPass";

/*首页*/
/*1、获取首页统计数据*/
dataSend = {
    userName: localStorage.currentUser,
};
URL = API_URL + "/data/getIndexEchartsData";
res = {
    data: {
        ggp_used: "投入使用的广告牌",
        ggp_unused: "未投入使用的广告牌",
        ggp_gz_num: "故障数量",
        ggp_bj_num: "告警数量",
        ggp_online_dev: "在线广告牌数量",
        ggp_offline_dev: "离线广告牌数量"
    }
}
/*2、获取首页状态数据*/
dataSend = {
    userName: localStorage.currentUser,
};
URL = API_URL + "/data/getIndexStateData";
//返回最新一条设备数据
res = {
    data: {
        ggp_id: "广告牌ID",
        data_safe_time: "时间",
        data_safe_wind: "风速",
        data_safe_vertical: "倾角",
        data_safe_tremor: "震颤",
        data_safe_light: "光照",
        data_safe_elec: "电流值",
        light_alert: "光照报警数",
        hm_alert: "画面报警数",
        data_alert: "数据报警数",
        rq_alert: "入侵报警数",
        light_state: '光照状态 正常/异常',
        light_on_time: "照明开启时间 'hh:mm' ",
        light_on_circle: "照明开启周期 '1,2,3,4,5,6,7' "
    }
}

/*照明系统页*/
/*1、照明控制时查询广告牌*/
//选择根据道路，区域，还是广告牌id查询广告牌
dataSend = {
    userName: localStorage.currentUser,
    type: type,//road/area/single 
    target: target, //查询值
};
URL = API_URL + "/light/getLightList";
res = {
    tableData: [
        {
            id: "广告牌ID",
            company: "广告牌所属公司",
            roadType: "道路路名",
            areaType: "区域名"
        }
    ]
}
/*2、获取广告牌自动控制时间*/
dataSend = {
    userName: localStorage.currentUser,
    id: id,//广告牌ID
};
URL = API_URL + "/light/getAutoDetail";
res = {
    autoTimeControls: [{
        option: "on/off",
        params: "* mm hh * 1,2,3,4,5,6,7 *" //cron字符串
    }]
}
/*3、手动控制广告牌*/
dataSend = {
    userName: localStorage.currentUser,
    targets: data.join(','),//广告牌ID，用‘，’连接的字符串
    type: type,//“on/off”
};
URL = API_URL + "/light/saveManualControl";
res = "操作成功"
/*4、自动控制广告牌*/
dataSend = {
    userName: localStorage.currentUser,
    targets: data.join(','),//广告牌ID，用‘，’连接的字符串
    type: $("#auto_light_option").val(),//“on/off”
    expression: expression,//"* mm hh * 1,2,3,4,5,6,7 *" //cron字符串
};
URL = API_URL + "/light/saveAutoControlTimes";
/*5、获取报警列表*/
dataSend = {
    userName: localStorage.currentUser,
};
URL = API_URL + "/warning/getAlertList";

//warningtype :
// lightWarning
// frameWarning
// dataWarning
// invadeWarning
// statusWarning
var result = {
    "alertList": [
        { name: "lightWarning", number: 0 },
        { name: "frameWarning", number: 0 },
        { name: "dataWarning", number: 0 },
        { name: "invadeWarning", number: 0 },
        { name: "statusWarning", number: 0 }
    ]
};

/*6、获取报警详细列表*/
dataSend = {
    userName: localStorage.currentUser,
    alertId: "报警类型"//warningtype
};
URL = API_URL + "/warning/getAlertDetailList";
result = { warninglist: [{
    id,
    detail,
    sensorId,//关联的传感器
    groupId,//关联的广告牌
    recordDate,//报警时间
    warningtype,//报警类型
}] }

/*7、提交报警处理反馈信息*/
dataSend = {
    userName: localStorage.currentUser,
    a_from: "warnId--groupId--sensorId",//这里要把这三项拼成一个字符串
    msg: msg //反馈信息
};
URL = API_URL + "/warning/uploadAlertFixMsg";
/*画面检测*/
/*1、查询广告牌列表*/
dataSend = {
    userName: localStorage.currentUser,
    startDate: strDate,
    endDate: endDate,
    roadType: ggpRoad,
    areaType: ggpArea,
};
URL = API_URL + "/data/getCanvasDeviceList";
res = {//
    deviceList: [{
        billboardid,
        cavaslevel,
        imgSrc,
        wind,
        warningimg1,//有可能是 undefined
        warningimg2,//有可能是 undefined
        capimg1,//有可能是 undefined
        capimg2,//有可能是 undefined
        capimg3//有可能是 undefined
    }]
}
/*数据安全*/
/*没有自己独有的API*/
/*入侵监测*/
/*没有自己独有的API*/
/*状态监测*/
/*1、查询传感器实时数据*/
dataSend = {
    userName: localStorage.currentUser,
    devId: devId,//广告牌ID
};
URL = API_URL + "/data/getSensorStatus";
res = {
    wind: (sql_result[0]).wind,
    light_1: (sql_result[0]).Illuminance,
    light_2: (sql_result[0]).Illuminance2,
    light_3: (sql_result[0]).Illuminance3,
    electric_1: (sql_result[0]).Electric,
    electric_2: (sql_result[0]).Electric2,
    electric_3: (sql_result[0]).Electric3,
    horizontal: (sql_result[0]).offset,
    tremor: (sql_result[0]).tremor,
    pressure: (sql_result[0]).press,
    timestamp: timestamp
}
/*2、查询传感器历史数据*/
//9.获取开始时间之后半小时的数据
dataSend = {
    userName: localStorage.currentUser,
    devId: devId,
    strDate: str_date
};
URL = API_URL + "/data/querySensorHistoryData";
res = {
    wind: [],
    light_1: [],
    light_2: [],
    light_3: [],
    electric_1: [],
    electric_2: [],
    electric_3: [],
    horizontal: [],
    tremor: [],
    timestamp: [],
    pressure: []
}
/*客户服务*/
/*1、获取摄像头列表*/
//这个移动端应该用不上
//可以使用"/data/getcameranamelist"
URL = API_URL + "/data/getcameralist";

/*2、获取摄像头信息*/
dataSend = {
    userName: localStorage.currentUser,
    cameraId: id
};
URL = API_URL + "/data/getCameraMsg";
res = { "captureId": P2Puser }
/*3、查询图片*/
dataSend = {
    userName: localStorage.currentUser,
    strTime: strTime,
    endTime: endTime,
    type: type,
};
URL = API_URL + "/data/getQueryImgList";
/*4、获取抓拍时间列表*/
dataSend = {
    userName: localStorage.currentUser,
    cameraId: currentCameraId
};
URL = API_URL + "/video/getCaptureTimes";
res = { "captureTimes": ['0 1 18 0 0 1,2,3,4,5,6,7 *', '0 1 6 0 0 1,2,3,4,5,6,7 *'] }
/*5、保存抓拍时间列表*/
dataSend = {
    userName: localStorage.currentUser,
    cameraId: currentCameraId,
    times: autoControlTimes.join('#'),//'0 1 18 0 0 1,2,3,4,5,6,7 *#0 1 6 0 0 1,2,3,4,5,6,7 *'
};
URL = API_URL + "/video/saveCaptureTimes";
res = "设置完成"
/*6、设置低功耗模式*/
dataSend = {
    userName: localStorage.currentUser,
    cameraId: currentCameraId,
    state: param,
};
URL = API_URL + "/video/setCameraPower";
res = "操作已完成";

/*统计分析*/
/*1、获取广告设施统计数据*/
dataSend = {
    userName: localStorage.currentUser,
    startdate: strDate,
    enddate: endDate,
    roadtype: ggpRoad,
    regiontype: ggpArea,
};
URL = API_URL + "/statistics/getBillboardNumber";
res = [{
    time,
    allBillborads,//所有广告牌
    usedBillborad //已投入使用广告牌
}]
/*2、获取广告设施统计数据*/
dataSend = {
    userName: localStorage.currentUser,
    startdate: strDate,
    enddate: endDate,
    roadtype: ggpRoad,
    regiontype: ggpArea,
    datetype: dateType,
    devicetype: devType,
};
URL = API_URL + "/statistics/getAlertNumber";
res = [{
    time,
    warning,//报警数
    fail //故障数
}]
/*系统管理-广告牌管理*/
/*1、获取广告牌数据*/
dataSend = {
    userName: localStorage.currentUser,
};
URL = API_URL + "/system/dev_billboard/getAllBillboards";
res = {
    billboardData: [
        {
            billboardId,
            imgSrc
        }
    ]
}
/*2、获取单个广告牌详情数据*/
dataSend = {
    userName: localStorage.currentUser,
    id: id,
};
URL = API_URL + "/system/dev_billboard/getBillboardDetail";
res = {
    billboardDetail: {
        ggp_num: tempjson.id,//广告牌编号
        position_msg: tempjson.position_msg, //位置描述
        gps_lon: tempjson.longtitude,//经度
        gps_lat: tempjson.latitude,//纬度
        ggp_navigation: tempjson.navigation,//导航点
        ggp_police: tempjson.police,//派出所
        ggp_land: tempjson.land,//用地属性
        ggp_layout: tempjson.layout,//版面描述
        ggp_power: tempjson.power, //供用电情况
        ggp_light_type: tempjson.light_type,//灯具型号
        ggp_power_route: tempjson.power_route, // 供电路由
        ggp_canvas: tempjson.canvas,  //画面喷绘信息
        ggp_base: tempjson.base,  //设施基础
        ggp_height: tempjson.height,  //总高度
        ggp_circle_height: tempjson.circleHeight,  //柱体高度
        ggp_diameter: tempjson.diameter, //柱体直径
        ggp_structure: tempjson.structure,//设施结构
        ggp_cmp_date: tempjson.complete_date,//竣工日期
        ggp_remark: tempjson.remark,//备注信息
        ggp_company: tempjson.company//所属公司
    }
}
/*3、删除广告牌*/
dataSend = {
    userName: localStorage.currentUser,
    id: '' + id,
};
URL = API_URL + "/system/dev_billboard/deleteBillboard";
res = '删除成功';

/*系统管理-传感器管理*/
/*1、获取单类传感器统计数据*/
dataSend = {
    userName: localStorage.currentUser,
    sensorType: type,
};
URL = API_URL + "/system/dev_sensor/getSensorData";
/*2、获取单个传感器详情数据*/
dataSend = {
    userName: localStorage.currentUser,
    sensorType: sensorType,
    sensorId: sensor_id
};
URL = API_URL + "/system/dev_sensor/getSensorDetail";
res = {
    sensorData: [{
        deviceId,//传感器ID
        groupId //广告牌ID
    }]
}
/*3、删除单个传感器*/
dataSend = {
    userName: localStorage.currentUser,
    sensorType: sensorType,
    sensorId: sensor_id
};
URL = API_URL + "/system/dev_sensor/deleteSensor";
result = { msg: "删除成功" };

/*系统管理-物联卡管理*/
/*1、获取物联卡统计数据*/
dataSend = {
    userName: localStorage.currentUser,
};
URL = API_URL + "/system/dev_TrafficCard/getTrafficCardData";
result = {
    TrafficCardData: [{
        trafficCardId: 'string',
        connectDevId: 'string',
        trafficCardFlow: 'string',
        installDate: 'string',
        maturityDate: 'string',
    }]
}
/*2、获取物联卡详情*/
dataSend = {
    userName: localStorage.currentUser,
    trafficCardId: sensor_id
};
URL = API_URL + "/system/dev_TrafficCard/getTrafficCardRecord";
res = {
    trafficCardRecord: ['续费记录1', '续费记录2', "..."],
}
/*3、删除物联卡*/
dataSend = {
    userName: localStorage.currentUser,
    trafficCardId: sensor_id
};
URL = API_URL + "/system/dev_TrafficCard/deleteTrafficCard";
res = {
    msg: '删除成功'
}
/*系统管理-画布管理*/
/*1、获取画布统计数据*/
dataSend = {
    userName: localStorage.currentUser,
};
URL = API_URL + "/system/dev_canvas/getcanvasData";
res = {
    canvasData: [
        {
            canvasId = canvasId,
            connectDevId = groupId,
            installDate = installDate,
            changeDate = changeDate,
            isDamaged = isDamaged,
            canvasLevel = canvasLevel,
            canvasMaterial = canvasMaterial,
            canvasMsg = canvasMsg
        }
    ]
}
/*2、删除画布*/
dataSend = {
    userName: localStorage.currentUser,
    canvasId: sensor_id
};
URL = API_URL + "/system/dev_canvas/deletaCanvas";
result = "删除成功";
/*系统管理-资产巡检*/
/*1、获取记录类型*/
dataSend = {
    userName: localStorage.currentUser,
};
URL = API_URL + "/data/getAllRecordTypes";
res = { RecordTypes: [{ id: 'failure', text: '设备故障' }, { id: 'exception', text: '设备异常' }, { id: 'connectivity', text: '连接性异常' }, { id: 'lost', text: '设备丢失' }, { id: 'check', text: '保期排查' }, { id: 'repair', text: '报修维修' }, { id: 'installation', text: '设备安装' }] }
/*2、查询记录*/
dataSend = {
    userName: localStorage.currentUser,
    queryData: JSON.stringify({
        sensorType: $("#sensor_type_arr").val(),
        recordType: $("#sensor_error_arr").val(),
        recordDevId: $("#dev_id").val(),
        startDate: $("#str_date").val(),
        endDate: $("#end_date").val(),
    })
};
URL = API_URL + "/system/dev_inspection/queryRecord";
res = {
    recordData: [
        {
            recordDate,
            recordDetail
        }
    ]
}
/*3、添加记录*/
dataSend = {
    userName: localStorage.currentUser,
    addData: JSON.stringify({
        sensorType: $("#sensor_type_arr_B").val(),
        recordType: $("#sensor_error_arr_B").val(),
        recordDevId: $("#dev_id_B").val(),
        recordDate: $("#record_date").val(),
        recordDetail: $("#record_msg").val(),
    })
};
URL = API_URL + "/system/dev_inspection/addRecord";
var result = { msg: "添加成功" };

/*系统管理-统计分析*/
/*1、获取所有设备统计数据*/
dataSend = {
    userName: localStorage.currentUser,
};
URL = API_URL + "/system/analysis/getDevData";
// sensortype = { 'sensor_wind': "风速传感器", 'sensor_electric': '电流传感器', 'sensor_pressure': '压力开关', 'sensor_vertical': '倾角（垂直度）传感器', 'sensor_tremor': '震颤度传感器', 'sensor_invade': '入侵传感器', 'sensor_near': '接近传感器', 'sensor_power': '供电', 'sensor_trafficCard': '物联卡', 'sensor_canvas': '画布', 'sensor_illumination': '光照度传感器' }
result = {
    x_data: [sensortype],
    dev_num: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    error_num: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],//故障异常次数
    fix_num: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]//维修次数
}
/*2、获取单类设备统计数据*/
dataSend = {
    userName: localStorage.currentUser,
    devType: $("#sensor_type_arr").val(),
    sort: sort,
};
URL = API_URL + "/system/analysis/getOneDevData";
res = [
    {
        deviceId,
        failure,//故障数
        tcheck,//巡检数
        trepair,//维修数
        installation,//安装总数
        tdelete//删除数
    }
]
/*3、获取单个设备统计数据*/
dataSend = {
    userName: localStorage.currentUser,
    devId: sensor_id
};
URL = API_URL + "/system/analysis/getDevErrorDetail";
result = {
    errorList: [
        recordDate + " " + recordDetail
    ]
}
/*系统管理-设备录入*/
/*1、获取摄像头列表*/
dataSend = {
    userName: localStorage.currentUser,
    billboardId: id,
};
URL = API_URL + "/data/getcameranamelist";
res = { list: [{ "id": id, "text": name }] }
/*2、录入数据格式类似传感器*/
dataSend = {
    userName: localStorage.currentUser,
    sensorType: $('#sensor_type_arr').val(),//传感器类型
    sensorMsg: JSON.stringify({
        addDate: $('#str_date').val(),//录入日期
        addNum: $('#dev_com_id').val(),//传感器串口号
        addAddr: $('#dev_com_addr').val(),//传感器串口号
        addSensorId: $('#dev_id').val(),//传感器ID
        connectBillboardId: $('#dev_ggp_id').val(),//关联广告牌ID
        connectCameraId: $('#dev_camera_id').val(),//
    }),
};
URL = API_URL + "/system/entry/addSensor";
var result = { msg: "添加成功" };

/*3、录入摄像头*/
dataSend = {
    userName: localStorage.currentUser,
    sensorType: $('#sensor_type_arr').val(),//传感器类型
    sensorMsg: JSON.stringify({
        addDate: $('#str_date_camera').val(),//录入日期
        addSensorId: $('#dev_id_camera').val(),//传感器ID
        cameraName: $('#dev_camera_name').val(),//摄像头中文名称
        cameraUserName: $('#dev_camera_Puser').val(),//登录p2p的用户名
        cameraPassword: $('#dev_camera_Ppass').val(),//登录p2p的密码
        connectBillboardId: $('#dev_ggp_id_camera').val(),//关联广告牌ID
    }),
};
URL = API_URL + "/system/entry/addCamera";
var result = { msg: "添加成功" };

/*4、录入供电*/
dataSend = {
    userName: localStorage.currentUser,
    sensorType: $('#sensor_type_arr').val(),//传感器类型
    sensorMsg: JSON.stringify({
        addDate: $('#str_date_power').val(),//录入日期
        addSensorId: $('#dev_id_power').val(),//传感器ID
        connectBillboardId: $('#dev_ggp_id_power').val(),//关联广告牌ID
        powerType: $('#power_type_arr').val(),
    }),
};
URL = API_URL + "/system/entry/addPower";
var result = { msg: "添加成功" };

/*5、录入物联卡*/
dataSend = {
    userName: localStorage.currentUser,
    sensorType: $('#sensor_type_arr').val(),//传感器类型
    sensorMsg: JSON.stringify({
        addDate: $('#str_date_tranffic').val(),
        addNum: $('#tranffic_num').val(),
        addSensorId: $('#dev_id_tranffic').val(),
        connectBillboardId: $('#dev_ggp_id_tranffic').val(),
        installDate: $('#str_date_ins_tranffic').val(),
        maturityDate: $('#str_date_expire_tranffic').val(),
    }),
};
URL = API_URL + "/system/entry/addTrafficCard";
var result = { msg: "添加成功" };

/*6、录入画布*/
dataSend = {
    userName: localStorage.currentUser,
    sensorType: $('#sensor_type_arr').val(),//传感器类型
    sensorMsg: JSON.stringify({
        addDate: $('#str_date_canvas').val(),
        addSensorId: $('#dev_id_canvas').val(),
        connectBillboardId: $('#dev_ggp_id_canvas').val(),
        installDate: $('#str_date_ins_canvas').val(),
        damaged: $('#dev_canvas_bad').val(),
        level: $('#dev_canvas_level').val(),
        material: $('#dev_canvas_msg').val(),
        msg: $('#dev_canvas_msg_detail').val(),
    }),
};
URL = API_URL + "/system/entry/addCanvas";
var result = { msg: "添加成功" };

/*7、录入广告牌*/
dataSend = {
    userName: localStorage.currentUser,
    sensorType: $('#sensor_type_arr').val(),//传感器类型
    sensorMsg: JSON.stringify({
        addDate: $('#str_date_ggp').val(),//录入日期
        billboard_dev_id: $('#dev_id_ggp').val(),//广告牌编号
        billboard_position_msg: $('#dev_ggp_position_msg').val(), //位置描述
        billboard_gps_lon: $('#dev_ggp_lon').val(),//经度
        billboard_gps_lat: $('#dev_ggp_lat').val(),//纬度
        billboard_navigation: $('#dev_ggp_navigation').val(),//导航点
        billboard_police: $('#dev_ggp_police').val(),//派出所
        billboard_land: $('#dev_ggp_land').val(),//用地属性
        billboard_layout: $('#dev_ggp_layout').val(),//版面描述
        billboard_power: $('#dev_ggp_power').val(), //供用电情况
        billboard_light_type: $('#dev_ggp_light_type').val(),//灯具型号
        billboard_power_route: $('#dev_ggp_power_route').val(), // 供电路由
        billboard_canvas: $('#dev_ggp_canvas').val(),  //画面喷绘信息
        billboard_base: $('#dev_ggp_base').val(),  //设施基础
        billboard_height: $('#dev_ggp_height').val(),  //总高度
        billboard_circleHeight: $('#dev_ggp_circle_height').val(),  //柱体高度
        billboard_diameter: $('#dev_ggp_zhijing').val(), //柱体直径
        billboard_structure: $('#dev_ggp_jiegou').val(),//设施结构
        billboard_complete_date: $('#ggp_ins_date').val(),//竣工日期
        billboard_remark: $('#dev_ggp_remark').val(),//备注信息
        billboard_company: $('#dev_ggp_company').val(),//所属公司
        billboard_ip: $('#dev_ggp_ip').val(),//网关IP
    }),
};
URL = API_URL + "/system/entry/addBillboard";
var result = { msg: "添加成功" };

/*8、上传广告牌封面*/
URL = API_URL + "/system/entry/uploadBillboardImg";
var result = { msg: "添加成功" };

/*系统管理-用户管理*/
/*1、获取所有用户列表*/
dataSend = {
    userName: localStorage.currentUser,
};
URL = API_URL + "/system/user_permission/getUserData";
/*2、根据条件查询用户列表*/
dataSend = {
    userName: localStorage.currentUser,
    queryMsg: $("#query_msg").val(),
};
URL = API_URL + "/system/user_permission/getUserDataByQuery";
/*3、保存用户信息*/
dataSend = {
    userName: localStorage.currentUser,
    userPhone: phone,
    updateData: JSON.stringify({
        userName: newName || name,
        connectCompany: newCompany || company,
        userType: newType || type,
    })
};
URL = API_URL + "/system/user_permission/updateUserData";
/*4、保存用户权限*/
dataSend = {
    userName: localStorage.currentUser,
    updateData: JSON.stringify({
        users: users,
        permissions: getCheckboxValue().join(',')
    })
};
URL = API_URL + "/system/user_permission/updateUserPermission";
/*5、删除用户*/
dataSend = {
    userName: localStorage.currentUser,
    deleteUser: phone
};
URL = API_URL + "/system/user_permission/deleteUserData";
/*系统管理-角色管理*/
/*1、获取未分配角色用户列表*/
dataSend = {
    userName: localStorage.currentUser,
};
URL = API_URL + "/system/user_permission/getNoPermissionUsers";
/*2、获取未分配广告牌列表*/
dataSend = {
    userName: localStorage.currentUser,
};
URL = API_URL + "/system/user_permission/getUnConnectBillboards";
/*3、创建角色*/
dataSend = {
    userName: localStorage.currentUser,
    roleData: JSON.stringify({
        userType: $("#user_type_arr").val(),
        checkedUsers: getSelectdDataIDs('ggp_sensor_dg'),
        connectRegions: checkedAreas,//仅在角色类型为管理人员时有效
        connectBillboards: checkedGGP,//仅在角色类型为客户人员时有效
        checkedPermissions: getCheckboxValue('ckb').join(','),
    })
};
URL = API_URL + "/system/user_permission/createUserRole";
/*系统管理-用户日志*/
/*1、获取日志信息*/
dataSend = {
    userName: localStorage.currentUser,
};
URL = API_URL + "/system/user_permission/getUserLoginLogs";
/*2、根据条件获取日志信息*/
dataSend = {
    userName: localStorage.currentUser,
    queryMsg: $("#query_msg").val()
};
URL = API_URL + "/system/user_permission/getSingleUserLoginLogs";
/*系统管理-预警管理*/
/*1、获取预警数值*/
dataSend = {
    userName: localStorage.currentUser,
};
URL = API_URL + "/system/warning/getSensorUpDown";
/*2、保存预警数值*/
dataSend = {
    userName: localStorage.currentUser,
    light: $("#light").val(),
    wind: $("#wind").val(),
    vertical: $("#vertical").val(),
    tremor: $("#tremor").val(),
    elec_up: $("#elec_up").val(),
    elec_down: $("#elec_down").val()
};
URL = API_URL + "/system/warning/modifySensorUpDown";
/*系统管理-数据权限管理*/
/*1、获取未关联广告牌*/
dataSend = {
    userName: localStorage.currentUser,
};
URL = API_URL + "/system/data_permission/getBillboardData";
/*2、保存广告牌关联设置*/
dataSend = {
    userName: localStorage.currentUser,
    billboardData: data.join(','),
    connectRegion: $("#ggp_area").val(),
    connectRoad: $("#ggp_road").val()
};
URL = API_URL + "/system/data_permission/modifyRegionRoad";
/*系统管理-任务发布*/
/*1、发布任务*/
dataSend = {
    userName: localStorage.currentUser,
    mission: $("#tar_mission").val(),
    date: $("#record_date").val(),
    targetName: $("#tar_user").val(),
    targetPhone: $("#tar_phone").val(),
};
URL = API_URL + "/system/weihu/addMission";
/*系统管理-维修报告查看*/
/*1、获取维修报告列表*/
dataSend = {
    userName: localStorage.currentUser,
};
URL = API_URL + "/system/weihu/getReportList";
/*通用*/
/*1、注销登录*/
dataSend = {
    userName: localStorage.currentUser,
};
URL = API_URL + "/logout";
/*2、获取广告牌地图坐标*/
dataSend = {
    userName: localStorage.currentUser,
};
URL = API_URL + "/data/getDataDeviceGPS";
res = {
    devicesGPSList: [
        {
            lon: (sql_result[i].longtitude),
            lat: (sql_result[i].latitude),
            billboardId: (sql_result[i].id),
            isalert: (sql_result[i]).isalert
        }
    ]
}
/*3、获取广告牌地图标注详情*/
dataSend = {
    userName: localStorage.currentUser,
    billboardId: billboardId,
};
URL = API_URL + "/data/getMarkerDetailMsg";
result = {
    number: tempvar.id,//     o    number: '设备编号',
    canvasLevel: tempvar.canvasLevel,//      o   canvasLevel:'画布等级',
    light_value: tempvar.Illuminance,//      o   Illuminance:'光照度',
    wind: tempvar.wind,//      o   wind:'风速',
    vertical: tempvar.verticality,//      o   vertical:'垂直度',
    tremor: tempvar.tremor,//         tremor:'震颤度',
    horizontal: tempvar['offset'],//     o    horizontal:'水平偏差',
    elec_value_1: tempvar['Electric'],//     o    Electric:'电流值',
    elec_value_2: null,
    elec_value_3: null,
    pressure: '-', //压力
    devState: '-',//         devState:'状态',
    totalHeight: tempvar.height,//     o    totalHeight:'广告牌总高度',
    circleHeight: tempvar.circleHeight,//     o    circleHeight:'柱体高度',
    alertState: tempvar.isalert,//      o   alertState:'报警状态',
    imgSrc: tempvar.imgSrc//      o   imgSrc:'广告牌图片地址',
}
/*4、获取登录用户权限*/
dataSend = {
    userName: localStorage.currentUser,
};
URL = API_URL + "/data/getUserPermissions";
/*5、获取区域列表*/
dataSend = {
    userName: localStorage.currentUser,
};
URL = API_URL + "/data/getRegions";
var result = {};
result.regions = [{ id: '罗湖区', text: "罗湖区" }, { id: '福田区', text: '福田区' }, { id: '南山区', text: '南山区' }, { id: '宝安区', text: '宝安区' }, { id: '龙岗区', text: '龙岗区' }, { id: '盐田区', text: '盐田区' }, { id: '龙华区', text: '龙华区' }, { id: '坪山区', text: '坪山区' }];
/*6、获取路线列表*/
dataSend = {
    userName: localStorage.currentUser,
    area: area,
};
URL = API_URL + "/data/getRoads";
result = {
    roads: [
        { id: Road, text: Road }
    ]
}
/*7、查询广告牌*/
dataSend = {
    userName: localStorage.currentUser,
    startDate: strDate,
    endDate: endDate,
    roadType: ggpRoad,
    areaType: ggpArea,
};
URL = API_URL + "/data/getDataDeviceList";
res = {
    devicesList: [
        {
            number: tempvar.id,//     o    number: '设备编号',
            light_value_1: tempvar.Illuminance,//      o   Illuminance:'光照度',
            light_value_2: tempvar.Illuminance2,
            light_value_3: tempvar.Illuminance3,
            wind: tempvar.wind,//      o   wind:'风速',
            vertical: tempvar.verticality,//      o   vertical:'垂直度',
            tremor: tempvar.tremor,//         tremor:'震颤度',
            horizontal: tempvar['offset'],//     o    horizontal:'水平偏差',
            elec_s: '-',   //电流状态
            elec_1: tempvar['Electric'],//     o    Electric:'电流值',
            elec_2: tempvar['Electric2'],
            elec_3: tempvar['Electric3'],
            pressure: tempvar.press, //压力
            curr_s: '-',//         curr_s:'广告牌状态',
            canvacanvasLevel: tempvar.canvasLevel,//      o   canvasLevel:'画布等级',
            t_height: tempvar.height,//     o    totalHeight:'广告牌总高度',
            c_height: tempvar.circleHeight,//     o    circleHeight:'柱体高度',
            alertState: tempvar.isalert,//      o   alertState:'报警状态',
            rec_t: moment(tempvar.timestamp).format("YYYY-MM-DD HH:mm:ss"),//      o   timestamp:'时间',
            light_s: "_",//光照状态
            light_on_time: "照明开启时间 - ",
            light_on_circle: "照明开启周期 - ",
            light_off_time: "照明开启时间 - ",
            light_off_circle: "照明开启周期 - ",
            latitude: tempvar.latitude,
            longtitude: tempvar.longtitude,
            imgSrc: tempvar.imgSrc //广告牌图片
        }
    ]
}
/*8、获取传感器设备列表*/
dataSend = {
    userName: localStorage.currentUser,
};
URL = API_URL + "/data/getAllSensorTypes";
var result = {};
result.sensorList = [{ id: 'sensor_wind', text: "风速传感器" }, { id: 'sensor_electric', text: '电流传感器' }, { id: 'sensor_pressure', text: '压力开关' }, { id: 'sensor_vertical', text: '倾角（垂直度）传感器' }, { id: 'sensor_tremor', text: '震颤度传感器' }, { id: 'sensor_invade', text: '入侵传感器' }, { id: 'sensor_near', text: '接近传感器' }, { id: 'sensor_main_dev', text: '主设备' }, { id: 'sensor_camera', text: '摄像头' }, { id: 'sensor_recorder', text: '录像机' }, { id: 'sensor_power', text: '供电' }, { id: 'sensor_billboard', text: '广告牌' }, { id: 'sensor_trafficCard', text: '物联卡' }, { id: 'sensor_canvas', text: '画布' }, { id: 'sensor_illumination', text: '光照度传感器' }];
/*9、获取广告牌编号列表*/
dataSend = {
    userName: localStorage.currentUser,
};
URL = API_URL + "/data/getbillbroadlist";
res = {
    list: [
        { id: id, test: id }
    ]
}
/*10、获取用户类型列表*/
dataSend = {
    userName: localStorage.currentUser,
};
URL = API_URL + "/data/getUserTypes";
res = {
    userTypes: [{ id: 'Admin', text: '系统管理员' }, { id: 'Manager', text: '管理人员' }, { id: 'Leader', text: '领导人员' }, { id: 'Staff', text: '工作人员' }, { id: 'Customer', text: '客户人员' }]
}
