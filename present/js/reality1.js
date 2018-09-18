
$(document).ready(function() {
var now = new Date();

var rt01 = document.getElementById('rt_01');
var rt02 = document.getElementById('rt_02');
var rt03 = document.getElementById('rt_03');
var rt04 = document.getElementById('rt_04');
var rt05 = document.getElementById('rt_05');
var rt06 = document.getElementById('rt_06');
var rt07 = document.getElementById('rt_07');
var rt08 = document.getElementById('rt_07');


// 15~30
var r001 = new Date("2018/10/01 00:00");
if (now.getTime() > r001.getTime()){
	$(rt01).text('キャンペーン募集は終了しました');
	$(rt01).css({'background':'#bbb'});
	$(rt01).attr("href","javascript:void(0)");
	$(rt02).text('キャンペーン募集は終了しました');
	$(rt02).css({'background':'#bbb'});
	$(rt02).attr("href","javascript:void(0)");
	$(rt03).text('キャンペーン募集は終了しました');
	$(rt03).css({'background':'#bbb'});
	$(rt03).attr("href","javascript:void(0)");
	$(rt04).text('キャンペーン募集は終了しました');
	$(rt04).css({'background':'#bbb'});
	$(rt04).attr("href","javascript:void(0)");
	$(rt05).text('キャンペーン募集は終了しました');
	$(rt05).css({'background':'#bbb'});
	$(rt05).attr("href","javascript:void(0)");
	$(rt06).text('キャンペーン募集は終了しました');
	$(rt06).css({'background':'#bbb'});
	$(rt06).attr("href","javascript:void(0)");
	$(rt07).text('キャンペーン募集は終了しました');
	$(rt07).css({'background':'#bbb'});
	$(rt07).attr("href","javascript:void(0)");
	$(rt08).text('キャンペーン募集は終了しました');
	$(rt08).css({'background':'#bbb'});
	$(rt08).attr("href","javascript:void(0)");
}
});
