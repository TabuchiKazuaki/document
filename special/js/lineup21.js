$(document).ready(function() {
	var now = new Date();

	var sec01 = new Date("2019/04/28 22:00");
	if (now.getTime() > sec01.getTime()) {
		$('#f_01').text('ビデオを見る');
		$('#f_01').attr("href","https://abema.tv/video/title/90-493");
	}
	var sec02 = new Date("2019/05/01 00:30");
	if (now.getTime() > sec02.getTime()) {
		$('#f_02').text('ビデオを見る');
		$('#f_02').attr("href","https://abema.tv/video/title/90-980");
	}
	var sec03 = new Date("2019/05/01 17:00");
	if (now.getTime() > sec03.getTime()) {
		$('#f_03').text('ビデオを見る');
		$('#f_03').attr("href","https://abema.tv/video/title/90-1263");
	}

	var change01 = new Date("2019/04/29 23:30");
	if (now.getTime() > change01.getTime()) {
		$('#f_04').text('ビデオを見る');
		$('#f_04').attr("href","https://abema.tv/video/title/90-1266");
	}

	var change02 = new Date("2019/05/01 17:00");
	if (now.getTime() > change02.getTime()) {
		$('#f_05').text('ビデオを見る');
		$('#f_05').attr("href","https://abema.tv/video/title/203-5");
	}
	var change02 = new Date("2019/04/28 23:00");
	if (now.getTime() > change02.getTime()) {
		$('#f_05').text('ビデオを見る');
		$('#f_05').attr("href","https://abema.tv/video/title/90-1248");
	}
});
