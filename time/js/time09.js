$(document).ready(function() {
	var now = new Date();
	var timer01 = new Date("2019/09/23 12:00");
	if (now.getTime() > timer01.getTime()) {
		// $('#date01').attr("href","https://abema.tv/video/title/90-1300?s=90-1300_s200");
		$('#date01').text('今すぐみる');
	}
	var timer02 = new Date("2019/09/24 12:00");
	if (now.getTime() > timer02.getTime()) {
		$('#date02').attr("href","https://abema.tv/video/title/90-1300?s=90-1300_s200");
		$('#date02').text('今すぐみる');
	}
	var timer03 = new Date("2019/09/25 12:00");
	if (now.getTime() > timer03.getTime()) {
		// $('#date03').attr("href","https://abema.tv/video/title/90-493");
		$('#date03').text('今すぐみる');
	}
	var timer04 = new Date("2019/09/27 12:00");
	if (now.getTime() > timer04.getTime()) {
		// $('#date04').attr("href","https://abema.tv/video/title/90-493");
		$('#date04').text('今すぐみる');
	}
});


