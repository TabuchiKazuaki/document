$(document).ready(function() {
	var now = new Date();
	var t01 = new Date("2020/05/22 00:00");
	if (now.getTime() > t01.getTime()) {
		$('.t10').show();
	}

	var t02 = new Date("2020/05/23 00:00");
	if (now.getTime() > t02.getTime()) {
		$('.t10').hide();
		$('.t09').show();
	}

	var t03 = new Date("2020/05/24 00:00");
	if (now.getTime() > t03.getTime()) {
		$('.t09').hide();
		$('.t08').show();
	}

	var t04 = new Date("2020/05/25 00:00");
	if (now.getTime() > t04.getTime()) {
		$('.t08').hide();
		$('.t07').show();
	}

	var t05 = new Date("2020/05/26 00:00");
	if (now.getTime() > t05.getTime()) {
		$('.t07').hide();
		$('.t06').show();
	}

	var t06 = new Date("2020/05/27 00:00");
	if (now.getTime() > t06.getTime()) {
		$('.t06').hide();
		$('.t05').show();
	}

	var t07 = new Date("2020/05/28 00:00");
	if (now.getTime() > t07.getTime()) {
		$('.t05').hide();
		$('.t04').show();
	}

	var t08 = new Date("2020/05/29 00:00");
	if (now.getTime() > t08.getTime()) {
		$('.t04').hide();
		$('.t03').show();
	}

	var t09 = new Date("2020/05/30 00:00");
	if (now.getTime() > t09.getTime()) {
		$('.t03').hide();
		$('.t02').show();
	}

	var t10 = new Date("2020/05/31 00:00");
	if (now.getTime() > t10.getTime()) {
		$('.t02').hide();
		$('.t01').show();
	}

	var t11 = new Date("2020/06/01 00:00");
	if (now.getTime() > t11.getTime()) {
		$('.t01').hide();
	}

});