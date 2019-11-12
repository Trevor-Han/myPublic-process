require.config({
	//main.js所在的位置
	baseUrl: "../dist",
	//模块标识名与模块路径映射
	paths: {
		'skrollr' : "skrollr.min"
	},
	//加载超时处理
	waitSeconds: 15
});

require(['skrollr'], function(skrollr){
	//在这里初始化我们引入的js文件
	var s = skrollr.init({
		edgeStrategy: 'set',
		easing: {
			WTF: Math.random,
			inverted: function(p) {
				return 1-p;
			}
		}
	});
});