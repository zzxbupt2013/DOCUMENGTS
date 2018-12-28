/*
*设备资产管理--资产管理--广告设施设备
* */
var req = {}   //请求数据
var res = {}   //返回数据
/*
* 1、获取所有广告牌
* 方法：POST
* 路由：/system/dev_billboard/getAllBillboards
* */
req = {
    userName: 'string', 
}
Sucess:
    res = {
           billboardData:[{
               billboardId:'string',
               imgSrc:'string',
           },],
    }
Error:返回一个error
/*
* 2、获取广告牌详情
* 方法：POST
* 路由：/system/dev_billboard/getBillboardDetail
* */
req = {
    userName: 'string', 
     billboardId:'string',
}
Sucess:
    res = {
            billboardDetail: {                  //19项信息
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
       billboard_height:'string',  //柱体高度
       billboard_diameter:'string', //柱体直径
       billboard_structure:'string',//设施结构
       billboard_complete_date:'string',//竣工日期
       billboard_remark:'string',//备注信息
                billboard_sensor:'string'//关联传感器信息
    }
    }
Error:返回一个error
/*
* 3、更新广告牌详情
* 方法：POST
* 路由：/system/dev_billboard/updateBillboardDetail
* */
req = {
    userName: 'string', 
    billboardId:'string',
    billboardDetail:{                  //19项信息
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
       billboard_height:'string',  //柱体高度
       billboard_diameter:'string', //柱体直径
       billboard_structure:'string',//设施结构
       billboard_complete_date:'string',//竣工日期
       billboard_remark:'string',//备注信息
               billboard_sensor:'string'//关联传感器信息
    }
}
Sucess:
    res = {
          msg:'更新成功'
    }
Error:返回一个error
/*
* 4、删除广告牌
* 方法：POST
* 路由：/system/dev_billboard/deleteBillboard
* */
req = {
    userName: 'string', 
    billboardId:'string',
}
Sucess:
    res = {
          msg:'删除成功'
    }
Error:返回一个error

