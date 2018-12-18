
/*
*数据权限管理---不分页获取数据
* */
var req = {}   //请求数据
var res = {}   //返回数据
/*
* 1、获取该用户广告牌数据
* 方法：POST
* 路由：/system/data_permission/getBillboardData
* */
req = {
    userName: 'string',
  
}
Sucess:
    res = {
           tableData:[{
                billboardId:'string',
                connectCompany:'string',
                connectRegion:'string',
                connectRoad:'string',
           }],
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
