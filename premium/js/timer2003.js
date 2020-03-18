$(function() {
	countDown();
});

function countDown() {
	var now = new Date();
	var time = new Date();
	var end = new Date("2020/03/31 23:59");
	var left = end - time;
	var a_day = 24 * 60 * 60 * 1000;
	var d = Math.floor(left / a_day)
	var h = Math.floor((left % a_day) / (60 * 60 * 1000))
	var m = Math.floor((left % a_day) / (60 * 1000)) % 60
	var s = Math.floor((left % a_day) / 1000) % 60 % 60

	$("#day").text(d);
	$("#hour").text(h);
	$("#min").text(m);
	$("#sec").text(s);
	setTimeout('countDown()', 1000);
}

// 非表示時間
$(document).ready(function() {
	var now = new Date();
	var def = new Date("2020/03/01 00:00");
	if (now.getTime() > def.getTime()) {
		$('.t_tex').hide();
	}
	var after = new Date("2020/04/01 00:00");
	if (now.getTime() > after.getTime()) {
		$('.timer').hide();
		$('.t_tex').show();
	}
});









