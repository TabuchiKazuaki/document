$(document).ready(function() {
	var now = new Date();
	var tl01 = new Date("2019/06/15 00:00");
	if (now.getTime() > tl01.getTime()) {

		$('#bag621').hide();
		$('#bag628').hide();

		$('#new21').hide();
		$('#new221').hide();

		$('#ze01').hide();
		$('#ze02').hide();
		$('#ze03').hide();
		$('#ze04').hide();
	}

	var now = new Date();
	var tt02 = new Date("2019/06/21 00:00");
	if (now.getTime() > tt02.getTime()) {
		$('#bag621').show();
		$('#bag628').hide();

		$('#new21').show();
		$('#new221').show();
	}
	var now = new Date();
	var tl02 = new Date("2019/06/22 00:00");
	if (now.getTime() > tl02.getTime()) {


		$('#bag621').hide();
		$('#bag628').hide();

		$('#new21').hide();
		$('#new221').hide();

	}

	var now = new Date();
	var tt03 = new Date("2019/06/28 00:00");
	if (now.getTime() > tt03.getTime()) {


		$('#bag621').hide();
		$('#bag628').show();

		$('#ze01').show();
		$('#ze02').show();
		$('#ze03').show();
		$('#ze04').show();
	}

	var now = new Date();
	var last = new Date("2019/06/29 00:00");
	if (now.getTime() > last.getTime()) {


		$('#bag621').hide();
		$('#bag628').hide();

		$('#ze01').hide();
		$('#ze02').hide();
		$('#ze03').hide();
		$('#ze04').hide();
	}
});
