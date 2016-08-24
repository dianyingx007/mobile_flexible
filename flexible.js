;(function(win){
	//变量：
	var doc = win.document;
	var docEL = doc.documentElement;
	var metaEL = doc.querySelector('meta[name="viewport"]');
	var dpr = 0;
	var scale = 0;
	var timeoutid;

	//采用已有meta标签viewport设置
	if (metaEL) {
		var match = metaEL.getAttribute('content').match(/initial\-scale=([\d\.]+)/);
		if (match) {
			scale = parseFloat(match[1]);
			dpr = parseInt(1/scale);
		}
	}

	//没有设置meta时，自动设置dpr和scale
	//苹果手机按devicePixelRatio设置，最大为3；其余设备采用dpr=1
	if (!dpr) {
		var isIphone = win.navigator.appVersion.match(/iphone/gi);
		var devicePixelRatio = win.devicePixelRatio;
		if (isIphone) {
			if (devicePixelRatio >=3){
				dpr = 3
			}else {
				dpr = devicePixelRatio;
			}
		}else {
			dpr = 1
			//其他设备,dpr默认为1
		}
		scale = 1/dpr;
	}


})(window);