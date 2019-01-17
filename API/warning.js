//客户端处理报警
//warming API
//查询未处理报警信息
// /warning/getnonprocesswarn
//req= {
// username:
// }
//res = {
// wraninglist=[
// {
// id:'id',
// detail:'detail',
// sensorId:'sensorId',
// groupId:'福田路_#01号',
// img:[],
// recordDate:'2019-01-15 12:29:33'
// }
// ]
// }
//

//处理报警
//忽略 or deal with
//
// 服务器收到处理请求，修改warninfo and billboard(isalert) isalert置零
// /warning/dealwarn
// req = {
// username:"",
// warnId : "",
// groupId:'福田路_#01号',
// feedback:""
// }
// 
// res = {
// msg:"处理完成"
// }
