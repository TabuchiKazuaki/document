$(document).ready(function() {
	var now = new Date();

	var time02 = new Date("2020/05/04 00:00");
	if (now.getTime() > time02.getTime()) {
		$('.lo02').hide();
		$('.lo03').hide();
	}

	var time03 = new Date("2020/05/11 00:00");
	if (now.getTime() > time03.getTime()) {
		$('.lo01').hide();
	}
});


