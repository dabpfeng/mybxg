<?php

	// 后端路由 (根据URL的不同响应不同的页面)



	// header('content-type:text/html;charset=utf8');
	// include('./header.html');
	// echo  '页面内容';
	// include('./footer.html');
	// // include 在当前的PHP页面当中嵌入一个子页面

	// include('./views/main/index.html');

	// var_dump($_SERVER);  // php当中的全局变量
	// $path = $_SERVER['PATH_INFO'];
	//
	// include('./views'.$path.'.html');

	// 必须能够购通过URL区分出用户想访问哪个页面

	// 默认目录名称
	$dir = 'main';
	// 默认文件名称
	$filename = 'index';

	// 处理URL路径
	if(array_key_exists('PATH_INFO', $_SERVER)) {
		// PATH_INFO属性存在
		$path = $_SERVER['PATH_INFO'];  //  /main/index
		// 去掉第一个斜杠
		$str = substr($path,1); //  main/index
		// 分隔字符串, 和js中split方法比较类似
		$ret = explode('/',$str);
		if(count($ret) === 2) {
			// 路径有两层
			$dir = $ret[0];   // 覆盖目录
			$filename = $ret[1];  // 覆盖文件名称
		} else {
			// 其他情况默认跳转到login页面
			$filename = 'login';
		}
	}
		// 嵌入子页面
		include('./views/'.$dir.'/'.$filename.'.html');
 ?>
