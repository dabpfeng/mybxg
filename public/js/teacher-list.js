define(['jquery','template'], function($, template) {
    // 调用借口 获取所有的讲师数据
    $.ajax({
        type: 'get',
        url: '/api/teacher',
        datatype: 'json',
        success:function(data) {
            // 解析数据,通过模版引擎渲染页面
            // console.log(data);
            var html = template('teacherTpl',{list:data.result});
            $('#teacherInfo').html(html);


            // 启用和注销功能  
            // 这里启用和注销的业务实现要在ajax请求成功之后,而且是在要页面的讲师
            // 列表模版引擎渲染完成之后才能执行,因为这样才能获取列表模版内的元素
            $('.eod').on('click',function() {
                var that = this;
                var td = $(this).closest('td');    //  closest('') 获取最近的父元素
                // console.log(td);
                var tcId = td.attr('data-tcId');
                var tcStatus = td.attr('data-status');
                // console.log(tcId,tcStatus);
                $.ajax({
                    type: 'post',
                    url: '/api/teacher/handle',
                    data: {tc_id : tcId,tc_status : tcStatus},
                    datatype: 'json',
                    success: function(data){
                        if(data.code == 200) {
                            td.attr('data-status',data.result.tc_status);
                            if(data.result.tc_status == 0) {
                                $(that).text('注销'); 
                            } else {
                                $(that).text('启用');
                            }
                        }
                    }
                });
            });
        }
    });
    
});