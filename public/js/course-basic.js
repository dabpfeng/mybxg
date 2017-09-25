define(['jquery','template','util'],function($,template,util) {
    //设置导航菜单选中
    util.setMenu('/course/add');
    //获取课程ID
    var csId = util.qs('cs_id');
    //获取操作标识符  也就是list.html中的flag
    var flag = util.qs('flag');
    //根据课程ID查询课程相关信息
    $.ajax({
        type : 'get',
        url : '/api/course/basic',
        data : {cs_id : csId},
        dataType : 'json',
        success : function(data) {
             console.log(data);
            if(flag){
                // 如果flag存在  则是编辑操作  否则是添加操作
                data.result.operate = '课程编辑';
            }else{
                // 否则flag不存在   则是添加操作
                data.result.operate = '课程添加';
            }
            var html = template('basicTpl',data.result);
            $('#basicInfo').html(html);
        }
    })
});