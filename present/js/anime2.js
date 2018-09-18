
$(document).ready(function() {
var now = new Date();

var at09 = document.getElementById('at_09');
var at10 = document.getElementById('at_10');
var at11 = document.getElementById('at_11');
var at12 = document.getElementById('at_12');
var at13 = document.getElementById('at_13');
var at14 = document.getElementById('at_14');


// 15~30
var a002 = new Date("2018/10/01 00:00");
if (now.getTime() > a002.getTime()){
	$(at09).text('キャンペーン募集は終了しました');
	$(at09).css({'background':'#bbb'});
	$(at09).attr("href","javascript:void(0)");

	$(at10).text('キャンペーン募集は終了しました');
	$(at10).css({'background':'#bbb'});
	$(at10).attr("href","javascript:void(0)");

	$(at11).text('キャンペーン募集は終了しました');
	$(at11).css({'background':'#bbb'});
	$(at11).attr("href","javascript:void(0)");

	$(at12).text('キャンペーン募集は終了しました');
	$(at12).css({'background':'#bbb'});
	$(at12).attr("href","javascript:void(0)");

	$(at13).text('キャンペーン募集は終了しました');
	$(at13).css({'background':'#bbb'});
	$(at13).attr("href","javascript:void(0)");

	$(at14).text('キャンペーン募集は終了しました');
	$(at14).css({'background':'#bbb'});
	$(at14).attr("href","javascript:void(0)");
}

var ele = document.getElementById('dt_yu');

// 01
var at001 = new Date("2018/06/30 23:59");
if (now.getTime() > at001.getTime()){
	$(ele).text('9月16日 募集開始予定');
	$(ele).css({'background':'#bbb'});
	$(ele).attr("href","javascript:void(0)");
}
var b001 = new Date("2018/09/16 00:00");
if (now.getTime() > b001.getTime()){
	$(ele).text('いますぐ見る');
	$(ele).css({'background':'#50c401'});
	$(ele).attr("href","https://abema.tv/video/title/26-54");
}
var c001 = new Date("2018/09/29 23:59");
if (now.getTime() > c001.getTime()){
	$(ele).text('キャンペーン募集は終了しました');
	$(ele).css({'background':'#bbb'});
	$(ele).attr("href","javascript:void(0)");
}


});
