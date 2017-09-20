define(['jquery','cookie'], function($) {
    //实现登录功能
    $('#loginBtn').on('click', function () {
        $.ajax({
            type: 'post',
            url: '/api/login',
            data: $('#loginForm').serialize(),
            dataType: 'json',
            success: function (data) {
                console.log(data);
                if (data.code == 200) {
                    // 把用户的登录信息,存储到cookie,方便跨页面共享数据
                    $.cookie('logInfo',JSON.stringify(data.result),{path:'/'});
                    // console.log($.cookie('loginInfo'))
                    // 登录成功,跳转到主页面
                    location.href = '/main/index';
                }
            }
        });

        return false;
    }); 
});