$(document).ready(function() {
	var now = new Date();

	var def = new Date("2019/01/04");
	if (now.getTime() > def.getTime()) {
		$('.tp01').hide();
		$('.tp02').hide();
		$('.tp03').hide();
		$('.tp04').hide();
		$('.tp05').hide();
		$('.tp06').hide();
		$('.tp07').hide();
		$('.tp08').hide();
	}

	var t01 = new Date("2020/02/04 09:40");
	if (now.getTime() > t01.getTime()) {
		$('#t01').text('ただいま配信中');
	}
	var t01end = new Date("2020/02/04 23:00");
	if (now.getTime() > t01end.getTime()) {
		$('#t01').text('番組ビデオ配信中');
	}
	var t01las3 = new Date("2020/02/09");
	if (now.getTime() > t01las3.getTime()) {
		$('#t01').text('配信終了まであと3日');
	}
	var t01las2 = new Date("2020/02/10");
	if (now.getTime() > t01las3.getTime()) {
		$('#t01').text('まもなく配信終了');
	}
	var t01las0 = new Date("2020/02/11 02:20");
	if (now.getTime() > t01las0.getTime()) {
		$('.tp01').show();
		$('.tl01').hide();
	}


	var t02 = new Date("2020/02/06 09:50");
	if (now.getTime() > t02.getTime()) {
		$('#t02').text('ただいま配信中');
	}
	var t02end = new Date("2020/02/07 02:00");
	if (now.getTime() > t02end.getTime()) {
		$('#t02').text('番組ビデオ配信中');
	}
	var t02las3 = new Date("2020/02/11");
	if (now.getTime() > t02las3.getTime()) {
		$('#t02').text('配信終了まであと3日');
	}
	var t02las2 = new Date("2020/02/12");
	if (now.getTime() > t02las3.getTime()) {
		$('#t02').text('まもなく配信終了');
	}
	var t02las0 = new Date("2020/02/13 02:20");
	if (now.getTime() > t02las0.getTime()) {
		$('.tp02').show();
		$('.tl02').hide();
	}


	var t03 = new Date("2020/02/11 09:50");
	if (now.getTime() > t03.getTime()) {
		$('#t03').text('ただいま配信中');
	}
	var t03end = new Date("2020/02/11 20:00");
	if (now.getTime() > t03end.getTime()) {
		$('#t03').text('番組ビデオ配信中');
	}
	var t03las3 = new Date("2020/02/15");
	if (now.getTime() > t03las3.getTime()) {
		$('#t03').text('配信終了まであと3日');
	}
	var t03las2 = new Date("2020/02/16");
	if (now.getTime() > t03las3.getTime()) {
		$('#t03').text('まもなく配信終了');
	}
	var t03las0 = new Date("2020/02/17 20:00");
	if (now.getTime() > t03las0.getTime()) {
		$('.tp03').show();
		$('.tl03').hide();
	}


	var t04 = new Date("2020/02/13 14:50");
	if (now.getTime() > t04.getTime()) {
		$('#t04').text('ただいま配信中');
	}
	var t04end = new Date("2020/02/13 23:00");
	if (now.getTime() > t04end.getTime()) {
		$('#t04').text('番組ビデオ配信中');
	}
	var t04las3 = new Date("2020/02/17");
	if (now.getTime() > t04las3.getTime()) {
		$('#t04').text('配信終了まであと3日');
	}
	var t04las2 = new Date("2020/02/18");
	if (now.getTime() > t04las3.getTime()) {
		$('#t04').text('まもなく配信終了');
	}
	var t04las0 = new Date("2020/02/19 23:00");
	if (now.getTime() > t04las0.getTime()) {
		$('.tp04').show();
		$('.tl04').hide();
	}


	var t05 = new Date("2020/02/13 14:50");
	if (now.getTime() > t05.getTime()) {
		$('#t05').text('ただいま配信中');
	}
	var t05end = new Date("2020/02/13 23:00");
	if (now.getTime() > t05end.getTime()) {
		$('#t05').text('番組ビデオ配信中');
	}
	var t05las3 = new Date("2020/02/17");
	if (now.getTime() > t05las3.getTime()) {
		$('#t05').text('配信終了まであと3日');
	}
	var t05las2 = new Date("2020/02/18");
	if (now.getTime() > t05las3.getTime()) {
		$('#t05').text('まもなく配信終了');
	}
	var t05las0 = new Date("2020/02/19 23:00");
	if (now.getTime() > t05las0.getTime()) {
		$('.tp05').show();
		$('.tl05').hide();
	}


	var t06 = new Date("2020/02/16 08:30");
	if (now.getTime() > t06.getTime()) {
		$('#t06').text('ただいま配信中');
	}
	var t06end = new Date("2020/02/16 22:00");
	if (now.getTime() > t06end.getTime()) {
		$('#t06').text('番組ビデオ配信中');
	}
	var t06las3 = new Date("2020/02/20");
	if (now.getTime() > t06las3.getTime()) {
		$('#t06').text('配信終了まであと3日');
	}
	var t06las2 = new Date("2020/02/21");
	if (now.getTime() > t06las3.getTime()) {
		$('#t06').text('まもなく配信終了');
	}
	var t06las0 = new Date("2020/02/22 23:00");
	if (now.getTime() > t06las0.getTime()) {
		$('.tp06').show();
		$('.tl06').hide();
	}


	// var t07 = new Date("2020/02/24 14:50");
	// if (now.getTime() > t07.getTime()) {
	// 	$('#t07').text('ただいま配信中');
	// }
	// var t07end = new Date("2020/02/24 23:00");
	// if (now.getTime() > t07end.getTime()) {
	// 	$('#t07').text('番組ビデオ配信中');
	// }
	// var t07las3 = new Date("2020/02/28");
	// if (now.getTime() > t07las3.getTime()) {
	// 	$('#t07').text('配信終了まであと3日');
	// }
	// var t07las2 = new Date("2020/02/29");
	// if (now.getTime() > t07las3.getTime()) {
	// 	$('#t07').text('まもなく配信終了');
	// }
	// var t07las0 = new Date("2020/03/01 23:00");
	// if (now.getTime() > t07las0.getTime()) {
	// 	$('.tp07').show();
	// 	$('.tl07').hide();
	// }

	// var t08 = new Date("2020/02/25 09:30");
	// if (now.getTime() > t08.getTime()) {
	// 	$('#t08').text('ただいま配信中');
	// }
	// var t08end = new Date("2020/02/25 20:00");
	// if (now.getTime() > t08end.getTime()) {
	// 	$('#t08').text('番組ビデオ配信中');
	// }
	// var t08las3 = new Date("2020/02/29");
	// if (now.getTime() > t08las3.getTime()) {
	// 	$('#t08').text('配信終了まであと3日');
	// }
	// var t08las2 = new Date("2020/03/01");
	// if (now.getTime() > t08las3.getTime()) {
	// 	$('#t08').text('まもなく配信終了');
	// }
	// var t08las0 = new Date("2020/03/02 20:00");
	// if (now.getTime() > t08las0.getTime()) {
	// 	$('.tp08').show();
	// 	$('.tl08').hide();
	// }
});
