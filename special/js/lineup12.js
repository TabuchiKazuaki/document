$(document).ready(function() {
	var now = new Date();
	// ビデオ
	var change03 = new Date("2019/04/01 22:00");
	if (now.getTime() > change03.getTime()) {
		$('#c_03').text('ビデオを見る');
		$('#c_03').attr("href","https://abema.tv/video/title/115-48");
	}

	var change04 = new Date("2019/04/07 04:00");
	if (now.getTime() > change04.getTime()) {
		$('#c_04').text('ビデオを見る');
		$('#c_04').attr("href","https://abema.tv/video/title/25-6");
	}

	var change05 = new Date("2019/04/07 00:30");
	if (now.getTime() > change05.getTime()) {
		$('#c_05').text('ビデオを見る');
		$('#c_05').attr("href","https://abema.tv/video/title/19-32");
	}

	var change06 = new Date("2019/04/07 00:00");
	if (now.getTime() > change06.getTime()) {
		$('#c_06').text('ビデオを見る');
		$('#c_06').attr("href","https://abema.tv/video/title/26-75");
	}

	var change07 = new Date("2019/04/05 22:30");
	if (now.getTime() > change07.getTime()) {
		$('#c_07').text('ビデオを見る');
		$('#c_07').attr("href","https://abema.tv/video/title/90-1236");
	}

	var change08 = new Date("2019/04/06 23:00");
	if (now.getTime() > change08.getTime()) {
		$('#c_08').text('ビデオを見る');
		$('#c_08').attr("href","https://abema.tv/video/title/90-1252");
	}

});
