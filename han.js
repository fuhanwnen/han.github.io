// const $ = el => document.querySelector(el);
var $ = function $(el) {
	return document.querySelector(el);
};
// const $$ = el => document.querySelectorAll(el);
var $$ = function $$(el) {
	return document.querySelectorAll(el);
};
var han = {
	countDown: '', //倒计时的时间
	// 倒计时
	time: function(s) {
		var EndTime = new Date(s);
		var NowTime = new Date();
		var time = EndTime.getTime() - NowTime.getTime();
		var d = Math.floor(time / 1000 / 60 / 60 / 24);
		var h = Math.floor(time / 1000 / 60 / 60 % 24);
		var m = Math.floor(time / 1000 / 60 % 60);
		var s = Math.floor(time / 1000 % 60);
		(h < 10) ? h = "0" + h: h;
		(m < 10) ? m = "0" + m: m;
		(s < 10) ? s = "0" + s: s;
		var myTime = '';
		// myTime = (d > 0) ? (`${d}天${h} : ${m} : ${s}`) : (`${h} : ${m} : ${s}`);
		myTime = (d > 0) ? (d + "天" + h + " : " + m + " : " + s) : (h + " : " + m + " : " + s);
		if (time < 0) {
			myTime = "00 : 00 : 00";
			clearInterval(cdTime);
		}
		document.querySelector('.countDown').innerHTML = myTime;
	},
	//随机色
	bgcolor: function() {
		var r = Math.floor(Math.random() * 256)
		var g = Math.floor(Math.random() * 256)
		var b = Math.floor(Math.random() * 256)
		return "rgb(" + r + ',' + g + ',' + b + ")"
	},
	//获取URL的参数
	getQueryString: function(name) {
		let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
		let r = window.location.search.substr(1).match(reg);
		if (r != null) return unescape(r[2]);
		return null;
	},
	//获取浏览器本地存储
	getStorage: function(key) {
		try {
			return localStorage.getItem(key);
		} catch (e) {
			console.log('get localStorage[' + key + '] error');
			return '';
		}
	},
	//设置浏览器本地存储
	setStorage: function(key, value) {
		try {
			localStorage.setItem(key, value);
		} catch (e) {
			console.log('get localStorage[' + key + '] error, maybe Storage space full!');
			return false;
		}
		return true;
	},
	//打乱顺序
	shuffle: function(arr) {
		var len = arr.length;
		for (var i = 0; i < len - 1; i++) {
			var idx = Math.floor(Math.random() * (len - i));
			var temp = arr[idx];
			arr[idx] = arr[len - i - 1];
			arr[len - i - 1] = temp;
		}
		return arr;
	},
	//随机数
	rndNum: function(minNum, maxNum) {
		rnd = Math.floor(Math.random() * (minNum - maxNum + 1) + maxNum);
		return rnd;
	},
	//生成指定位数的随机整数
	randomNum: function(number, minNum, maxNum) {
		var t = '';
		for (var i = 0; i < number; i++) {
			t += Math.floor(Math.random() * (minNum - maxNum + 1) + maxNum);
		}
		return t;
	},
	cardslide: function() {
		var todayTime = new Date();
		var getDay = todayTime.getDay(); //周／天
		var dateyear = todayTime.getFullYear(); //年
		var datemonth = todayTime.getMonth() + 1; //月
		var dateday = todayTime.getDate();　 //月份的某一天
		var datehours = todayTime.getHours(); //时
		var minutes = todayTime.getMinutes(); //分
		var seconds = todayTime.getSeconds(); //秒
		//获取下一个星期三的日子
		var friday = new Date((3 - getDay) * (3600 * 24 * 1000) + todayTime.getTime()).getDate();
		var xqs = (dateyear + '/' + datemonth + '/' + friday) + ' ' + '10:00:00';
		var EndTime = new Date(xqs)
		var time = EndTime.getTime() - todayTime.getTime();
		// var d = Math.floor(time / 1000 / 60 / 60 / 24);
		// var h = Math.floor(time / 1000 / 60 / 60 % 24);
		var m = Math.floor(time / 1000 / 60 % 60);
		var s = Math.floor(time / 1000 % 60);
		// (d < 10) ? d = "0" + d: d;
		// (h < 10) ? h = "0" + h: h;
		(m < 10) ? m = "0" + m: m;
		(s < 10) ? s = "0" + s: s;
		//星期三抽奖倒计时 9-10点 显示倒计时
		// var myTime = `${m} : ${s}`;
		var myTime = m + " : " + s;
		//0代表星期天
		if (getDay == 0) {
			var remainMsg = '3天后刮奖';
			clearTimeout(cdTimer)
		} else if (getDay == 1) {
			var remainMsg = '2天后刮奖';
			clearTimeout(cdTimer)
		} else if (getDay == 2) {
			var remainMsg = (34 - datehours) + '小时后刮奖'; //24+10
			clearTimeout(cdTimer)
		} else if (getDay == 3) {
			if (datehours < 9) {
				var remainMsg = (9 - datehours) + '小时后刮奖';
				clearTimeout(cdTimer)
			} else if (9 <= datehours && datehours < 10) {
				remainMsg = myTime + '后刮奖';
			} else {
				clearTimeout(cdTimer)
				var remainMsg = '刮奖进行中';
			}
		} else if (getDay == 4) {
			clearTimeout(cdTimer)
			var remainMsg = '6天后刮奖';
		} else if (getDay == 5) {
			clearTimeout(cdTimer)
			var remainMsg = '5天后刮奖';
		} else if (getDay == 6) {
			clearTimeout(cdTimer)
			var remainMsg = '4天后刮奖';
		}
		document.querySelector('.countdownOnWednesday').innerHTML = remainMsg;
	},
	//千位分隔符 s要分割的数值 n保留的小数位数
	fmoney: function(s, n) {
		n = n > 0 && n <= 20 ? n : 2;
		s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";
		var l = s.split(".")[0].split("").reverse(),
			r = s.split(".")[1];
		t = "";
		for (i = 0; i < l.length; i++) {
			t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");
		}
		return t.split("").reverse().join("") + "." + r;
	},
	//toast
	toast: function(msg) {
		setTimeout(function() {
			document.getElementsByClassName('toast-wrap')[0].getElementsByClassName('toast-msg')[0].innerHTML = msg;
			var toastTag = document.getElementsByClassName('toast-wrap')[0];
			toastTag.className = toastTag.className.replace('toastAnimate', '');
			setTimeout(function() {
				toastTag.className = toastTag.className + ' toastAnimate';
			}, 100);
		}, 500);
	}
}
//倒计时的调用
var cdTime = setInterval('han.time(han.countDown)', 1000);
var cdTimer = setInterval('han.cardslide(han.countDown)', 1000);