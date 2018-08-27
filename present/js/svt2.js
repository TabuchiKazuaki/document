
$(document).ready(function() {
var now = new Date();

var bt07 = document.getElementById('bt_07');
var bt08 = document.getElementById('bt_08');
var bt09 = document.getElementById('bt_09');
var bt10 = document.getElementById('bt_10');
var bt11 = document.getElementById('bt_11');
var bt12 = document.getElementById('bt_12');
var bt13 = document.getElementById('bt_13');


// 15~21
var b004a = new Date("2018/06/24 23:59");
if (now.getTime() > b004a.getTime()){

	$(bt07).text('9月15日 募集開始予定');
	$(bt07).css({'background':'#bbb'});
	$(bt07).attr("href","javascript:void(0)");
	$(bt08).text('9月15日 募集開始予定');
	$(bt08).css({'background':'#bbb'});
	$(bt08).attr("href","javascript:void(0)");
	$(bt09).text('9月15日 募集開始予定');
	$(bt09).css({'background':'#bbb'});
	$(bt09).attr("href","javascript:void(0)");
}
var b004a = new Date("2018/09/15 00:00");
if (now.getTime() > b004a.getTime()){
	$(bt07).text('今すぐみる');
	$(bt07).css({'background':'#50c401'});
	$(bt07).attr("href","https://abema.tv/search?q=%E3%82%A6%E3%82%B8%E3%81%AE%E3%81%8A%E7%B5%B5%E3%81%8B%E3%81%8D%E8%89%B2%E7%B4%99%E3%83%97%E3%83%AC%E3%82%BC%E3%83%B3%E3%83%88");
	$(bt08).text('今すぐみる');
	$(bt08).css({'background':'#50c401'});
	$(bt08).attr("href","https://abema.tv/search?q=%E3%83%87%E3%82%A3%E3%82%A8%E3%82%A4%E3%83%88%E3%81%AE%E3%81%8A%E7%B5%B5%E3%81%8B%E3%81%8D%E8%89%B2%E7%B4%99%E3%83%97%E3%83%AC%E3%82%BC%E3%83%B3%E3%83%88");
	$(bt09).text('今すぐみる');
	$(bt09).css({'background':'#50c401'});
	$(bt09).attr("href","https://abema.tv/search?q=%E3%83%9F%E3%83%B3%E3%82%AE%E3%83%A5%E3%81%AE%E3%81%8A%E7%B5%B5%E3%81%8B%E3%81%8D%E8%89%B2%E7%B4%99%E3%83%97%E3%83%AC%E3%82%BC%E3%83%B3%E3%83%88");
}
var b004 = new Date("2018/09/22 00:00");
if (now.getTime() > b004.getTime()){
	$(bt07).text('キャンペーン募集は終了しました');
	$(bt07).css({'background':'#bbb'});
	$(bt07).attr("href","javascript:void(0)");
	$(bt08).text('キャンペーン募集は終了しました');
	$(bt08).css({'background':'#bbb'});
	$(bt08).attr("href","javascript:void(0)");
	$(bt09).text('キャンペーン募集は終了しました');
	$(bt09).css({'background':'#bbb'});
	$(bt09).attr("href","javascript:void(0)");
}

// 22~30
var b005a = new Date("2018/06/24 23:59");
if (now.getTime() > b005a.getTime()){

	$(bt10).text('9月22日 募集開始予定');
	$(bt10).css({'background':'#bbb'});
	$(bt10).attr("href","javascript:void(0)");
	$(bt11).text('9月22日 募集開始予定');
	$(bt11).css({'background':'#bbb'});
	$(bt11).attr("href","javascript:void(0)");
	$(bt12).text('9月22日 募集開始予定');
	$(bt12).css({'background':'#bbb'});
	$(bt12).attr("href","javascript:void(0)");
	$(bt13).text('9月22日 募集開始予定');
	$(bt13).css({'background':'#bbb'});
	$(bt13).attr("href","javascript:void(0)");
}
var b005a = new Date("2018/09/22 00:00");
if (now.getTime() > b005a.getTime()){
	$(bt10).text('今すぐみる');
	$(bt10).css({'background':'#50c401'});
	$(bt10).attr("href","https://abema.tv/search?q=%E3%83%89%E3%82%AE%E3%83%A7%E3%83%A0%E3%81%AE%E3%81%8A%E7%B5%B5%E3%81%8B%E3%81%8D%E8%89%B2%E7%B4%99%E3%83%97%E3%83%AC%E3%82%BC%E3%83%B3%E3%83%88");
	$(bt11).text('今すぐみる');
	$(bt11).css({'background':'#50c401'});
	$(bt11).attr("href","https://abema.tv/search?q=%E3%82%B9%E3%83%B3%E3%82%B0%E3%82%A1%E3%83%B3%E3%81%AE%E3%81%8A%E7%B5%B5%E3%81%8B%E3%81%8D%E8%89%B2%E7%B4%99%E3%83%97%E3%83%AC%E3%82%BC%E3%83%B3%E3%83%88");
	$(bt12).text('今すぐみる');
	$(bt12).css({'background':'#50c401'});
	$(bt12).attr("href","https://abema.tv/search?q=%E3%83%90%E3%83%BC%E3%83%8E%E3%83%B3%E3%81%AE%E3%81%8A%E7%B5%B5%E3%81%8B%E3%81%8D%E8%89%B2%E7%B4%99%E3%83%97%E3%83%AC%E3%82%BC%E3%83%B3%E3%83%88");
	$(bt13).text('今すぐみる');
	$(bt13).css({'background':'#50c401'});
	$(bt13).attr("href","https://abema.tv/search?q=%E3%83%87%E3%82%A3%E3%83%8E%E3%81%AE%E3%81%8A%E7%B5%B5%E3%81%8B%E3%81%8D%E8%89%B2%E7%B4%99%E3%83%97%E3%83%AC%E3%82%BC%E3%83%B3%E3%83%88");
}
var b005 = new Date("2018/10/01 00:00");
if (now.getTime() > b005.getTime()){
	$(bt10).text('キャンペーン募集は終了しました');
	$(bt10).css({'background':'#bbb'});
	$(bt10).attr("href","javascript:void(0)");
	$(bt11).text('キャンペーン募集は終了しました');
	$(bt11).css({'background':'#bbb'});
	$(bt11).attr("href","javascript:void(0)");
	$(bt12).text('キャンペーン募集は終了しました');
	$(bt12).css({'background':'#bbb'});
	$(bt12).attr("href","javascript:void(0)");
	$(bt13).text('キャンペーン募集は終了しました');
	$(bt13).css({'background':'#bbb'});
	$(bt13).attr("href","javascript:void(0)");
}
});
