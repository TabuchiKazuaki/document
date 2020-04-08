$(document).ready(function() {
	var now = new Date();

	var def = new Date("2019/05/07 00:00");
	if (now.getTime() > def.getTime()) {
		$('.t01').hide();

	}



	var t01 = new Date("2019/10/04 00:00");
	if (now.getTime() > t01.getTime()) {
		$('.t01').show();
	}

});