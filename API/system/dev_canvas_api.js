/*
*设备资产管理--资产管理--画布管理
* */
var req = {}   //请求数据
var res = {}   //返回数据
/*
* 1、获取画布列表
* 方法：POST
* 路由：/system/dev_canvas/getcanvasData
* */
req = {
    userName: 'string', 
}
Sucess:
    res = {
           canvasData:[{
               canvasId:'string',
               connectDevId:'string',
               installDate:'string',
               changeDate:'string',
               isDamaged:'string',
               canvasLevel:'string',
               canvasMaterial:'string',
               canvasMsg:'string',
           },],
    }
Error:返回一个error
/*
* 2、修改画布信息
* 方法：POST
* 路由：/system/dev_canvas/updateCanvasMsg
* */
req = {
    userName: 'string', 
    canvasId:'string',
    connectDevId:'string',
    isDamaged:'string',
    canvasLevel:'string',
    canvasMaterial:'string',
    canvasMsg:'string',
    changeDate:'string',
}
Sucess:
    res = {
         msg:'修改成功'
    }
Error:返回一个error
/*
* 3、删除画布
* 方法：POST
* 路由：/system/dev_canvas/deletaCanvas
* */
req = {
    userName: 'string', 
    canvasId:'string',
}
Sucess:
    res = {
         msg:'删除成功'
    }
Error:返回一个error



