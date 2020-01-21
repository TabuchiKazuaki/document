$(function() {
	countDown();
});

function countDown() {
	var now = new Date();
	var ts01 = new Date("2020/01/20");
	if (now.getTime() > ts01.getTime()) {
		var time = new Date();
		var end = new Date("2020/01/30 23:59");
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
}


$(document).ready(function() {
	var now = new Date();
	var weekend02 = new Date("2020/01/20 00:00");
	if (now.getTime() > weekend02.getTime()) {
		$('.h_a').addClass('h_active');
	}
	var between03 = new Date("2020/01/30 23:59");
	if (now.getTime() > between03.getTime()) {
		$('.t_box').hide();
		$('.h_a').removeClass('h_active');
	}
});









