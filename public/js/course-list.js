define(['jquery','template','util'],function($,template,util) {
    // 设置导航菜单选中
    util.setMenu(location.pathname);
    // 课程列表渲染
    $.ajax({
        type : 'get',
        url : '/api/course',
        dataType: 'json',
        success : function(data) {
            // console.log(data);
            //解析数据 渲染页面
            var html = template('courselistTpl',{list: data.result});
            $('#courseInfo').html(html);
        }
    })
})