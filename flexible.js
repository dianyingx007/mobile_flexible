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
		var match = metaEL.getAttribute('content').match(/initial\-scale=()/);
		if (match) {
			scale = parseFloat(match[1]);
			dpr = parseInt(1/scale);
		}
	}


})(window);