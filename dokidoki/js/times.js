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
		$('.tp09').hide();
		$('.tp10').hide();
		$('#t01').hide();
		$('#t02').hide();
		$('#t03').hide();
		$('#t04').hide();
		$('#t05').hide();
		$('#t06').hide();
		$('#t07').hide();
		$('#t08').hide();
		$('#t09').hide();
		$('#t10').hide();
	}

	var t01 = new Date("2020/02/04 09:40");
	if (now.getTime() > t01.getTime()) {
		$('#t01').show();
		$('#t01').text('ただいま配信中');
		$('#a01').text('今すぐみる');
	}
	var t01las3 = new Date("2020/02/09");
	if (now.getTime() > t01las3.getTime()) {
		$('#t01').text('配信終了まであと3日');
	}
	var t01las2 = new Date("2020/02/10");
	if (now.getTime() > t01las2.getTime()) {
		$('#t01').text('まもなく配信終了');
	}
	var t01las0 = new Date("2020/02/11 00:00");
	if (now.getTime() > t01las0.getTime()) {
		$('.tp01').show();
		$('#t01').hide();
		$('.tl01').hide();
	}


	var t02 = new Date("2020/02/06 09:50");
	if (now.getTime() > t02.getTime()) {
		$('#t02').show();
		$('#t02').text('ただいま配信中');
		$('#a02').text('今すぐみる');
	}
	var t02las3 = new Date("2020/02/11");
	if (now.getTime() > t02las3.getTime()) {
		$('#t02').text('配信終了まであと3日');
	}
	var t02las2 = new Date("2020/02/12");
	if (now.getTime() > t02las2.getTime()) {
		$('#t02').text('まもなく配信終了');
	}
	var t02las0 = new Date("2020/02/13 00:00");
	if (now.getTime() > t02las0.getTime()) {
		$('.tp02').show();
		$('#t02').hide();
		$('.tl02').hide();
	}


	var t03 = new Date("2020/02/11 09:50");
	if (now.getTime() > t03.getTime()) {
		$('#t03').show();
		$('#t03').text('ただいま配信中');
		$('#a03').text('今すぐみる');
	}
	var t03las3 = new Date("2020/03/09");
	if (now.getTime() > t03las3.getTime()) {
		$('#t03').text('配信終了まであと3日');
	}
	var t03las2 = new Date("2020/03/10");
	if (now.getTime() > t03las2.getTime()) {
		$('#t03').text('まもなく配信終了');
	}
	var t03las0 = new Date("2020/03/11 00:00");
	if (now.getTime() > t03las0.getTime()) {
		$('.tp03').show();
		$('#t03').hide();
		$('.tl03').hide();
	}


	var t04 = new Date("2020/02/13 14:50");
	if (now.getTime() > t04.getTime()) {
		$('#t04').show();
		$('#t04').text('ただいま配信中');
		$('#a04').text('今すぐみる');
	}
	var t04las3 = new Date("2020/03/11");
	if (now.getTime() > t04las3.getTime()) {
		$('#t04').text('配信終了まであと3日');
	}
	var t04las2 = new Date("2020/03/12");
	if (now.getTime() > t04las2.getTime()) {
		$('#t04').text('まもなく配信終了');
	}
	var t04las0 = new Date("2020/03/13");
	if (now.getTime() > t04las0.getTime()) {
		$('.tp04').show();
		$('#t04').hide();
		$('.tl04').hide();
	}


	var t05 = new Date("2020/02/13 14:50");
	if (now.getTime() > t05.getTime()) {
		$('#t05').show();
		$('#t05').text('ただいま配信中');
		$('#a05').text('今すぐみる');
	}
	var t05las3 = new Date("2020/03/14");
	if (now.getTime() > t05las3.getTime()) {
		$('#t05').text('配信終了まであと3日');
	}
	var t05las2 = new Date("2020/03/15");
	if (now.getTime() > t05las2.getTime()) {
		$('#t05').text('まもなく配信終了');
	}
	var t05las0 = new Date("2020/03/16 00:00");
	if (now.getTime() > t05las0.getTime()) {
		$('.tp05').show();
		$('#t05').hide();
		$('.tl05').hide();
	}


	var t06 = new Date("2020/02/18 09:30");
	if (now.getTime() > t06.getTime()) {
		$('#t06').show();
		$('#t06').text('ただいま配信中');
		$('#a06').text('今すぐみる');
	}
	var t06las3 = new Date("2020/03/16");
	if (now.getTime() > t06las3.getTime()) {
		$('#t06').text('配信終了まであと3日');
	}
	var t06las2 = new Date("2020/03/17");
	if (now.getTime() > t06las2.getTime()) {
		$('#t06').text('まもなく配信終了');
	}
	var t06las0 = new Date("2020/03/18 00:00");
	if (now.getTime() > t06las0.getTime()) {
		$('.tp06').show();
		$('#t06').hide();
		$('.tl06').hide();
	}


	var t07 = new Date("2020/02/20 09:50");
	if (now.getTime() > t07.getTime()) {
		$('#t07').show();
		$('#t07').text('ただいま配信中');
		$('#a07').text('今すぐみる');
	}
	var t07las3 = new Date("2020/03/18");
	if (now.getTime() > t07las3.getTime()) {
		$('#t07').text('配信終了まであと3日');
	}
	var t07las2 = new Date("2020/03/19");
	if (now.getTime() > t07las2.getTime()) {
		$('#t07').text('まもなく配信終了');
	}
	var t07las0 = new Date("2020/03/20 00:00");
	if (now.getTime() > t07las0.getTime()) {
		$('.tp07').show();
	$('#t07').hide();
		$('.tl07').hide();
	}

	var t08 = new Date("2020/02/22 09:50");
	if (now.getTime() > t08.getTime()) {
	$('#t08').show();
		$('#t08').text('ただいま配信中');
		$('#a08').text('今すぐみる');
	}
	var t08las3 = new Date("2020/03/20");
	if (now.getTime() > t08las3.getTime()) {
		$('#t08').text('配信終了まであと3日');
	}
	var t08las2 = new Date("2020/03/21");
	if (now.getTime() > t08las2.getTime()) {
		$('#t08').text('まもなく配信終了');
	}
	var t08las0 = new Date("2020/03/22 00:00");
	if (now.getTime() > t08las0.getTime()) {
		$('.tp08').show();
	$('#t08').hide();
		$('.tl08').hide();
	}

	var t09 = new Date("2020/02/24 14:50");
	if (now.getTime() > t09.getTime()) {
	$('#t09').show();
		$('#t09').text('ただいま配信中');
		$('#a09').text('今すぐみる');
	}
	var t09las3 = new Date("2020/03/22");
	if (now.getTime() > t09las3.getTime()) {
		$('#t09').text('配信終了まであと3日');
	}
	var t09las2 = new Date("2020/03/23");
	if (now.getTime() > t09las2.getTime()) {
		$('#t09').text('まもなく配信終了');
	}
	var t09las0 = new Date("2020/03/24 00:00");
	if (now.getTime() > t09las0.getTime()) {
		$('.tp09').show();
	$('#t09').hide();
		$('.tl09').hide();
	}


	var t10 = new Date("2020/02/25 9:50");
	if (now.getTime() > t10.getTime()) {
	$('#t10').show();
		$('#t10').text('ただいま配信中');
		$('#a10').text('今すぐみる');
	}
	var t10las3 = new Date("2020/03/23");
	if (now.getTime() > t10las3.getTime()) {
		$('#t10').text('配信終了まであと3日');
	}
	var t10las2 = new Date("2020/03/24");
	if (now.getTime() > t10las2.getTime()) {
		$('#t10').text('まもなく配信終了');
	}
	var t10las0 = new Date("2020/03/25 00:00");
	if (now.getTime() > t10las0.getTime()) {
		$('.tp10').show();
	$('#t10').hide();
		$('.tl10').hide();
	}
});
