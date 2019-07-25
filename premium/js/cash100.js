$(document).ready(function() {
	var now = new Date();

	var tt01 = new Date("2019/05/04 15:15");
	if (now.getTime() > tt01.getTime()) {
		$('.now3').show();
		$('.now2').hide();
		$('.now1').hide();
		$('.now0').hide();
	}
	var tt02 = new Date("2019/08/28 00:00");
	if (now.getTime() > tt02.getTime()) {
		$('.now3').show();
	}
	var tt03 = new Date("2019/08/29 00:00");
	if (now.getTime() > tt03.getTime()) {
		$('.now3').hide();
		$('.now2').show();
	}
	var tt04 = new Date("2019/08/30 00:00");
	if (now.getTime() > tt04.getTime()) {
		$('.now2').hide();
		$('.now1').show();
	}
	var tt05 = new Date("2019/08/31 00:00");
	if (now.getTime() > tt05.getTime()) {
		$('.now1').hide();
		$('.now0').show();
	}
	var tt06 = new Date("2019/09/01 00:00");
	if (now.getTime() > tt06.getTime()) {
		$('.now0').hide();
	}
});
