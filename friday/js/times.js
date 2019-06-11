$(document).ready(function() {
	var now = new Date();
	var def = new Date("2019/05/07 00:00");
	if (now.getTime() > def.getTime()) {
		$('#bag07').hide();
		$('#bag14').hide();
		$('#bag21').hide();
		$('#bag28').hide();

		$('#bag107').hide();
		$('#bag114').hide();

		$('#bag307').hide();
		$('#bag314').hide();
		$('#bag321').hide();
		$('#bag328').hide();

		$('#bag407').hide();
		$('#bag414').hide();

		$('#bag521').hide();
		$('#bag528').hide();
	}

	var tt00 = new Date("2019/06/07 00:00");
	if (now.getTime() > tt00.getTime()) {
		$('#bag07').show();
		$('#bag14').hide();
		$('#bag21').hide();
		$('#bag28').hide();

		$('#bag107').show();
		$('#bag114').hide();

		$('#bag307').show();
		$('#bag314').hide();
		$('#bag321').hide();
		$('#bag328').hide();

		$('#bag407').show();
		$('#bag414').hide();

		$('#bag521').hide();
		$('#bag528').hide();

		$('#bag621').hide();
		$('#bag628').hide();

	}
	var tt01 = new Date("2019/06/14 00:00");
	if (now.getTime() > tt01.getTime()) {
		$('#bag07').hide();
		$('#bag14').show();
		$('#bag21').hide();
		$('#bag28').hide();

		$('#bag107').hide();
		$('#bag114').show();

		$('#bag307').hide();
		$('#bag314').show();
		$('#bag321').hide();
		$('#bag328').hide();

		$('#bag407').hide();
		$('#bag414').show();

	}
	var tt02 = new Date("2019/06/21 00:00");
	if (now.getTime() > tt02.getTime()) {
		$('#bag07').hide();
		$('#bag14').hide();
		$('#bag21').show();
		$('#bag28').hide();

		$('#bag107').hide();
		$('#bag114').hide();

		$('#bag307').hide();
		$('#bag314').hide();
		$('#bag321').show();
		$('#bag328').hide();

		$('#bag407').hide();
		$('#bag414').hide();

		$('#bag521').show();
		$('#bag528').hide();

		$('#bag621').show();
		$('#bag628').hide();
	}
	var tt03 = new Date("2019/06/28 00:00");
	if (now.getTime() > tt03.getTime()) {
		$('#bag07').hide();
		$('#bag14').hide();
		$('#bag21').hide();
		$('#bag28').show();

		$('#bag307').hide();
		$('#bag314').hide();
		$('#bag321').hide();
		$('#bag328').show();

		$('#bag521').hide();
		$('#bag528').show();

		$('#bag621').hide();
		$('#bag628').show();
	}

	var final = new Date("2019/06/30 23:59");
	if (now.getTime() > final.getTime()) {
		$('#bag07').hide();
		$('#bag14').hide();
		$('#bag21').hide();
		$('#bag28').hide();

		$('#bag307').hide();
		$('#bag314').hide();
		$('#bag321').hide();
		$('#bag328').hide();

		$('#bag521').hide();
		$('#bag528').hide();
	}
});
