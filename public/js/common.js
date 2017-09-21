define(['jquery','template','cookie'], function($,template) {
	// NProgress.start();
	
	// NProgress.done();
	
	$('.navs ul').prev('a').on('click', function () {
		$(this).next().slideToggle();
	});
	
	
	// 点击退出  退出当前用户
	$('.logoutBtn').on('click',function () {
		// 退出  清除PHPSESSID
		$.ajax({
			type: "post",
			url: "/api/logout",
			dataType: "json",
			success: function (data) {
				// console.log(data);
				if(data.code == 200) {
					//退出成功
					location.href = '/main/login';
				}
			}
		});
	});
	
	// 验证用户是否登录
	var flag = $.cookie('PHPSESSID');
	if(!flag && location.pathname !== '/main/login') {
		// 如果cookie不存在,则跳转到登录页面
		location.href = '/main/login';
	};
	
	// 设置用户登录后信息
	var logInfo = $.cookie('logInfo');
	logInfo = logInfo && JSON.parse(logInfo);
	// console.log(logInfo);
	// 设置用户的头像信息
	// $('.aside .profile img').attr('src',logInfo.tc_avatar);
	// // 设置用户昵称
	// $('.aside .profile h4').html(logInfo.tc_name);

	// // 利用模版引擎渲染登录信息
	var tpl = '<div class="avatar img-circle"><img src="{{tc_avatar}}"></div><h4>{{tc_name}}</h4>'
	var html = template.render(tpl,logInfo);
	$('.aside .profile').html(html);
});
