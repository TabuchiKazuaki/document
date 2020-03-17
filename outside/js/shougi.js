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
	var bbf = new Date("2019/04/01 00:00");
	if (now.getTime() > bbf.getTime()) {
		$('.cn1').hide();
		$('.cn2').hide();
		$('.cn3').hide();
		$('.cn4').hide();
		$('.cn5').hide();
		$('.cn6').hide();
		$('.cn7').hide();
		$('.cn8').hide();
		$('.cn9').hide();
		$('.cn10').hide();
	}
	var e01 = new Date("2020/04/01 00:00");
	if (now.getTime() > e01.getTime()) {
		$('.cb1').hide();
		$('.cn1').show();
	}
	var e02 = new Date("2020/03/10 00:00");
	if (now.getTime() > e02.getTime()) {
		$('.cb2').hide();
		$('.cn2').show();
	}

	var e03 = new Date("2020/04/04 00:00");
	if (now.getTime() > e03.getTime()) {
		$('.cb3').hide();
		$('.cn3').show();
	}

	var e04 = new Date("2020/04/06 00:00");
	if (now.getTime() > e04.getTime()) {
		$('.cb4').hide();
		$('.cn4').show();
	}

	var e05 = new Date("2020/04/09 00:00");
	if (now.getTime() > e05.getTime()) {
		$('.cb5').hide();
		$('.cn5').show();
	}

	var e06 = new Date("2020/04/12 00:00");
	if (now.getTime() > e06.getTime()) {
		$('.cb6').hide();
		$('.cn6').show();
	}

	var e07 = new Date("2020/04/12 00:00");
	if (now.getTime() > e07.getTime()) {
		$('.cb7').hide();
		$('.cn7').show();
	}
	var e08 = new Date("2020/04/16 00:00");
	if (now.getTime() > e08.getTime()) {
		$('.cb8').hide();
		$('.cn8').show();
	}

	var e09 = new Date("2020/04/17 00:00");
	if (now.getTime() > e09.getTime()) {
		$('.cb9').hide();
		$('.cn9').show();
	}
	var e10 = new Date("2020/04/17 00:00");
	if (now.getTime() > e10.getTime()) {
		$('.cb10').hide();
		$('.cn10').show();
	}
});








$(document).ready(function() {
	var now = new Date();
	var b01 = new Date("2020/03/1 08:30");
	if (now.getTime() > b01.getTime()) {
		$('.b01').text('今すぐみる');
	}
	var b02 = new Date("2020/03/3 09:30");
	if (now.getTime() > b02.getTime()) {
		$('.b02').text('今すぐみる');
	}

	var b03 = new Date("2020/03/4 09:50");
	if (now.getTime() > b03.getTime()) {
		$('.b03').text('今すぐみる');
	}

	var b04 = new Date("2020/03/6 09:50");
	if (now.getTime() > b04.getTime()) {
		$('.b04').text('今すぐみる');
	}

	var b05 = new Date("2020/03/9 09:30");
	if (now.getTime() > b05.getTime()) {
		$('.b05').text('今すぐみる');
	}

	var b06 = new Date("2020/03/12 09:30");
	if (now.getTime() > b06.getTime()) {
		$('.b06').text('今すぐみる');
	}

	var b07 = new Date("2020/03/12 09:50");
	if (now.getTime() > b07.getTime()) {
		$('.b07').text('今すぐみる');
	}
	var b08 = new Date("2020/03/16 09:50");
	if (now.getTime() > b08.getTime()) {
		$('.b08').text('今すぐみる');
	}

	var b09 = new Date("2020/03/17 08:30");
	if (now.getTime() > b09.getTime()) {
		$('.b09').text('今すぐみる');
	}
	var b10 = new Date("2020/03/20 09:30");
	if (now.getTime() > b10.getTime()) {
		$('.b10').text('今すぐみる');
	}
});