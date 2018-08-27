


$(document).ready(function() {
var now = new Date();
var bt01 = document.getElementById('bt_01');
var bt02 = document.getElementById('bt_02');
var bt03 = document.getElementById('bt_03');
var bt04 = document.getElementById('bt_04');
var bt05 = document.getElementById('bt_05');
var bt06 = document.getElementById('bt_06');


// 30~9/8
var b001a = new Date("2018/06/31 23:59");
if (now.getTime() > b001a.getTime()){
	$(bt01).text('8月30日 募集開始予定');
	$(bt01).css({'background':'#bbb'});
	$(bt01).attr("href","javascript:void(0)");
	$(bt02).text('8月30日 募集開始予定');
	$(bt02).css({'background':'#bbb'});
	$(bt02).attr("href","javascript:void(0)");
	$(bt03).text('8月30日 募集開始予定');
	$(bt03).css({'background':'#bbb'});
	$(bt03).attr("href","javascript:void(0)");
}
var b001b = new Date("2018/08/30 00:00");
if (now.getTime() > b001b.getTime()){
	$(bt01).text('今すぐみる');
	$(bt01).css({'background':'#50c401'});
	$(bt01).attr("href","https://abema.tv/search?q=%E3%82%A8%E3%82%B9%E3%82%AF%E3%83%97%E3%82%B9%E3%81%AE%E3%81%8A%E7%B5%B5%E3%81%8B%E3%81%8D%E8%89%B2%E7%B4%99%E3%83%97%E3%83%AC%E3%82%BC%E3%83%B3%E3%83%88");
	$(bt02).text('今すぐみる');
	$(bt02).css({'background':'#50c401'});
	$(bt02).attr("href","https://abema.tv/search?q=%E3%82%B8%E3%83%A7%E3%83%B3%E3%83%8F%E3%83%B3%E3%81%AE%E3%81%8A%E7%B5%B5%E3%81%8B%E3%81%8D%E8%89%B2%E7%B4%99%E3%83%97%E3%83%AC%E3%82%BC%E3%83%B3%E3%83%88");
	$(bt03).text('今すぐみる');
	$(bt03).css({'background':'#50c401'});
	$(bt03).attr("href","https://abema.tv/search?q=%E3%82%B8%E3%83%A7%E3%82%B7%E3%83%A5%E3%82%A2%E3%81%AE%E3%81%8A%E7%B5%B5%E3%81%8B%E3%81%8D%E8%89%B2%E7%B4%99%E3%83%97%E3%83%AC%E3%82%BC%E3%83%B3%E3%83%88");
}
var b001 = new Date("2018/09/08 00:00");
if (now.getTime() > b001.getTime()){
	$(bt01).text('キャンペーン募集は終了しました');
	$(bt01).css({'background':'#bbb'});
	$(bt01).attr("href","javascript:void(0)");
	$(bt02).text('キャンペーン募集は終了しました');
	$(bt02).css({'background':'#bbb'});
	$(bt02).attr("href","javascript:void(0)");
	$(bt03).text('キャンペーン募集は終了しました');
	$(bt03).css({'background':'#bbb'});
	$(bt03).attr("href","javascript:void(0)");
}

// 8~14
var b002a = new Date("2018/06/24 23:59");
if (now.getTime() > b002a.getTime()){

	$(bt04).text('9月8日 募集開始予定');
	$(bt04).css({'background':'#bbb'});
	$(bt04).attr("href","javascript:void(0)");
	$(bt05).text('9月8日 募集開始予定');
	$(bt05).css({'background':'#bbb'});
	$(bt05).attr("href","javascript:void(0)");
	$(bt06).text('9月8日 募集開始予定');
	$(bt06).css({'background':'#bbb'});
	$(bt06).attr("href","javascript:void(0)");
}
var b002b = new Date("2018/09/08 00:00");
if (now.getTime() > b002b.getTime()){
	$(bt04).text('今すぐみる');
	$(bt04).css({'background':'#50c401'});
	$(bt04).attr("href","https://abema.tv/search?q=%E3%82%B8%E3%83%A5%E3%83%B3%E3%81%AE%E3%81%8A%E7%B5%B5%E3%81%8B%E3%81%8D%E8%89%B2%E7%B4%99%E3%83%97%E3%83%AC%E3%82%BC%E3%83%B3%E3%83%88");
	$(bt05).text('今すぐみる');
	$(bt05).css({'background':'#50c401'});
	$(bt05).attr("href","https://abema.tv/search?q=%E3%83%9B%E3%82%B7%E3%81%AE%E3%81%8A%E7%B5%B5%E3%81%8B%E3%81%8D%E8%89%B2%E7%B4%99%E3%83%97%E3%83%AC%E3%82%BC%E3%83%B3%E3%83%88");
	$(bt06).text('今すぐみる');
	$(bt06).css({'background':'#50c401'});
	$(bt06).attr("href","https://abema.tv/search?q=%E3%82%A6%E3%82%A9%E3%83%8C%E3%81%AE%E3%81%8A%E7%B5%B5%E3%81%8B%E3%81%8D%E8%89%B2%E7%B4%99%E3%83%97%E3%83%AC%E3%82%BC%E3%83%B3%E3%83%88");
}
var b002 = new Date("2018/09/15 00:00");
if (now.getTime() > b002.getTime()){
	$(bt04).text('キャンペーン募集は終了しました');
	$(bt04).css({'background':'#bbb'});
	$(bt04).attr("href","javascript:void(0)");
	$(bt05).text('キャンペーン募集は終了しました');
	$(bt05).css({'background':'#bbb'});
	$(bt05).attr("href","javascript:void(0)");
	$(bt06).text('キャンペーン募集は終了しました');
	$(bt06).css({'background':'#bbb'});
	$(bt06).attr("href","javascript:void(0)");
}

});
