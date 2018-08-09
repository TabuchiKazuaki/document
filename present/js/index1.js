


$(document).ready(function() {
var now = new Date();
var cp_tt = document.getElementById('cp_t');
var cp_t = new Date("2017/09/01 00:00");
if (now.getTime() > cp_t.getTime()){
	cp_tt.innerText = 'ご好評につき9月30日まで延長！';
}

var ch01 = document.getElementById('dh_01');
var ct01 = document.getElementById('dt_01');
var bt01 = document.getElementById('bt_01');

var ch02 = document.getElementById('dh_02');
var ct02 = document.getElementById('dt_02');
var bt02 = document.getElementById('bt_02');

var ch03 = document.getElementById('dh_03');
var ct03 = document.getElementById('dt_03');
var bt03 = document.getElementById('bt_03');

var ch04 = document.getElementById('dh_04');
var ct04 = document.getElementById('dt_04');
var bt04 = document.getElementById('bt_04');

var ch05 = document.getElementById('dh_05');
var ct05 = document.getElementById('dt_05');
var bt05 = document.getElementById('bt_05');

var ch06 = document.getElementById('dh_06');
var ct06 = document.getElementById('dt_06');
var bt06 = document.getElementById('bt_06');

var ch07 = document.getElementById('dh_07');
var ct07 = document.getElementById('dt_07');
var bt07 = document.getElementById('bt_07');

var ch08 = document.getElementById('dh_08');
var ct08 = document.getElementById('dt_08');
var bt08 = document.getElementById('bt_08');

var ch09 = document.getElementById('dh_09');
var ct09 = document.getElementById('dt_09');
var bt09 = document.getElementById('bt_09');



// 01
var tt01 = new Date("2016/09/01 00:00");
if (now.getTime() > tt01.getTime()){
	$(ch01).show();$(ct01).show();
}
var b001 = new Date("2016/09/30 23:59");
if (now.getTime() > b001.getTime()){
	$(bt01).text('キャンペーン募集は終了しました');
	$(bt01).css({'background':'#bbb'});
	$(bt01).href('javascript:void(0)');
}

// 02
var tt02 = new Date("2016/09/01 00:00");
if (now.getTime() > tt02.getTime()){
	$(ch02).show();$(ct02).show();
}
var b002 = new Date("2016/09/11 23:59");
if (now.getTime() > b002.getTime()){
	$(bt02).text('キャンペーン募集は終了しました');
	$(bt02).css({'background':'#bbb'});
	$(bt02).attr("javascript:void(0)");
}

// 03
var tt03 = new Date("2018/09/01 00:00");
if (now.getTime() > tt03.getTime()){
	$(ch03).show();$(ct03).show();
}
var b003 = new Date("2018/09/30 23:59");
if (now.getTime() > b003.getTime()){
	$(bt03).text('キャンペーン募集は終了しました');
	$(bt03).css({'background':'#bbb'});
}
// 04
var tt04 = new Date("2018/09/01 00:00");
if (now.getTime() > tt04.getTime()){
	$(ch04).show();$(ct04).show();
}
var b004 = new Date("2018/09/11 23:59");
if (now.getTime() > b004.getTime()){
	$(bt04).text('キャンペーン募集は終了しました');
	$(bt04).css({'background':'#bbb'});
}
// 05
var tt05 = new Date("2018/09/01 00:00");
if (now.getTime() > tt05.getTime()){
	$(ch05).show();$(ct05).show();
}
var b005 = new Date("2018/09/11 23:59");
if (now.getTime() > b005.getTime()){
	$(bt05).text('キャンペーン募集は終了しました');
	$(bt05).css({'background':'#bbb'});
}
// 06
var tt06 = new Date("2018/09/01 00:00");
if (now.getTime() > tt06.getTime()){
	$(ch06).show();$(ct06).show();
}
var b006 = new Date("2018/09/11 23:59");
if (now.getTime() > b006.getTime()){
	$(bt06).text('キャンペーン募集は終了しました');
	$(bt06).css({'background':'#bbb'});
}
// 07
var tt07 = new Date("2018/09/01 00:00");
if (now.getTime() > tt07.getTime()){
	$(ch07).show();$(ct07).show();
}
var b007 = new Date("2018/09/11 23:59");
if (now.getTime() > b007.getTime()){
	$(bt07).text('キャンペーン募集は終了しました');
	$(bt07).css({'background':'#bbb'});
}
// 08
var tt08 = new Date("2018/09/01 00:00");
if (now.getTime() > tt08.getTime()){
	$(ch08).show();$(ct08).show();
}
var b008 = new Date("2018/09/11 23:59");
if (now.getTime() > b008.getTime()){
	$(bt08).text('キャンペーン募集は終了しました');
	$(bt08).css({'background':'#bbb'});
}
// 09
var tt09 = new Date("2018/09/01 00:00");
if (now.getTime() > tt09.getTime()){
	$(ch09).show();$(ct09).show();
}
var b009 = new Date("2018/09/11 23:59");
if (now.getTime() > b009.getTime()){
	$(bt09).text('キャンペーン募集は終了しました');
	$(bt09).css({'background':'#bbb'});
}





});
