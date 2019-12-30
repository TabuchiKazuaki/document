
$(document).ready(function() {
	var now = new Date();
	var banner = new Date("2019/01/01 00:00");
	if (now.getTime() > banner.getTime()) {
		$('.cl01').show();
		$('.cl02').hide();
	}
	var banneraf = new Date("2020/01/01 00:00");
	if (now.getTime() > banneraf.getTime()) {
		$('.cl01').hide();
		$('.cl02').show();
	}
});



$(document).ready(function() {
	var now = new Date();

	var defdaily = new Date("2019/12/10 00:00");
	if (now.getTime() > defdaily.getTime()) {
		$('.d_check').hide();
		$('.d_wrap').hide();
		$('#d28').show();
		$('#d29').hide();
		$('#d30').hide();
		$('#d31').hide();
		$('#d01').hide();
		$('#d02').hide();
		$('#d03').hide();
		$('#d04').hide();
		$('#d05').hide();
	}

	var daily28 = new Date("2019/12/28 00:00");
	if (now.getTime() > daily28.getTime()) {
		$('.d_check').show();
		$('.d_wrap').show();
		$('#d28').show();
		$('.fl_time').hide();

	}

	var daily29 = new Date("2019/12/29 00:00");
	if (now.getTime() > daily29.getTime()) {
		$('#d28').hide();
		$('#d29').show();
	}
	var daily30 = new Date("2019/12/30 00:00");
	if (now.getTime() > daily30.getTime()) {
		$('#d29').hide();
		$('#d30').show();
	}
	var daily31 = new Date("2019/12/31 00:00");
	if (now.getTime() > daily31.getTime()) {
		$('#d30').hide();
		$('#d31').show();
	}
	var daily01 = new Date("2020/01/01 00:00");
	if (now.getTime() > daily01.getTime()) {
		$('#d31').hide();
		$('#d01').show();
	}
	var daily02 = new Date("2020/01/02 00:00");
	if (now.getTime() > daily02.getTime()) {
		$('#d01').hide();
		$('#d02').show();
	}
	var daily03 = new Date("2020/01/03 00:00");
	if (now.getTime() > daily03.getTime()) {
		$('#d02').hide();
		$('#d03').show();
	}
	var daily04 = new Date("2020/01/04 00:00");
	if (now.getTime() > daily04.getTime()) {
		$('#d03').hide();
		$('#d04').show();
	}
	var daily05 = new Date("2020/01/05 00:00");
	if (now.getTime() > daily05.getTime()) {
		$('#d04').hide();
		$('#d05').show();
	}


	//abemanojikan
	var bef = new Date("2019/01/01 00:00");
	if (now.getTime() > bef.getTime()) {
		$('.t01').hide();
		$('.t02').hide();
		$('.t03').hide();
	}
	var time01 = new Date("2020/01/01 00:00");
	if (now.getTime() > time01.getTime()) {
		$('.t01').show();
	}
	var time02 = new Date("2020/01/02 00:00");
	if (now.getTime() > time02.getTime()) {
		$('.t02').show();
	}
	var time03 = new Date("2020/01/03 00:00");
	if (now.getTime() > time03.getTime()) {
		$('.t03').show();
	}
	var time04 = new Date("2020/01/04 00:00");
	if (now.getTime() > time04.getTime()) {
		$('.t03').hide();
	}


	var anchor01 = new Date("2020/01/01 02:25");
	if (now.getTime() > anchor01.getTime()) {
		$('#a01').text('今すぐみる');
		$('#a01').attr("href", "https://abema.tv/video/episode/90-1346_s1_p1");
	}
	var anchor02 = new Date("2020/01/01 04:25");
	if (now.getTime() > anchor02.getTime()) {
		$('#a02').text('今すぐみる');
		$('#a02').attr("href", "https://abema.tv/video/episode/90-1345_s1_p1");
	}
	var anchor03 = new Date("2020/01/02 03:55");
	if (now.getTime() > anchor03.getTime()) {
		$('#a03').text('今すぐみる');
		$('#a03').attr("href", "https://abema.tv/video/title/137-64");
	}
	var anchor04 = new Date("2020/01/03 04:30");
	if (now.getTime() > anchor04.getTime()) {
		$('#a04').text('今すぐみる');
		$('#a04').attr("href", "https://abema.tv/video/episode/90-1340_s1_p1");
	}

});