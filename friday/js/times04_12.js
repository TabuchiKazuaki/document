$(document).ready(function() {
	var now = new Date();
	var tl01 = new Date("2019/06/15 00:00");
	if (now.getTime() > tl01.getTime()) {

		$('#bag07').hide();
		$('#bag14').hide();
		$('#bag21').hide();
		$('#bag28').hide();

		$('#ze01').hide();
	}

	var now = new Date();
	var tt02 = new Date("2019/06/21 00:00");
	if (now.getTime() > tt02.getTime()) {
		$('#bag21').show();
		$('#bag28').hide();
	}
	var now = new Date();
	var tl02 = new Date("2019/06/22 00:00");
	if (now.getTime() > tl02.getTime()) {
		$('#bag21').hide();
		$('#bag28').hide();

	}

	var now = new Date();
	var tt03 = new Date("2019/06/28 00:00");
	if (now.getTime() > tt03.getTime()) {
		$('#bag21').hide();
		$('#bag28').show();

		$('#ze01').show();
	}

	var now = new Date();
	var last = new Date("2019/06/29 00:00");
	if (now.getTime() > last.getTime()) {
		$('#bag21').hide();
		$('#bag28').hide();

		$('#ze01').hide();

	}
});
