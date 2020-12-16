
$(function() {
	countDown();
});

function countDown() {
	var now = new Date();
	var bef02 = new Date("2020/10/01 23:59");
	if (now.getTime() > bef02.getTime()) {
		$(".h_be").show();
		$(".h_a").hide();
	}
	var aft = new Date("2021/01/01 00:00");
	if (now.getTime() > aft.getTime()) {
		$(".h_be").hide();
		$(".h_a").show();
	}


	var time01 = new Date("2021/01/01 15:00");
	if (now.getTime() > time01.getTime()) {
		$(".t01").text("さっそくみる");
		$(".t01").attr("href","https://abema.tv/video/title/90-980");
	}
	var time01_af = new Date("2021/01/10 23:00");
	if (now.getTime() > time01_af.getTime()) {
		$(".t01").text("さっそくみる");
		$(".t01").attr("href","https://abema.tv/video/title/90-980");
	}

	var time02 = new Date("2021/01/01 06:00");
	if (now.getTime() > time02.getTime()) {
		$(".t02").text("さっそくみる");
		$(".t02").attr("href","abema");
	}
	// var time02_af = new Date("2021/01/03 22:00");
	// if (now.getTime() > time02_af.getTime()) {
	// 	$(".t02").text("さっそくみる");
	// 	$(".t02").attr("href","abema");
	// }

	var time03 = new Date("2021/01/02 22:00");
	if (now.getTime() > time03.getTime()) {
		$(".t03").text("さっそくみる");
		$(".t03").attr("href","abema");
	}
	// var time03_af = new Date("2021/01/04 22:00");
	// if (now.getTime() > time03_af.getTime()) {
	// 	$(".t03").text("さっそくみる");
	// 	$(".t03").attr("href","abema");
	// }

	var time04 = new Date("2021/01/02 22:00");
	if (now.getTime() > time04.getTime()) {
		$(".t04").text("さっそくみる");
		$(".t04").attr("href","abema");
	}
	// var time04_af = new Date("2021/01/05 18:00");
	// if (now.getTime() > time04_af.getTime()) {
	// 	$(".t04").text("さっそくみる");
	// 	$(".t04").attr("href","abema");
	// }

	var time05 = new Date("2021/01/01 00:00");
	if (now.getTime() > time05.getTime()) {
		$(".t05").text("https://abema.tv/video/title/50-59");
		$(".t05").attr("href","abema");
	}
	var time05_af = new Date("2021/01/01 00:00");
	if (now.getTime() > time05_af.getTime()) {
		$(".t05").text("https://abema.tv/video/title/50-59");
		$(".t05").attr("href","abema");
	}
}



















