$(document).ready(function() {
	var now = new Date();

	var def = new Date("2019/05/07 00:00");
	if (now.getTime() > def.getTime()) {
		$('.t0104_17').hide();
		$('.t0218_31').hide();

		$('.t0304_10').hide();
		$('.t0411_17').hide();
		$('.t0518_24').hide();
		$('.t0625_31').hide();

		$('.t0701_14').hide();

		$('.t0815_28').hide();

		$('.t0915_21').hide();
		$('.t1015_21').hide();

		$('.t1115_28').hide();

		$('.t1201_07').hide();
		$('.t1308_14').hide();

	}



	var t01 = new Date("2019/10/04 00:00");
	if (now.getTime() > t01.getTime()) {
		$('.t0104_17').show();
	}
	var t01sec = new Date("2019/10/18 00:00");
	if (now.getTime() > t01sec.getTime()) {
		$('.t0104_17').hide();
		$('.t0218_31').show();
	}
	var t01end = new Date("2019/10/31 23:59");
	if (now.getTime() > t01end.getTime()) {
		$('.t0218_31').hide();
	}

	// 3-6
	var t02 = new Date("2019/10/04 00:00");
	if (now.getTime() > t02.getTime()) {
		$('.t0304_10').show();
	}
	var t02sec = new Date("2019/10/11 00:00");
	if (now.getTime() > t02sec.getTime()) {
		$('.t0304_10').hide();
		$('.t0411_17').show();
	}
	var t02thr = new Date("2019/10/18 00:00");
	if (now.getTime() > t02thr.getTime()) {
		$('.t0411_17').hide();
		$('.t0518_24').show();
	}
	var t02fou = new Date("2019/10/25 00:00");
	if (now.getTime() > t02fou.getTime()) {
		$('.t0518_24').hide();
		$('.t0625_31').show();
	}
	var t02end = new Date("2019/10/31 23:59");
	if (now.getTime() > t02end.getTime()) {
		$('.t0625_31').hide();
	}

	var t03 = new Date("2019/11/01 00:00");
	if (now.getTime() > t03.getTime()) {
		$('.t0701_14').show();
	}
	var t03end = new Date("2019/11/14 23:59");
	if (now.getTime() > t03end.getTime()) {
		$('.t0701_14').hide();
	}
	var t03sec = new Date("2019/11/15 00:00");
	if (now.getTime() > t03sec.getTime()) {
		$('.t1115_28').show();
	}
	var t03secend = new Date("2019/11/28 23:59");
	if (now.getTime() > t03secend.getTime()) {
		$('.t1115_28').hide();
	}

	var t04 = new Date("2019/11/15 00:00");
	if (now.getTime() > t04.getTime()) {
		$('.t0815_28').show();
	}
	var t04end = new Date("2019/11/28 23:59");
	if (now.getTime() > t04end.getTime()) {
		$('.t0815_28').hide();
	}


	var t05 = new Date("2019/11/15 00:00");
	if (now.getTime() > t05.getTime()) {
		$('.t0915_21').show();
	}
	var t05sec = new Date("2019/11/22 00:00");
	if (now.getTime() > t05sec.getTime()) {
		$('.t0915_21').hide();
		$('.t1015_21').show();
	}
	var t05end = new Date("2019/11/28 23:59");
	if (now.getTime() > t05end.getTime()) {
		$('.t1015_21').hide();
	}


	var t06 = new Date("2019/11/01 00:00");
	if (now.getTime() > t06.getTime()) {
		$('.t1201_07').show();
	}
	var t06sec = new Date("2019/11/08 00:00");
	if (now.getTime() > t06sec.getTime()) {
		$('.t1201_07').hide();
		$('.t1308_14').show();
	}
	var t06end = new Date("2019/11/14 23:59");
	if (now.getTime() > t06end.getTime()) {
		$('.t1308_14').hide();
	}

});

