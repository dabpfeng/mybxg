define(['jquery','template','util','datepicker','language'],function($,template,util){
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
                submitForm('/api/teacher/update');
            }
        });
    }else {
        // 添加讲师操作
       var html = template('teacherTpl',{operate:'添加讲师'});
       $('#teacherInfo').html(html);
       submitForm('/api/teacher/add');
    }

    // 实现表单提交
    function submitForm(url){
        $('teacherBtn').on('click',function(url) {
            $.ajax({
                type: 'post',
                url: url,
                data: $('#teacherForm').serialize(),
                dataType: 'json',
                success:function(data){
                    if(data.code == 200) {
                        location.href = '/teacher/list';
                    }
                }
            });
        });
    };
  
  
  });