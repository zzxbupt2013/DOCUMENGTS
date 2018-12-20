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
           billboardDetail:[{    //{label:'位置描述',value:'马朱路与京福路交口东南角'}
               label:'string',
               value:'string',
           },],
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
    billboardDetail:[{    //{label:'位置描述',value:'马朱路与京福路交口东南角'}
               label:'string',
               value:'string',
           },],
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

