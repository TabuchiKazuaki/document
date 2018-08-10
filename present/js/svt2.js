
$(document).ready(function() {
var now = new Date();

var bt08 = document.getElementById('bt_08');
var bt09 = document.getElementById('bt_09');
var bt10 = document.getElementById('bt_10');
var bt11 = document.getElementById('bt_11');
var bt12 = document.getElementById('bt_12');
var bt13 = document.getElementById('bt_13');



// 08
// 9/8 ~9/15
var b004a = new Date("2018/06/07 23:59");
if (now.getTime() > b004a.getTime()){
	$(bt08).text('9月8日 募集開始予定');
	$(bt08).css({'background':'#bbb'});
	$(bt08).attr("href","javascript:void(0)");
}
var b004b = new Date("2018/09/07 23:59");
if (now.getTime() > b004b.getTime()){
	$(bt08).text('今すぐみる');
	$(bt08).css({'background':'#50c401'});
	$(bt08).attr("href","   ");
}
var b004 = new Date("2018/09/15 23:59");
if (now.getTime() > b004.getTime()){
	$(bt08).text('キャンペーン募集は終了しました');
	$(bt08).css({'background':'#bbb'});
	$(bt08).attr("href","javascript:void(0)");
}

// 09 10
// 9/15 ~9/22
var b005a = new Date("2018/06/07 23:59");
if (now.getTime() > b005a.getTime()){
	$(bt09).text('9月15日 募集開始予定');
	$(bt09).css({'background':'#bbb'});
	$(bt09).attr("href","javascript:void(0)");
	$(bt10).text('9月15日 募集開始予定');
	$(bt10).css({'background':'#bbb'});
	$(bt10).attr("href","javascript:void(0)");
}
var b005b = new Date("2018/09/14 23:59");
if (now.getTime() > b005b.getTime()){
	$(bt09).text('今すぐみる');
	$(bt09).css({'background':'#50c401'});
	$(bt09).attr("href","   ");
	$(bt10).text('今すぐみる');
	$(bt10).css({'background':'#50c401'});
	$(bt10).attr("href","   ");
}
var b005 = new Date("2018/09/22 23:59");
if (now.getTime() > b005.getTime()){
	$(bt09).text('キャンペーン募集は終了しました');
	$(bt09).css({'background':'#bbb'});
	$(bt09).attr("href","javascript:void(0)");
	$(bt10).text('キャンペーン募集は終了しました');
	$(bt10).css({'background':'#bbb'});
	$(bt10).attr("href","javascript:void(0)");
}


// 11 12
// 9/22 ~9/30
var b006a = new Date("2018/06/07 23:59");
if (now.getTime() > b006a.getTime()){
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
var b006b = new Date("2018/09/21 23:59");
if (now.getTime() > b006b.getTime()){
	$(bt11).text('今すぐみる');
	$(bt11).css({'background':'#50c401'});
	$(bt11).attr("href","   ");
	$(bt12).text('今すぐみる');
	$(bt12).css({'background':'#50c401'});
	$(bt12).attr("href","   ");
	$(bt13).text('今すぐみる');
	$(bt13).css({'background':'#50c401'});
	$(bt13).attr("href","   ");
}
var b006 = new Date("2018/09/22 23:59");
if (now.getTime() > b006.getTime()){
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
