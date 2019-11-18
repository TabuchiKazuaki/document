$(document).ready(function() {
	var now = new Date();
	var def = new Date("2019/05/07 00:00");
	if (now.getTime() > def.getTime()) {
		$('#bag07').hide();

	}

	var now = new Date();
	var tt00 = new Date("2019/06/07 00:00");
	if (now.getTime() > tt00.getTime()) {
		$('#bag07').show();
	}
	var now = new Date();
	var tl00 = new Date("2019/06/08 00:00");
	if (now.getTime() > tl00.getTime()) {
		$('#bag07').hide();
	}

	var now = new Date();
	var tt01 = new Date("2019/06/14 00:00");
	if (now.getTime() > tt01.getTime()) {
		$('#bag07').hide();
	}
	var now = new Date();
	var tl01 = new Date("2019/06/15 00:00");
	if (now.getTime() > tl01.getTime()) {
		$('#bag07').hide();
	}

	var now = new Date();
	var tt02 = new Date("2019/06/21 00:00");
	if (now.getTime() > tt02.getTime()) {
		$('#bag07').hide();
	}
	var now = new Date();
	var tl02 = new Date("2019/06/22 00:00");
	if (now.getTime() > tl02.getTime()) {
		$('#bag07').hide();
	}

});
