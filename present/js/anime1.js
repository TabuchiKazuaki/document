
$(document).ready(function() {
var now = new Date();

var at01 = document.getElementById('at_01');
var at02 = document.getElementById('at_02');
var at03 = document.getElementById('at_03');
var at04 = document.getElementById('at_04');
var at05 = document.getElementById('at_05');
var at06 = document.getElementById('at_06');
var at07 = document.getElementById('at_07');
var at08 = document.getElementById('at_08');


// 15~30
var a001 = new Date("2018/10/01 00:00");
if (now.getTime() > a001.getTime()){
	$(at01).text('キャンペーン募集は終了しました');
	$(at01).css({'background':'#bbb'});
	$(at01).attr("href","javascript:void(0)");

	$(at02).text('キャンペーン募集は終了しました');
	$(at02).css({'background':'#bbb'});
	$(at02).attr("href","javascript:void(0)");

	$(at03).text('キャンペーン募集は終了しました');
	$(at03).css({'background':'#bbb'});
	$(at03).attr("href","javascript:void(0)");

	$(at04).text('キャンペーン募集は終了しました');
	$(at04).css({'background':'#bbb'});
	$(at04).attr("href","javascript:void(0)");

	$(at05).text('キャンペーン募集は終了しました');
	$(at05).css({'background':'#bbb'});
	$(at05).attr("href","javascript:void(0)");

	$(at06).text('キャンペーン募集は終了しました');
	$(at06).css({'background':'#bbb'});
	$(at06).attr("href","javascript:void(0)");

	$(at07).text('キャンペーン募集は終了しました');
	$(at07).css({'background':'#bbb'});
	$(at07).attr("href","javascript:void(0)");

	$(at08).text('キャンペーン募集は終了しました');
	$(at08).css({'background':'#bbb'});
	$(at08).attr("href","javascript:void(0)");
}
});
