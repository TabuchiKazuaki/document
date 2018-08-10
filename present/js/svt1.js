


$(document).ready(function() {
var now = new Date();
var bt01 = document.getElementById('bt_01');
var bt02 = document.getElementById('bt_02');
var bt03 = document.getElementById('bt_03');
var bt04 = document.getElementById('bt_04');
var bt05 = document.getElementById('bt_05');
var bt06 = document.getElementById('bt_06');
var bt07 = document.getElementById('bt_07');



// 18~25
var b001 = new Date("2018/08/25 23:59");
if (now.getTime() > b001.getTime()){
	$(bt01).text('キャンペーン募集は終了しました');
	$(bt01).css({'background':'#bbb'});
	$(bt01).attr("href","javascript:void(0)");
	$(bt02).text('キャンペーン募集は終了しました');
	$(bt02).css({'background':'#bbb'});
	$(bt02).attr("href","javascript:void(0)");
}
// 25~9/1
var b002a = new Date("2018/06/24 23:59");
if (now.getTime() > b002a.getTime()){
	$(bt03).text('8月25日 募集開始予定');
	$(bt03).css({'background':'#bbb'});
	$(bt03).attr("href","javascript:void(0)");
	$(bt04).text('8月25日 募集開始予定');
	$(bt04).css({'background':'#bbb'});
	$(bt04).attr("href","javascript:void(0)");
}
var b002a = new Date("2018/08/24 23:59");
if (now.getTime() > b002a.getTime()){
	$(bt03).text('今すぐみる');
	$(bt03).css({'background':'#50c401'});
	$(bt03).attr("href","   ");
	$(bt04).text('今すぐみる');
	$(bt04).css({'background':'#50c401'});
	$(bt04).attr("href","   ");
}
var b002 = new Date("2018/09/01 23:59");
if (now.getTime() > b002.getTime()){
	$(bt03).text('キャンペーン募集は終了しました');
	$(bt03).css({'background':'#bbb'});
	$(bt03).attr("href","javascript:void(0)");
	$(bt04).text('キャンペーン募集は終了しました');
	$(bt04).css({'background':'#bbb'});
	$(bt04).attr("href","javascript:void(0)");
}


// 9/1 ~9/8
var b003a = new Date("2018/06/31 23:59");
if (now.getTime() > b003a.getTime()){
	$(bt05).text('9月1日 募集開始予定');
	$(bt05).css({'background':'#bbb'});
	$(bt05).attr("href","javascript:void(0)");
	$(bt06).text('9月1日 募集開始予定');
	$(bt06).css({'background':'#bbb'});
	$(bt06).attr("href","javascript:void(0)");
}
var b003b = new Date("2018/08/31 23:59");
if (now.getTime() > b003b.getTime()){
	$(bt05).text('今すぐみる');
	$(bt05).css({'background':'#50c401'});
	$(bt05).attr("href","   ");
	$(bt06).text('今すぐみる');
	$(bt06).css({'background':'#50c401'});
	$(bt06).attr("href","   ");
}
var b003 = new Date("2018/09/01 23:59");
if (now.getTime() > b003.getTime()){
	$(bt05).text('キャンペーン募集は終了しました');
	$(bt05).css({'background':'#bbb'});
	$(bt05).attr("href","javascript:void(0)");
	$(bt06).text('キャンペーン募集は終了しました');
	$(bt06).css({'background':'#bbb'});
	$(bt06).attr("href","javascript:void(0)");
}

// 9/8 ~9/15
var b004a = new Date("2018/06/07 23:59");
if (now.getTime() > b004a.getTime()){
	$(bt07).text('9月8日 募集開始予定');
	$(bt07).css({'background':'#bbb'});
	$(bt07).attr("href","javascript:void(0)");
}
var b004b = new Date("2018/09/07 23:59");
if (now.getTime() > b004b.getTime()){
	$(bt07).text('今すぐみる');
	$(bt07).css({'background':'#50c401'});
	$(bt07).attr("href","   ");
}
var b004 = new Date("2018/09/15 23:59");
if (now.getTime() > b004.getTime()){
	$(bt07).text('キャンペーン募集は終了しました');
	$(bt07).css({'background':'#bbb'});
	$(bt07).attr("href","javascript:void(0)");
}

});
