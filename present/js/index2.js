
$(document).ready(function() {
var now = new Date();

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


// 10
var tt10 = new Date("2016/09/01 00:00");
if (now.getTime() > tt10.getTime()){
	$(ch10).show();$(ct10).show();
}
var b010 = new Date("2016/09/30 23:59");
if (now.getTime() > b010.getTime()){
	$(bt10).text('キャンペーン募集は終了しました');
	$(bt10).css({'background':'#bbb'});
	$(bt10).attr("href","javascript:void(0)");
}

// 11
var tt11 = new Date("2016/09/01 00:00");
if (now.getTime() > tt11.getTime()){
	$(ch11).show();$(ct11).show();
}
var b011 = new Date("2016/09/30 23:59");
if (now.getTime() > b011.getTime()){
	$(bt11).text('キャンペーン募集は終了しました');
	$(bt11).css({'background':'#bbb'});
	$(bt11).attr("href","javascript:void(0)");
}

// 12
var tt12 = new Date("2016/09/01 00:00");
if (now.getTime() > tt12.getTime()){
	$(ch12).show();$(ct12).show();
}
var b012 = new Date("2016/09/30 23:59");
if (now.getTime() > b012.getTime()){
	$(bt12).text('キャンペーン募集は終了しました');
	$(bt12).css({'background':'#bbb'});
	$(bt12).attr("href","javascript:void(0)");
}
// 13
var tt13 = new Date("2016/09/01 00:00");
if (now.getTime() > tt13.getTime()){
	$(ch13).show();$(ct13).show();
	$(bt12).attr("href","javascript:void(0)");
}
var b013 = new Date("2016/09/19 23:59");
if (now.getTime() > b013.getTime()){
	$(bt13).text('キャンペーン募集は終了しました');
	$(bt13).css({'background':'#bbb'});
	$(bt13).attr("href","javascript:void(0)");
}
// 14
var tt14 = new Date("2016/09/01 00:00");
if (now.getTime() > tt14.getTime()){
	$(ch14).show();$(ct14).show();
}
var b014 = new Date("2016/09/19 23:59");
if (now.getTime() > b014.getTime()){
	$(bt14).text('キャンペーン募集は終了しました');
	$(bt14).css({'background':'#bbb'});
	$(bt14).attr("href","javascript:void(0)");
}
// 15
var tt15 = new Date("2016/09/01 00:00");
if (now.getTime() > tt15.getTime()){
	$(ch15).show();$(ct15).show();
}
var b015 = new Date("2016/09/14 23:59");
if (now.getTime() > b015.getTime()){
	$(bt15).text('キャンペーン募集は終了しました');
	$(bt15).css({'background':'#bbb'});
	$(bt15).attr("href","javascript:void(0)");
}
// 16
var tt16 = new Date("2016/09/01 00:00");
if (now.getTime() > tt16.getTime()){
	$(ch16).show();$(ct16).show();
}
var b016 = new Date("2016/09/30 23:59");
if (now.getTime() > b016.getTime()){
	$(bt16).text('キャンペーン募集は終了しました');
	$(bt16).css({'background':'#bbb'});
	$(bt16).attr("href","javascript:void(0)");
}
// 17
var tt17 = new Date("2016/09/01 00:00");
if (now.getTime() > tt17.getTime()){
	$(ch17).show();$(ct17).show();
}
var b017 = new Date("2016/09/30 23:59");
if (now.getTime() > b017.getTime()){
	$(bt17).text('キャンペーン募集は終了しました');
	$(bt17).css({'background':'#bbb'});
	$(bt17).attr("href","javascript:void(0)");
}
// 18
var tt18 = new Date("2016/09/01 00:00");
if (now.getTime() > tt18.getTime()){
	$(ch18).show();$(ct18).show();
}
var b018 = new Date("2016/09/10 23:59");
if (now.getTime() > b018.getTime()){
	$(bt18).text('キャンペーン募集は終了しました');
	$(bt18).css({'background':'#bbb'});
	$(bt18).attr("href","javascript:void(0)");
}







});
