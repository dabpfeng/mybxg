define(['jquery','template'], function($, template) {
    // 调用借口 获取所有的讲师数据
    $.ajax({
        type: 'get',
        url: '/api/teacher',
        datatype: 'json',
        success:function(data) {
            // 解析数据,通过模版引擎渲染页面
            console.log(data);
            var html = template('teacherTpl',{list:data.result});
            $('#teacherInfo').html(html);
        }
    })
    
});