


$(document).ready(function() {
var now = new Date();
var ele = document.getElementById('dt_yu');

// 01
var a001 = new Date("2018/06/30 23:59");
if (now.getTime() > a001.getTime()){
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
