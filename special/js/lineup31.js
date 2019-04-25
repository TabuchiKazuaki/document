$(document).ready(function() {
	var now = new Date();

	var sec01 = new Date("2019/05/10 01:20");
	if (now.getTime() > sec01.getTime()) {
		$('#r_01').text('ビデオを見る');
		$('#r_01').attr("href","https://abema.tv/video/title/88-79");
	}
	var sec02 = new Date("2019/05/08 01:20");
	if (now.getTime() > sec02.getTime()) {
		$('#r_02').text('ビデオを見る');
		$('#r_02').attr("href","https://abema.tv/video/title/88-81");
	}
	var sec03 = new Date("2019/05/09 01:20");
	if (now.getTime() > sec03.getTime()) {
		$('#r_03').text('ビデオを見る');
		$('#r_03').attr("href","https://abema.tv/video/title/88-80");
	}

	var sec04 = new Date("2019/05/07 01:20");
	if (now.getTime() > sec04.getTime()) {
		$('#r_04').text('ビデオを見る');
		$('#r_04').attr("href","https://abema.tv/video/title/88-78");
	}

	var sec05 = new Date("2019/05/12 00:00");
	if (now.getTime() > sec05.getTime()) {
		$('#r_05').text('ビデオを見る');
		$('#r_05').attr("href","https://abema.tv/video/title/90-1264");
	}
});
