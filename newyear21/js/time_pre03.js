
$(function() {
	countDown();
});

function countDown() {
	var now = new Date();
	var bef02 = new Date("2020/10/01 23:59");
	if (now.getTime() > bef02.getTime()) {
		$(".h_be").show();
		$(".h_a").hide();
		$(".bt01be").show();
		$(".bt01af").hide();
		$(".bt02be").show();
		$(".bt02af").hide();
	}
	var aft = new Date("2021/01/01 00:00");
	if (now.getTime() > aft.getTime()) {
		$(".h_be").hide();
		$(".h_a").show();
	}


	var time01 = new Date("2021/01/05 00:00");
	if (now.getTime() > time01.getTime()) {
		$(".bt01be").hide();
		$(".bt01af").show();
	}

	var time02 = new Date("2021/01/01 00:00");
	if (now.getTime() > time02.getTime()) {
		$(".bt02be").hide();
		$(".bt02af").show();
	}

	var time03 = new Date("2021/01/02 22:00");
	if (now.getTime() > time03.getTime()) {
		$(".t03").text("さっそくみる");
		$(".t03").attr("href","abema");
	}

	var time04 = new Date("2021/01/01 00:00");
	if (now.getTime() > time04.getTime()) {
		$(".t04").text("さっそくみる");
		$(".t04").attr("href","https://abema.tv/video/title/182-497");
	}

	var time05 = new Date("2021/01/01 00:00");
	if (now.getTime() > time05.getTime()) {
		$(".t05").text("https://abema.tv/video/title/50-59");
		$(".t05").attr("href","abema");
		$(".bt01af").show();
		$(".bt01be").hide();
	}
}



















