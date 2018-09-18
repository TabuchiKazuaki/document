
$(document).ready(function() {
var now = new Date();

var rt09 = document.getElementById('rt_09');
var rt10 = document.getElementById('rt_10');
var rt11 = document.getElementById('rt_11');
var rt12 = document.getElementById('rt_12');
var rt13 = document.getElementById('rt_13');
var rt14 = document.getElementById('rt_14');


// 15~30
var r002 = new Date("2018/10/01 00:00");
if (now.getTime() > r002.getTime()){
	$(rt09).text('キャンペーン募集は終了しました');
	$(rt09).css({'background':'#bbb'});
	$(rt09).attr("href","javascript:void(0)");
	$(rt10).text('キャンペーン募集は終了しました');
	$(rt10).css({'background':'#bbb'});
	$(rt10).attr("href","javascript:void(0)");
	$(rt11).text('キャンペーン募集は終了しました');
	$(rt11).css({'background':'#bbb'});
	$(rt11).attr("href","javascript:void(0)");
	$(rt12).text('キャンペーン募集は終了しました');
	$(rt12).css({'background':'#bbb'});
	$(rt12).attr("href","javascript:void(0)");
	$(rt13).text('キャンペーン募集は終了しました');
	$(rt13).css({'background':'#bbb'});
	$(rt13).attr("href","javascript:void(0)");
	$(rt14).text('キャンペーン募集は終了しました');
	$(rt14).css({'background':'#bbb'});
	$(rt14).attr("href","javascript:void(0)");
}
});
