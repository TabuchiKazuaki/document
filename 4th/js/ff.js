$(document).ready(function() {
	var now = new Date();

	var def = new Date("2019/05/07 00:00");
	if (now.getTime() > def.getTime()) {
		$('.t01').hide();
		$('.t02').hide();
		$('.t03').hide();
		$('.t04').hide();
		$('.t05').hide();
	}

	var time01 = new Date("2020/04/18 00:00");
	if (now.getTime() > time01.getTime()) {
		$('.t01').show();
	}
	var time01af = new Date("2020/04/19 00:00");
	if (now.getTime() > time01af.getTime()) {
		$('.t01').hide();
	}

	var time02 = new Date("2020/04/15 00:00");
	if (now.getTime() > time02.getTime()) {
		$('.t02').show();
	}
	var time02af = new Date("2020/04/16 00:00");
	if (now.getTime() > time02af.getTime()) {
		$('.t02').hide();
	}

	var time03 = new Date("2020/04/17 00:00");
	if (now.getTime() > time03.getTime()) {
		$('.t03').show();
	}
	var time03af = new Date("2020/04/18 00:00");
	if (now.getTime() > time03af.getTime()) {
		$('.t03').hide();
	}

	var time04 = new Date("2020/04/16 00:00");
	if (now.getTime() > time04.getTime()) {
		$('.t04').show();
	}
	var time04af = new Date("2020/04/17 00:00");
	if (now.getTime() > time04af.getTime()) {
		$('.t04').hide();
	}

	var time05 = new Date("2020/04/19 00:00");
	if (now.getTime() > time05.getTime()) {
		$('.t05').show();
	}
	var time05af = new Date("2020/04/20 00:00");
	if (now.getTime() > time05af.getTime()) {
		$('.t05').hide();
	}
});