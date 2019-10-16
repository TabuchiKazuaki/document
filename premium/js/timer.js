
$(function() {
	var time = new Date();
	var end = new Date("2019/11/30");
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
});

$(document).ready(function() {
	var now = new Date();
	var before = new Date("2019/06/15 00:00");
	if (now.getTime() > before.getTime()) {
		$('.chace').hide();
		$('.h_a').addClass('h_active');
	}
	var weekend = new Date("2019/11/01 00:00");
	if (now.getTime() > weekend.getTime()) {
		$('.chace').show();
		$('.h_a').removeClass('h_active');
	}
	var between02 = new Date("2019/11/03 00:00");
	if (now.getTime() > between02.getTime()) {
		$('.chace').hide();
		$('.h_a').addClass('h_active');
	}
	var weekend02 = new Date("2019/11/09 00:00");
	if (now.getTime() > weekend02.getTime()) {
		$('.chace').show();
		$('.h_a').removeClass('h_active');
	}
	var between03 = new Date("2019/11/11 00:00");
	if (now.getTime() > between03.getTime()) {
		$('.chace').hide();
		$('.h_a').addClass('h_active');
	}
	var weekend03 = new Date("2019/11/16 00:00");
	if (now.getTime() > weekend03.getTime()) {
		$('.chace').show();
		$('.h_a').removeClass('h_active');
	}
	var between04 = new Date("2019/11/18 00:00");
	if (now.getTime() > between04.getTime()) {
		$('.chace').hide();
		$('.h_a').addClass('h_active');
	}
	var weekend04 = new Date("2019/11/23 00:00");
	if (now.getTime() > weekend04.getTime()) {
		$('.chace').show();
		$('.h_a').removeClass('h_active');
	}

	var between05 = new Date("2019/11/25 00:00");
	if (now.getTime() > between05.getTime()) {
		$('.chace').hide();
		$('.h_a').removeClass('h_active');
	}
	var weekend05 = new Date("2019/11/30 00:00");
	if (now.getTime() > weekend05.getTime()) {
		$('.chace').show();
		$('.h_a').removeClass('h_active');
	}

	var between06 = new Date("2019/12/01 00:00");
	if (now.getTime() > between06.getTime()) {
		$('.chace').hide();
		$('.h_a').removeClass('h_active');
	}
});










