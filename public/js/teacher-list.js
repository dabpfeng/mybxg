define(['jquery','template','util','bootstrap'], function($, template,util) {
     // 设置导航菜单选中
     util.setMenu(location.pathname);
    // 调用接口 获取所有的讲师数据
    $.ajax({
        type: 'get',
        url: '/api/teacher',
        dataType: 'json',
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
                    dataType: 'json',
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

            //查看讲师详情
            $('.preview').on('click',function() {
                var td = $(this).parent('td');   
                // console.log(td);
                var tcId = td.attr('data-tcId');
                $.ajax({
                    type: 'get',
                    url: '/api/teacher/view',
                    data: {tc_id: tcId},
                    dataType: 'json',
                    success: function(data) {   // success 没有写对   ...............................
                        // console.log(data);
                            var html = template('modalTpl',data.result);
                            $('#modalInfo').html(html);
                            $('#teacherModal').modal();
                    }
                })
            })
        }
    });
});