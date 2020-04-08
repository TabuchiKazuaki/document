$(document).ready(function() {
	var now = new Date();

	var def = new Date("2019/05/07 00:00");
	if (now.getTime() > def.getTime()) {
		$('.t01').hide();
	}

	var time01 = new Date("2020/04/11 00:00");
	if (now.getTime() > time01.getTime()) {
		$('.t01').show();
	}

	var time01af = new Date("2020/04/20 00:00");
	if (now.getTime() > time01af.getTime()) {
		$('.t01').hide();
	}

});