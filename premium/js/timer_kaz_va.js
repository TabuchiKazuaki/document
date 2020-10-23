$(function() {
	countDown();
});

function countDown() {
	var now = new Date();

	var t01be = new Date("2020/09/27 01:20");
	if (now.getTime() > t01be.getTime()) {
		$('.t01be').show();
	}
	var t01af = new Date("2020/10/27 01:20");
	if (now.getTime() > t01af.getTime()) {
		$('.t01be').hide();
		$('.t01af').show();
	}

	var t02be = new Date("2020/09/27 01:20");
	if (now.getTime() > t02be.getTime()) {
		$('.t02be').show();
	}
	var t02af = new Date("2020/10/28 14:00");
	if (now.getTime() > t02af.getTime()) {
		$('.t02be').hide();
		$('.t02af').show();
	}

	var t03be = new Date("2020/09/27 01:20");
	if (now.getTime() > t03be.getTime()) {
		$('.t03be').show();
	}
	var t03af = new Date("2020/10/25 00:00");
	if (now.getTime() > t03af.getTime()) {
		$('.t03be').hide();
		$('.t03af').show();
	}

	var t04be = new Date("2020/09/27 01:20");
	if (now.getTime() > t04be.getTime()) {
		$('.t04be').show();
	}
	var t04af = new Date("2020/10/30 01:50");
	if (now.getTime() > t04af.getTime()) {
		$('.t04be').hide();
		$('.t04af').show();
	}

	var t05be = new Date("2020/09/27 01:20");
	if (now.getTime() > t05be.getTime()) {
		$('.t05be').show();
	}
	var t05af = new Date("2020/10/31 01:50");
	if (now.getTime() > t05af.getTime()) {
		$('.t05be').hide();
		$('.t05af').show();
	}
}














