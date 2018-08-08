


$(document).ready(function() {
var now = new Date();
var cp_tt = document.getElementById('cp_t');
var cp_t = new Date("2018/09/01 00:00");
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

var ch10 = document.getElementById('dh_10');
var ct10 = document.getElementById('dt_10');
var bt10 = document.getElementById('bt_10');

var ch11 = document.getElementById('dh_11');
var ct11 = document.getElementById('dt_11');
var bt11 = document.getElementById('bt_11');

var ch12 = document.getElementById('dh_12');
var ct12 = document.getElementById('dt_12');
var bt12 = document.getElementById('bt_12');

var ch13 = document.getElementById('dh_13');
var ct13 = document.getElementById('dt_13');
var bt13 = document.getElementById('bt_13');

var ch14 = document.getElementById('dh_14');
var ct14 = document.getElementById('dt_14');
var bt14 = document.getElementById('bt_14');

var ch15 = document.getElementById('dh_15');
var ct15 = document.getElementById('dt_15');
var bt15 = document.getElementById('bt_15');

var ch16 = document.getElementById('dh_16');
var ct16 = document.getElementById('dt_16');
var bt16 = document.getElementById('bt_16');

var ch17 = document.getElementById('dh_17');
var ct17 = document.getElementById('dt_17');
var bt17 = document.getElementById('bt_17');

var ch18 = document.getElementById('dh_18');
var ct18 = document.getElementById('dt_18');
var bt18 = document.getElementById('bt_18');

var ch19 = document.getElementById('dh_19');
var ct19 = document.getElementById('dt_19');
var bt19 = document.getElementById('bt_19');

var ch20 = document.getElementById('dh_20');
var ct20 = document.getElementById('dt_20');
var bt20 = document.getElementById('bt_20');


// 01
var tt01 = new Date("2018/09/01 00:00");
if (now.getTime() > tt01.getTime()){
	$(ch01).show();$(ct01).show();
}
var b001 = new Date("2018/09/30 23:59");
if (now.getTime() > b001.getTime()){
	$(bt01).text('キャンペーン募集は終了しました');
	$(bt01).css({'background':'#bbb'});
}

// 02
var tt02 = new Date("2018/09/01 00:00");
if (now.getTime() > tt02.getTime()){
	$(ch02).show();$(ct02).show();
}
var b002 = new Date("2018/09/11 23:59");
if (now.getTime() > b002.getTime()){
	$(bt02).text('キャンペーン募集は終了しました');
	$(bt02).css({'background':'#bbb'});
}






});
