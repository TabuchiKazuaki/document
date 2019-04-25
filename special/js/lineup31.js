$(document).ready(function() {
	var now = new Date();

	var ar01 = new Date("2019/05/10 01:20");
	if (now.getTime() > ar01.getTime()) {
		$('#r_01').text('ビデオを見る');
		$('#r_01').attr("href","https://abema.tv/video/title/88-79");
	}
	var ar02 = new Date("2019/05/08 01:20");
	if (now.getTime() > ar02.getTime()) {
		$('#r_02').text('ビデオを見る');
		$('#r_02').attr("href","https://abema.tv/video/title/88-81");
	}
	var ar03 = new Date("2019/05/09 01:20");
	if (now.getTime() > ar03.getTime()) {
		$('#r_03').text('ビデオを見る');
		$('#r_03').attr("href","https://abema.tv/video/title/88-80");
	}

	var ar04 = new Date("2019/05/07 01:20");
	if (now.getTime() > ar04.getTime()) {
		$('#r_04').text('ビデオを見る');
		$('#r_04').attr("href","https://abema.tv/video/title/88-78");
	}

	var ar05 = new Date("2019/05/12 00:00");
	if (now.getTime() > ar05.getTime()) {
		$('#r_05').text('ビデオを見る');
		$('#r_05').attr("href","https://abema.tv/video/title/90-1264");
	}
});
