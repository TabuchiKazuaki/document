
$(document).ready(function() {
var now = new Date();

var at01 = document.getElementById('bt_01');
var at02 = document.getElementById('bt_02');

// 1-2
var a01 = new Date("2018/06/18 23:59");
if (now.getTime() > a01.getTime()){
	$(at01).text('11月22日 募集開始予定');
	$(at01).css({'background':'#bbb'});
	$(at01).attr("href","javascript:void(0)");
}
var b01 = new Date("2018/11/22 00:00");
if (now.getTime() > b01.getTime()){
	$(at01).text('今すぐみる');
	$(at01).css({'background':'#50c401'});
	$(at01).attr("href","https://abema.tv/video/title/25-102");
}
var c01 = new Date("2018/12/03 23:59");
if (now.getTime() > c01.getTime()){
	$(at01).text('キャンペーン募集は終了しました');
	$(at01).css({'background':'#bbb'});
	$(at01).attr("href","javascript:void(0)");
}





var a02 = new Date("2018/06/18 23:59");
if (now.getTime() > a02.getTime()){
	$(at02).text('11月22日 募集開始予定');
	$(at02).css({'background':'#bbb'});
	$(at02).attr("href","javascript:void(0)");
}
var b02 = new Date("2018/11/22 00:00");
if (now.getTime() > b02.getTime()){
	$(at02).text('今すぐみる');
	$(at02).css({'background':'#50c401'});
	$(at02).attr("href","https://abema.tv/video/title/199-23");
}
var c02 = new Date("2018/12/03 23:59");
if (now.getTime() > c02.getTime()){
	$(at02).text('キャンペーン募集は終了しました');
	$(at02).css({'background':'#bbb'});
	$(at02).attr("href","javascript:void(0)");
}
});
