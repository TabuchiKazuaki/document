$(document).ready(function() {
	var now = new Date();
	var timer01 = new Date("2019/09/25 12:00");
	if (now.getTime() > timer01.getTime()) {
		$('#date01').show();
		$('.ctr').addClass('ctr_add');
	}
	var timer01end = new Date("2019/10/25 12:00");
	if (now.getTime() > timer01end.getTime()) {
		$('#date01').hide();
	}
	// var timer02 = new Date("2019/09/24 12:00");
	// if (now.getTime() > timer02.getTime()) {
	// 	$('#date02').attr("href","https://abema.tv/video/title/90-1300?s=90-1300_s200");
	// 	$('#date02').text('今すぐみる');
	// }
	// var timer03 = new Date("2019/09/25 12:00");
	// if (now.getTime() > timer03.getTime()) {
	// 	// $('#date03').attr("href","https://abema.tv/video/title/90-493");
	// 	$('#date03').text('今すぐみる');
	// }
	var timer04 = new Date("2019/09/28 01:20");
	if (now.getTime() > timer04.getTime()) {
		$('#date04').attr("href","https://abema.tv/video/episode/90-979_s99_p1");
		$('#date04').text('地上波SP版を今すぐみる');
	}
	var timer04end = new Date("2020/09/28 01:19");
	if (now.getTime() > timer04end.getTime()) {
		$('#date01').hide();
	}
});


