define(['jquery','template','util','ckeditor'],function($,template,util,CKEDITOR) {
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
            //  console.log(data);
            if(flag){
                // 如果flag存在  则是编辑操作  否则是添加操作
                data.result.operate = '课程编辑';
            }else{
                // 否则flag不存在   则是添加操作
                data.result.operate = '课程添加';
            }
            var html = template('basicTpl',data.result);
            $('#basicInfo').html(html);

            // 处理二级分类的下拉联动
            $('#firstTag').on('change',function(){
                var pid = $(this).val();
                // 根据一级分类的id查二级分类的数据
                $.ajax({
                    type : 'get',
                    url : '/api/category/child',
                    data : {cg_id : pid},
                    dataType : 'json',
                    success : function(data) {
                        // console.log(data);
                        // 拼接二级分类的下拉选项
                        var tpl = ' <option value="">请选择二级分类</option>{{each list}}<option value="{{$value.cg_id}}">{{$value.cg_name}}</option>{{/each}}'
                        var html = template.render(tpl,{list:data.result});
                        $('#secondTag').html(html);
                    }
                })
            });

            // 处理富文本
            CKEDITOR.replace('editor',{
                toolbarGroups : [
                    { name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
                    { name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] },
                    '/',
                ]
            });
        }
    })
});