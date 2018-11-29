var req = {}
var res = {}
/*
* 1.创建课程
* 方法：POST
* 路由：/create/course
* */
req = {
    course: 'string',
    course_group_id: 'string',
    course_labels: [],
}
Success:
    res = {
        msg: '创建成功'
    }
Error:
    res = {
        msg: '错误原因描述'
    }
/*
* 2.上传课程封面
* 方法：POST
* 路由：/upload/cover
* */
req = {
    courseId: 'string',
    coverId:'first/second',
    file: fileObject,
}
Success:
    res = {
        msg: '上传成功'
    }
Error:
    res = {
        msg: '错误原因描述'
    }
/*
* 3.上传课时文本
* 方法：POST
* 路由：/upload/txt
* */
req = {
    courseId: 'string',
    timeId: 'string',
    fileContentText: 'string',
    fileHomeworkText: 'string'
}
Success:
    res = {
        msg: '上传成功'
    }
Error:
    res = {
        msg: '错误原因描述'
    }
/*
* 4.获取课程列表
* 方法：GET
* 路由：/getCourseList
* 返回数据：result={courseList:["课程一","课程二","课程三","课程四","课程五","课程六"]}
* */
Success:
    res = {
        courseList: []
    }
Error:
    res = {
        msg: '错误原因描述'
    }
/*
* 5.获取课程详细信息
* 方法：POST
* 路由：/getCourseDetail
* 返回数据：result={courseGroupId:"所属合集",courseLabels:["标签","标签","标签"],coverImgSrc:["封面一地址","封面二地址"]}
* */
req = {
    courseId: 'string',
}
Success:
    res = {
        courseGroupId: 'string',
        courseLabels: [],
        coverImgSrc:[]
    }
Error:
    res = {
        msg: '错误原因描述'
    }
/*
* 6.获取课时开启代号
* 方法：POST
* 路由：/getClassStartId
* 返回数据：result={timeStartId:"课时开启代号"}
* */
req = {
    courseId: 'string',
    timeId: 'string',
}
Success:
    res = {
        timeStartId: 'string',
    }
Error:
    res = {
        msg: '错误原因描述'
    }
/*7.获取课时列表
* 方法：POST
* 路由：/getTimeList
* 返回数据：result={timeList:["课时一","课时二","课时三"]}
* */
req = {
    courseId: 'string',
}
Success:
    res = {
        timeList: [],
    }
Error:
    res = {
        msg: '错误原因描述'
    }
/*
* 8.获取课时文本
* 方法：POST
* 路由：/getTimeDetail
* 返回数据：result={fileContentText:'课时内容文本',fileHomeworkText:'课时作业文本'}
* */
req = {
    courseId: 'string',
    timeId: 'string',
}
Success:
    res = {
        fileContentText: 'string',
        fileHomeworkText: 'string',
    }
Error:
    res = {
        msg: '错误原因描述'
    }
/*
* 9.删除课程
* 方法：POST
* 路由：/deleteCourse
* */
req = {
    courseId: 'string',
}
Success:
    res = {
        msg: '删除成功'
    }
Error:
    res = {
        msg: '错误原因描述'
    }
/*
* 10.删除课时
* 方法：POST
* 路由：/deleteTime
* */
req = {
    courseId: 'string',
    timeId: 'string',
}
Success:
    res = {
        msg: '删除成功'
    }
Error:
    res = {
        msg: '错误原因描述'
    }
/*
* 11.创建课时
* 方法：POST
* 路由：/createNewTime
* */
req = {
    courseId: 'string',
    time: 'string',
    timeStartId: 'string',
}
Success:
    res = {
        msg: '创建成功'
    }
Error:
    res = {
        msg: '错误原因描述'
    }
/*
* 12.更新课程封面
* 方法：POST
* 路由：/update/cover
* */
req = {
    courseId: 'string',
    coverId:'first/second',
    file: fileObject,
}
Success:
    res = {
        msg: '上传成功'
    }
Error:
    res = {
        msg: '错误原因描述'
    }
/*
* 13.更新课程信息<课时开启代号>，检查timeId和class_start_id是否为空，如果是则只更新课程信息；不为空则同时更新课时开启代号
* 方法：POST
* 路由：/updateGroupLabels
* */
req = {
    courseId: 'string',
    timeId: 'string',
    course_group_id: 'string',
    class_start_id: 'string',
    course_labels: 'string',
}
Success:
    res = {
        msg: '上传成功'
    }
Error:=
    res = {
        msg: '错误原因描述'
    }
/*
* 14.上传内容非文本内容
* 方法：POST
* 路由：/uploadMedia
* */
req = {
    courseId: 'string',
    timeId: 'string',
    type: 'content/homework',
    file: 'string',
}
Success:
    res = {
        mediaSrc: '多媒体文件地址'
    }
Error:
    res = {
        msg: '错误原因描述'
    }
