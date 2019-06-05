$(document).ready(function() {
	var now = new Date();
	var tt00 = new Date("2019/05/13 23:59");
	if (now.getTime() > tt00.getTime()) {
		$('#bag07').show();
		$('#bag14').hide();
		$('#bag21').hide();
		$('#bag28').hide();
	}
	var tt01 = new Date("2019/06/14 00:00");
	if (now.getTime() > tt01.getTime()) {
		$('#bag07').hide();
		$('#bag14').show();
		$('#bag21').hide();
		$('#bag28').hide();
	}
	var tt02 = new Date("2019/06/21 00:00");
	if (now.getTime() > tt02.getTime()) {
		$('#bag07').hide();
		$('#bag14').hide();
		$('#bag21').show();
		$('#bag28').hide();
	}
	var tt04 = new Date("2019/06/28 00:00");
	if (now.getTime() > tt04.getTime()) {
		$('#bag07').hide();
		$('#bag14').hide();
		$('#bag21').hide();
		$('#bag28').show();
	}
});
