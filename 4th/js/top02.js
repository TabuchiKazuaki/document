$(document).ready(function() {
	var now = new Date();
	var def = new Date("2018/04/11 00:00");
	if (now.getTime() > def.getTime()) {
		$('.t01').hide();
		$('.t02').hide();
		$('.t03').hide();
		$('.t04').hide();
		$('.t05').hide();
		$('.t06').hide();
	}


	var time01 = new Date("2020/04/11 00:00");
	if (now.getTime() > time01.getTime()) {
		$('.t01').show();
	}
	var time01af = new Date("2020/04/14 23:59:59");
	if (now.getTime() > time01af.getTime()) {
		$('.t01').hide();
	}

	var time02 = new Date("2020/04/15 00:00");
	if (now.getTime() > time02.getTime()) {
		$('.t02').show();
	}
	var time02af = new Date("2020/04/15 23:59:59");
	if (now.getTime() > time02af.getTime()) {
		$('.t02').hide();
	}

	var time03 = new Date("2020/04/16 00:00");
	if (now.getTime() > time03.getTime()) {
		$('.t03').show();
	}
	var time03af = new Date("2020/04/16 23:59:59");
	if (now.getTime() > time03af.getTime()) {
		$('.t03').hide();
	}

	var time04 = new Date("2020/04/17 00:00");
	if (now.getTime() > time04.getTime()) {
		$('.t04').show();
	}
	var time04af = new Date("2020/04/17 23:59:59");
	if (now.getTime() > time04af.getTime()) {
		$('.t04').hide();
	}

	var time05 = new Date("2020/04/18 00:00");
	if (now.getTime() > time05.getTime()) {
		$('.t05').show();
	}
	var time05af = new Date("2020/04/18 23:59:59");
	if (now.getTime() > time05af.getTime()) {
		$('.t05').hide();
	}

	var time06 = new Date("2020/04/19 00:00");
	if (now.getTime() > time06.getTime()) {
		$('.t06').show();
	}
	var time06af = new Date("2020/04/19 23:59:59");
	if (now.getTime() > time06af.getTime()) {
		$('.t06').hide();
	}



	var time07 = new Date("2020/04/11 00:00");
	if (now.getTime() > time07.getTime()) {
		$('.t07').addClass('.add');
	}
	var time07af = new Date("2020/04/20 0:00");
	if (now.getTime() > time07af.getTime()) {
		$('.t07').removeClass('.add');
	}

	var time08 = new Date("2020/04/19 00:00");
	if (now.getTime() > time08.getTime()) {
		$('.t08').addClass('.add');
	}
	var time08af = new Date("2020/04/20 00:00");
	if (now.getTime() > time08af.getTime()) {
		$('.t08').removeClass('.add');
	}

	var time09 = new Date("2020/04/12 00:00");
	if (now.getTime() > time09.getTime()) {
		$('.t09').addClass('.add');
	}
	var time09af = new Date("2020/04/13 00:00");
	if (now.getTime() > time09af.getTime()) {
		$('.t09').removeClass('.add');
	}
});