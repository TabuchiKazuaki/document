$(document).ready(function() {
	var now = new Date();
	// ビデオ
	var sec00 = new Date("2019/04/19 00:00");
	if (now.getTime() > sec00.getTime()) {
		$('#section01').hide();
		$('#section01-01').hide();
		$('#section01-02').hide();
		$('#addcl').addClass("clist");
	}
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
});
