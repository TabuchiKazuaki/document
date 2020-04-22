$(document).ready(function() {
	var now = new Date();

	var def = new Date("2019/05/07 00:00");
	if (now.getTime() > def.getTime()) {
		$('.c01').hide();
		$('.c02').hide();
		$('.c03').hide();
	}

	var time01 = new Date("2020/05/04 00:00");
	if (now.getTime() > time01.getTime()) {

		$('.c01').show();
		$('.c01b').hide();
	}

	var time02 = new Date("2020/05/05 00:00");
	if (now.getTime() > time02.getTime()) {
		$('.c02').show();
		$('.c02b').hide();
	}

	var time03 = new Date("2020/05/06 00:00");
	if (now.getTime() > time03.getTime()) {
		$('.c03').show();
		$('.c03b').hide();
	}

});