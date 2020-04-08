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
		$('.a01').attr("href","https://abema.tv/video/title/90-1005");

	}
	var time01af = new Date("2020/04/19 00:00");
	if (now.getTime() > time01af.getTime()) {
		$('.t01').hide();
		$('.a01').attr("href","https://abema.tv/video/episode/90-1005_s1_p5");
	}

	var time02 = new Date("2020/04/15 00:00");
	if (now.getTime() > time02.getTime()) {
		$('.t02').show();
		$('.a02').attr("href","https://abema.tv/video/title/90-1182");
	}
	var time02af = new Date("2020/04/16 00:00");
	if (now.getTime() > time02af.getTime()) {
		$('.t02').hide();
		$('.a02').attr("href","https://abema.tv/video/episode/90-1182_s1_p5");
	}

	var time03 = new Date("2020/04/17 00:00");
	if (now.getTime() > time03.getTime()) {
		$('.t03').show();
		$('.a03').attr("href","https://abema.tv/video/title/90-1264");
	}
	var time03af = new Date("2020/04/18 00:00");
	if (now.getTime() > time03af.getTime()) {
		$('.t03').hide();
		$('.a03').attr("href","https://abema.tv/video/episode/90-1264_s1_p11");
	}

	var time04 = new Date("2020/04/16 00:00");
	if (now.getTime() > time04.getTime()) {
		$('.t04').show();
		$('.a04').attr("href","https://abema.tv/video/title/90-1300");
	}
	var time04af = new Date("2020/04/17 00:00");
	if (now.getTime() > time04af.getTime()) {
		$('.t04').hide();
		$('.a04').attr("href","https://abema.tv/video/episode/90-1300_s1_p11");
	}

	var time05 = new Date("2020/04/19 00:00");
	if (now.getTime() > time05.getTime()) {
		$('.t05').show();
		$('.a05').attr("href","https://abema.tv/video/title/90-1354");
	}
	var time05af = new Date("2020/04/20 00:00");
	if (now.getTime() > time05af.getTime()) {
		$('.t05').hide();
		$('.a05').attr("href","https://abema.tv/video/episode/90-1354_s5_p9");
	}
});