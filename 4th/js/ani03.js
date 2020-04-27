$(document).ready(function() {
	var now = new Date();

	var def = new Date("2019/05/07 00:00");
	if (now.getTime() > def.getTime()) {
		$('.c01').hide();
		$('.c02').hide();
		$('.c03').hide();
	}

	var time02 = new Date("2020/05/05 00:00");
	if (now.getTime() > time02.getTime()) {
		$('.c02').show();
		$('.c02bt').hide();
	}

	var time03 = new Date("2020/05/06 00:00");
	if (now.getTime() > time03.getTime()) {
		$('.c03').show();
		$('.c03bt').hide();
	}

	var time04 = new Date("2020/05/09 00:00");
	if (now.getTime() > time04.getTime()) {
		$('.c04').show();
		$('.c04bt').hide();
	}


	var time11 = new Date("2020/05/10 00:00");
	if (now.getTime() > time11.getTime()) {
		$('.ch01').hide();
		$('.ch01').css('display','none');

		$('.ch02').hide();
		$('.ch02').css('display','none');

		$('.ch03').hide();
		$('.ch03').css('display','none');
	}
});


