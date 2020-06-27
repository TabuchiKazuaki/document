$(document).ready(function() {
	var now = new Date();
	var tt01 = new Date("2020/06/13 00:00");
	if (now.getTime() > tt01.getTime()) {
		$('#t01').attr("href","https://abema.tv/video/episode/26-96_s2_p10");
		$('#t01').text("ビデオでみる");
	}

	var tt02 = new Date("2020/06/15 23:00");
	if (now.getTime() > tt02.getTime()) {
		$('#t02').attr("href","https://abema.tv/video/title/175-4");
		$('#t02').text("ビデオでみる");
	}

	var tt03 = new Date("2020/06/21 17:00");
	if (now.getTime() > tt03.getTime()) {
		$('#t03').attr("href","https://abema.tv/video/title/526-1");
		$('#t03').text("ビデオでみる");
		$('#t04').attr("href","https://abema.tv/video/title/526-1");
		$('#t04').text("ビデオでみる");
		$('#t05').attr("href","https://abema.tv/video/title/526-1");
		$('#t05').text("ビデオでみる");
	}

	var tt06 = new Date("2020/06/20 00:00");
	if (now.getTime() > tt06.getTime()) {
		$('#t06').attr("href","https://abema.tv/video/episode/26-96_s2_p11");
		$('#t06').text("ビデオでみる");
	}

	var tt07 = new Date("2020/06/17 08:00");
	if (now.getTime() > tt07.getTime()) {
		$('#t07').attr("href","https://abema.tv/video/title/444-4");
		$('#t07').text("ビデオでみる");
	}
	var tt08 = new Date("2020/06/18 08:00");
	if (now.getTime() > tt08.getTime()) {
		$('#t08').attr("href","https://abema.tv/video/title/444-4");
		$('#t08').text("ビデオでみる");
	}
	var tt09 = new Date("2020/06/21 08:00");
	if (now.getTime() > tt09.getTime()) {
		$('#t09').attr("href","https://abema.tv/video/title/444-4");
		$('#t09').text("ビデオでみる");
	}
	var tt10 = new Date("2020/06/21 08:00");
	if (now.getTime() > tt10.getTime()) {
		$('#t10').attr("href","https://abema.tv/video/title/444-4");
		$('#t10').text("ビデオでみる");
	}

	var tt11 = new Date("2020/06/27 00:00");
	if (now.getTime() > tt11.getTime()) {
		$('#t11').attr("href","https://abema.tv/video/episode/26-96_s2_p12");
		$('#t11').text("ビデオでみる");
	}
	var tt12 = new Date("2020/06/25 08:00");
	if (now.getTime() > tt12.getTime()) {
		$('#t12').attr("href","https://abema.tv/video/title/444-4");
		$('#t12').text("ビデオでみる");
	}
	var tt13 = new Date("2020/06/25 08:00");
	if (now.getTime() > tt13.getTime()) {
		$('#t13').attr("href","https://abema.tv/video/title/444-4");
		$('#t13').text("ビデオでみる");
	}
});

