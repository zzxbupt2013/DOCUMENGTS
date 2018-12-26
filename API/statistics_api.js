var req = {}   //请求数据
var res = {}   //返回数据
/*
*1.获取已有区划、路线、设备类型
*方法：POST
* 路由：/statistics/getRegionsRoadsDevs
* */
req = {
    userName:'string',
}
Success:
    res={
        regions:['区划一','区划二',],
        roads:['路线一','路线二',],
        devs:['设备一','设备二',],
    }
Error:返回一个error
/*
* 2.根据条件查询广告设施数量
*方法：POST
*路由：/statistics/getBillboardNumber
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
        used:[],//数组长度根据提交的日期的长度而定，每天对应一个数值
        unused:[],
        total:{used:'number',unused:'number'},
    }
Error:返回一个error
/*
* 3.根据条件查询监控报警统计
*方法：POST
*路由：/statistics/getAlertNumber
* */
req = {
    userName:'string',
    startDate:'日期字符串，如2018-09-10',
    endDate:'日期字符串，如2018-09-10',
    roadType:'string',
    areaType:'string',
    roadName:'string',
    dateType:'string',
    devType:'string'
}
Success:
    res={
        error:[],//数组长度根据提交的日期的长度而定，每天/每月/每年对应一个数值
        alert:[],
        total:{error:'number',alert:'number'},
    }
Error:返回一个error
