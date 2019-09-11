$(document).ready(function() {
	var now = new Date();
	var ch01 = new Date("2019/09/17 00:00");
	if (now.getTime() > ch01.getTime()) {
		$('.chi01').attr("href","https://abema.tv/video/title/90-1309");
	}
	var ch02 = new Date("2019/09/16 21:30");
	if (now.getTime() > ch02.getTime()) {
		$('.chi02').attr("href","https://abema.tv/video/title/464-5");
	}
	var ch03 = new Date("2019/09/15 18:00");
	if (now.getTime() > ch03.getTime()) {
		$('.chi03').attr("href","https://abema.tv/video/episode/170-12_s0_p1");
	}
	var ch04 = new Date("2019/09/23 20:00");
	if (now.getTime() > ch04.getTime()) {
		$('.chi04').attr("href","https://abema.tv/video/episode/188-34_s1_p1");
	}
	var ch05 = new Date("2019/09/14 21:30");
	if (now.getTime() > ch05.getTime()) {
		$('.chi05').attr("href","https://abema.tv/video/episode/221-57_s1_p3");
	}
	var ch06 = new Date("2019/09/21 18:00");
	if (now.getTime() > ch06.getTime()) {
		$('.chi06').attr("href","https://abema.tv/video/episode/188-32_s1_p1");
	}
	var ch07 = new Date("2019/09/17 00:00");
	if (now.getTime() > ch07.getTime()) {
		$('.chi07').text('今すぐ見る');
		$('.chi07').attr("href","https://abema.tv/video/title/90-1309");
	}
	var ch08 = new Date("2019/09/16 21:30");
	if (now.getTime() > ch08.getTime()) {
		$('.chi08').text('今すぐ見る');
		$('.chi08').attr("href","https://abema.tv/video/title/464-5");
	}
});
