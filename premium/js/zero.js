$(document).ready(function() {
	var now = new Date();
	var tt00 = new Date("2019/05/25 00:00");
	if (now.getTime() > tt00.getTime()) {
		$('#d_sl').hide();
		$('#date').show();
	}
	var tt01 = new Date("2019/05/25 00:00");
	if (now.getTime() > tt01.getTime()) {
		$('#h_01').show();
		$('#h_02').hide();
		$('#h_03').hide();
		$('#h_04').hide();
		$('#h_05').hide();
		$('#h_06').hide();
		$('#h_07').hide();
		$('#h_08').hide();
	}
	var tt02 = new Date("2019/05/26 00:00");
	if (now.getTime() > tt02.getTime()) {
		$('#h_01').hide();
		$('#h_02').show();
		$('#h_03').hide();
		$('#h_04').hide();
		$('#h_05').hide();
		$('#h_06').hide();
		$('#h_07').hide();
		$('#h_08').hide();
	}
	var tt03 = new Date("2019/05/27 00:00");
	if (now.getTime() > tt03.getTime()) {
		$('#h_01').hide();
		$('#h_02').hide();
		$('#h_03').show();
		$('#h_04').hide();
		$('#h_05').hide();
		$('#h_06').hide();
		$('#h_07').hide();
		$('#h_08').hide();
	}
	var tt04 = new Date("2019/05/28 00:00");
	if (now.getTime() > tt04.getTime()) {
		$('#h_01').hide();
		$('#h_02').hide();
		$('#h_03').hide();
		$('#h_04').show();
		$('#h_05').hide();
		$('#h_06').hide();
		$('#h_07').hide();
		$('#h_08').hide();
	}
	var tt05 = new Date("2019/05/29 00:00");
	if (now.getTime() > tt05.getTime()) {
		$('#h_01').hide();
		$('#h_02').hide();
		$('#h_03').hide();
		$('#h_04').hide();
		$('#h_05').show();
		$('#h_06').hide();
		$('#h_07').hide();
		$('#h_08').hide();
	}
	var tt06 = new Date("2019/05/30 00:00");
	if (now.getTime() > tt06.getTime()) {
		$('#h_01').hide();
		$('#h_02').hide();
		$('#h_03').hide();
		$('#h_04').hide();
		$('#h_05').hide();
		$('#h_06').show();
		$('#h_07').hide();
		$('#h_08').hide();
	}
	var tt07 = new Date("2019/05/31 00:00");
	if (now.getTime() > tt07.getTime()) {
		$('#h_01').hide();
		$('#h_02').hide();
		$('#h_03').hide();
		$('#h_04').hide();
		$('#h_05').hide();
		$('#h_06').hide();
		$('#h_07').show();
		$('#h_08').hide();
	}
	var tt08 = new Date("2019/05/31 12:00");
	if (now.getTime() > tt08.getTime()) {
		$('#h_01').hide();
		$('#h_02').hide();
		$('#h_03').hide();
		$('#h_04').hide();
		$('#h_05').hide();
		$('#h_06').hide();
		$('#h_07').hide();
		$('#h_08').show();
	}
	var tt09 = new Date("2019/05/31 23:59");
	if (now.getTime() > tt09.getTime()) {
		$('#h_01').hide();
		$('#h_02').hide();
		$('#h_03').hide();
		$('#h_04').hide();
		$('#h_05').hide();
		$('#h_06').hide();
		$('#h_07').hide();
		$('#h_08').hide();
	}
	var tt10 = new Date("2019/05/31 23:59");
	if (now.getTime() > tt10.getTime()) {
		$('#d_sl').show();
		$('#date').hide();
	}
});
