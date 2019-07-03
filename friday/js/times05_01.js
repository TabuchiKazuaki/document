$(document).ready(function() {
	var now = new Date();
	var def = new Date("2019/05/07 00:00");
	if (now.getTime() > def.getTime()) {
		$('#bag010705').hide();
		$('#bag010712').hide();

		$('#bag020705').hide();
		$('#bag020712').hide();

		$('#bag030705').hide();
		$('#bag030712').hide();

		$('#bag040705').hide();
		$('#bag040712').hide();


	}

	var now = new Date();
	var ts00 = new Date("2019/07/05 00:00");
	if (now.getTime() > ts00.getTime()) {
		$('#bag010705').show();
		$('#bag020705').show();
		$('#bag030705').show();
		$('#bag040705').show();
	}

	var now = new Date();
	var tl00 = new Date("2019/07/06 00:00");
	if (now.getTime() > tl00.getTime()) {
		$('#bag010705').hide();
		$('#bag020705').hide();
		$('#bag030705').hide();
		$('#bag040705').hide();
	}
});
