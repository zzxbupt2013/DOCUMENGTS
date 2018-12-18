/*
*预警方案管理
* */
var req = {}   //请求数据
var res = {}   //返回数据
/*
* 1、获取传感器上下限值
* 方法：POST
* 路由：/system/warning/getSensorUpDown
* */
req = {
    userName: 'string',
    sensorType:'string',
}
Sucess:
    res = {
        result: {
           sensor_up:'string',
           sensor_down:'string',
        }
    }
Error:返回一个error
/*
* 2、修改传感器上下限值
* 方法：POST
* 路由：/system/warning/modifySensorUpDown
* */
req = {
    userName: 'string',
    sensorType:'string',
    sensorMsg: {
           sensor_up:'string',
           sensor_down:'string',
        },
}
Sucess:
    res = {
       msg:'修改成功'
    }
Error:返回一个error
/*
* 3、获取传感器上限值
* 方法：POST
* 路由：/system/warning/getSensorUp
* */
req = {
    userName: 'string',
    sensorType:'string',
}
Sucess:
    res = {
        result: {
           sensor_up:'string',
        }
    }
Error:返回一个error
/*
* 4、修改传感器上限值
* 方法：POST
* 路由：/system/warning/modifySensorUp
* */
req = {
    userName: 'string',
    sensorType:'string',
    sensorMsg: {
           sensor_up:'string',
        },
}
Sucess:
    res = {
       msg:'修改成功'
    }
Error:返回一个error
