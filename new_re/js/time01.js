$(document).ready(function() {
	var now = new Date();

	var tt01 = new Date("2020/05/31 23:30");
	if (now.getTime() > tt01.getTime()) {
		$('#t01').attr("href","https://abema.tv/video/title/90-1394");
		$('#t01').text("ビデオでみる");
	}

	var tt02 = new Date("2020/05/31 19:00");
	if (now.getTime() > tt02.getTime()) {
		$('#t02').attr("href","https://abema.tv/video/title/90-1396");
		$('#t02').text("ビデオでみる");
	}

	var tt03 = new Date("2020/06/01 00:00");
	if (now.getTime() > tt03.getTime()) {
		$('#t03').attr("href","https://abema.tv/video/title/90-1396");
		$('#t03').text("ビデオでみる");
	}


	var tt04 = new Date("2020/06/01 23:30");
	if (now.getTime() > tt04.getTime()) {
		$('#t04').attr("href","https://abema.tv/video/title/90-1396");
		$('#t04').text("ビデオでみる");
	}

	var tt05 = new Date("2020/06/07 22:15");
	if (now.getTime() > tt05.getTime()) {
		$('#t05').attr("href","https://abema.tv/video/title/90-980");
		$('#t05').text("ビデオでみる");
	}


	var tt06 = new Date("2020/06/21 17:00");
	if (now.getTime() > tt06.getTime()) {
		$('#t06').attr("href","https://abema.tv/video/title/526-1");
		$('#t06').text("ビデオでみる");
		$('#t07').attr("href","https://abema.tv/video/title/526-1");
		$('#t07').text("ビデオでみる");
		$('#t08').attr("href","https://abema.tv/video/title/526-1");
		$('#t08').text("ビデオでみる");
	}
	// var tt07 = new Date("2020/06/21 17:00");
	// if (now.getTime() > tt07.getTime()) {

	// }
	// var tt08 = new Date("2020/06/21 17:00");
	// if (now.getTime() > tt08.getTime()) {

	// }
});

