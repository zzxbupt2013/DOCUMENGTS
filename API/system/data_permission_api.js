/*
*数据权限管理
* */
var req = {}   //请求数据
var res = {}   //返回数据
/*
* 1、获取广告牌总数及某一页数据（每页数据最多8条）
* 方法：POST
* 路由：/system/data_permission/getBillboardData
* */
req = {
    userName: 'string',
    page:number,
}
Sucess:
    res = {
        data: {
           totalNum:number,  
           tableData:[{
                billboardId:'string',
                connectCompany:'string',
                connectRegion:'string',
                connectRoad:'string',
           }],
        }
    }
Error:返回一个error
/*
* 2、修改广告牌关联区域路线
* 方法：POST
* 路由：/system/data_permission/modifyRegionRoad
* */
req = {
    userName: 'string',
    billboardData:['广告牌1'，'广告牌1'...],
    connectRegion:'string',
    connectRoad:'string'
}
Sucess:
    res = {
      msg:'修改成功'
    }
Error:返回一个error
