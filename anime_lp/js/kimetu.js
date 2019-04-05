$(document).ready(function() {
	var now = new Date();

	var tt01 = new Date("2019/04/07 00:00");
	if (now.getTime() > tt01.getTime()) {
		$('#t01').attr("href","https://abema.tv/video/title/26-75");
		$('#t01').text("視聴する")
	}
});
