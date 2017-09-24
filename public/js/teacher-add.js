define(['jquery','template','util','datepicker','language','validate','form'],function($,template,util){
    var tcId = util.qs('tc_id');
    // console.log(tcId);
    if(tcId) {  
        // 有传递进来tc_id ,进行编辑讲师操作  
        $.ajax({    
            type: 'get',
            url: '/api/teacher/edit',
            data: {tc_id: tcId},  
            dataType: 'json',
            success: function(data) {
                // console.log(data);
                data.result.operate = '编辑讲师'
                var html = template('teacherTpl',data.result);
                $('#teacherInfo').html(html);
                // 处理表单提交
                submitForm('/api/teacher/update');
            }
        });
    }else {
        // 添加讲师操作
       var html = template('teacherTpl',{operate:'添加讲师'});
       $('#teacherInfo').html(html);
       // 处理表单提交
       submitForm('/api/teacher/add');
    }

    //代码优雅  可维护性高  区别于小白和大牛
    
    // 使用插件进行表单验证以及表单提交  jquery-form以及validate
    function submitForm(url) {
        $('#teacherForm').validate({
            sendForm : false,
            valid : function(){
                $(this).ajaxSubmit({
                    type: 'post',
                    url : url,
                    dataType : 'json',
                    success : function(data){
                        if(data.code == 200) {
                            location.href = '/teacher/list'
                        }
                    }
                })
            },
            description : {
                tcName : {
                    required : '用户名不能为空',
                },
                tcPass : {
                    required : '密码不能为空',
                    pattern : '密码必须为6位数字',
                },
                tcJoinDate : {
                    required : '日期不能为空'
                }
            }
        });
    }



    // 实现表单提交
    // function submitForm(url){
    //     $('#teacherBtn').on('click',function() {
    //         console.log(11);
    //         $.ajax({
    //             type : 'post',
    //             url : url,
    //             data : $('#teacherForm').serialize(), //serialize()提交表单中所有数据(name属性当中的数据)
    //             dataType : 'json',
    //             success : function(data){
    //                 console.log(data);
    //                 if(data.code == 200) {
    //                     location.href = '/teacher/list';
    //                 }
    //             }
    //         });
    //     });
    // };
  
  
  });