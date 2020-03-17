$(document).ready(function() {
	var now = new Date();
	var tt00 = new Date("2019/05/25 00:00");
	if (now.getTime() > tt00.getTime()) {
		$('.nw1').hide();
		$('.nw2').hide();
		$('.nw3').hide();
		$('.nw4').hide();
		$('.nw5').hide();
		$('.nw6').hide();
		$('.nw7').hide();
		$('.nw8').hide();
		$('.nw9').hide();
		$('.nw10').hide();
	}
	var now1 = new Date("2020/03/01 08:30");
	if (now.getTime() > now1.getTime()) {
		$('.nw1').show();
	}
	var now1af = new Date("2020/03/01 22:00");
	if (now.getTime() > now1af.getTime()) {
		$('.nw1').hide();
	}
	var now2 = new Date("2020/03/03 09:30");
	if (now.getTime() > now2.getTime()) {
		$('.nw2').show();
	}
	var now2af = new Date("2020/03/04 02:00");
	if (now.getTime() > now2af.getTime()) {
		$('.nw2').hide();
	}
	var now3 = new Date("2020/03/04 09:50");
	if (now.getTime() > now3.getTime()) {
		$('.nw3').show();
	}
	var now3af = new Date("2020/03/04 22:00");
	if (now.getTime() > now3af.getTime()) {
		$('.nw3').hide();
	}

	var now4 = new Date("2020/03/06 09:50");
	if (now.getTime() > now4.getTime()) {
		$('.nw4').show();
	}
	var now4af = new Date("2020/03/06 23:59");
	if (now.getTime() > now4af.getTime()) {
		$('.nw4').hide();
	}

	var now5 = new Date("2020/03/09 09:30");
	if (now.getTime() > now5.getTime()) {
		$('.nw5').show();
	}
	var now5af = new Date("2020/03/09 22:00");
	if (now.getTime() > now5af.getTime()) {
		$('.nw5').hide();
	}

	var now6 = new Date("2020/03/12 09:30");
	if (now.getTime() > now6.getTime()) {
		$('.nw6').show();
	}
	var now6af = new Date("2020/03/12 23:59");
	if (now.getTime() > now6af.getTime()) {
		$('.nw6').hide();
	}

	var now7 = new Date("2020/03/12 09:50");
	if (now.getTime() > now7.getTime()) {
		$('.nw7').show();
	}
	var now7af = new Date("2020/03/12 22:00");
	if (now.getTime() > now7af.getTime()) {
		$('.nw7').hide();
	}

	var now8 = new Date("2020/03/16 09:30");
	if (now.getTime() > now8.getTime()) {
		$('.nw8').show();
	}
	var now8af = new Date("2020/03/16 24:00");
	if (now.getTime() > now8af.getTime()) {
		$('.nw8').hide();
	}

	var now9 = new Date("2020/03/17 08:30");
	if (now.getTime() > now9.getTime()) {
		$('.nw9').show();
	}
	var now9af = new Date("2020/03/17 22:00");
	if (now.getTime() > now9af.getTime()) {
		$('.nw9').hide();
	}

	var now10 = new Date("2020/03/20 09:30");
	if (now.getTime() > now10.getTime()) {
		$('.nw10').show();
	}
	var now10af = new Date("2020/03/20 24:00");
	if (now.getTime() > now10af.getTime()) {
		$('.nw10').hide();
	}
});




$(document).ready(function() {
	var now = new Date();
	var e01 = new Date("2020/03/1 08:30");
	if (now.getTime() > e01.getTime()) {
		// $('.e01').attr("href","https://abema.tv/video/title/26-92");
		// $('.e01').text("今すぐビデオでみる");
	}
	var e01ed = new Date("2020/03/1 08:30");
	if (now.getTime() > e01ed.getTime()) {
		// $('.e01').attr("href","javascript:void(0);");
		// $('.e01').text("配信終了しました");
	}
});