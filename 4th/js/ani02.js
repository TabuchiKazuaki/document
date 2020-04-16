$(document).ready(function() {
	var now = new Date();

	var time01 = new Date("2020/04/21 00:00");
	if (now.getTime() > time01.getTime()) {
		$('.a01').attr("href","https://abema.tv/video/title/218-174");
		$('.a01').text("今すぐみる");
	}
});