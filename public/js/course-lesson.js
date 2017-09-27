define(['jquery','template','util'],function($,template,util){
    // 设置导航菜单选中
    util.setMenu("/course/add");
    // 获取课程id
    var csId = util.qs('cs_id');
    // 获取课程相关数据
    $.ajax({
        type : 'get',
        url : '/api/course/lesson',
        data : {cs_id : csId},
        dataType : 'json',
        success : function(data){
            var html = template('lessonTpl',data.result);
            $('#lessonInfo').html(html);
        }
    })
})