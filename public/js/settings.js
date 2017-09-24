define(['jquery','template','ckeditor','uploadify','region','datepicker','language',
'validate','form'], function($, template,CKEDITOR) {
    // 调用借口 获取个人信息
    $.ajax({
        type : 'get',
        url : '/api/teacher/profile',
        dataType : 'json',
        success : function(data) {
            //解析数据  渲染页面
            var html = template('settingsTpl',data.result);
            $('#settingsInfo').html(html);
            
            // 处理头像上传
            $('#upfile').uploadify({   
                width : 120,
                height : 120,
                buttonText : '',
                itemTemplate : '<span></span>',
                swf : '/public/assets/uploadify/uploadify.swf',
                uploader : '/api/uploader/avatar',
                fileObjName : 'tc_avatar',
                onUploadSuccess : function(a,b){
                  var obj = JSON.parse(b);
                  $('.preview img').attr('src',obj.result.path);
                }
              });
            
            // 处理省市区三级联动
            $('#pcd').region({
                url : '/public/assets/jquery-region/region.json'
            })

            // 富文本编辑器
            CKEDITOR.replace('editor',{
                toolbarGroups : [
                    { name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
                    { name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] },
                    '/',
                ]
            });

            // 处理表单提交
            $('#settingsForm').validate({
                sendForm : false,
                valid : function(){
                    // 获取家乡信息
                    var p = $('#p').find('option:selected').text();
                    var c = $('#c').find('option:selected').text();
                    var d = $('#d').find('option:selected').text();
                    var hometown = p + '|' + c + '|' + d;
                    // 同比不富文本内容
                    for (var instance in CKEDITOR.instances) {  // instance  实例
                        CKEDITOR.instances[instance].updateElement(); // 更新元素
                    }
                    $(this).ajaxSubmit({
                        type : 'post',
                        url : '/api/teacher/modify',
                        data : {tc_hometown : hometown},
                        dataType : 'json',
                        success : function(data) {
                            // 修改成功之后　重载当前页面
                            // location.reload();
                            // 更改富文本信息，值修改内容保存的话内容不会更改，应该该内容是更改了p标签里的内容  p在iframe中,
                            // 而原来的内容是在textarea里面
                        }
                    })
                }
            })
        }
    })
});