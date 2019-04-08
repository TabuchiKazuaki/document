$(document).ready(function() {
	var now = new Date();
	// ビデオ
	var sec01 = new Date("2019/04/11 16:34");
	if (now.getTime() > sec01.getTime()) {
		$('#se_01').text('ビデオを見る');
		$('#se_01').attr("href","https://abema.tv/video/title/38-256");
	}
	var sec02 = new Date("2019/04/22 00:00");
	if (now.getTime() > sec02.getTime()) {
		$('#se_02').text('ビデオを見る');
		$('#se_02').attr("href","https://abema.tv/video/title/26-11");
	}
	var sec03 = new Date("2019/04/14 03:50");
	if (now.getTime() > sec03.getTime()) {
		$('#se_03').text('ビデオを見る');
		$('#se_03').attr("href","https://abema.tv/video/title/25-88");
	}


	var change01 = new Date("2019/04/08 00:15");
	if (now.getTime() > change01.getTime()) {
		$('#c_01').text('ビデオを見る');
		$('#c_01').attr("href","https://abema.tv/video/title/90-980");
	}

	var change02 = new Date("2019/04/11 05:00");
	if (now.getTime() > change02.getTime()) {
		$('#c_02').text('ビデオを見る');
		$('#c_02').attr("href","https://abema.tv/video/title/90-1250");
	}

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
