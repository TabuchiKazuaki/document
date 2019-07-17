$(document).ready(function() {
	var now = new Date();
	var tl02 = new Date("2019/06/22 00:00");
	if (now.getTime() > tl02.getTime()) {
		$('.th_now').hide();
	}

	var now = new Date();
	var ts00 = new Date("2019/07/19 00:00");
	if (now.getTime() > ts00.getTime()) {
		$('.th_now').show();
	}

	var now = new Date();
	var tl00 = new Date("2019/07/20 00:00");
	if (now.getTime() > tl00.getTime()) {
		$('.th_now').hide();
	}
});
