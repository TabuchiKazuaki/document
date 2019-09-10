$(document).ready(function() {
	var now = new Date();

	var ttbefore = new Date("2019/05/04 15:15");
	if (now.getTime() > ttbefore.getTime()) {
		$('.now10').hide();
		$('.now9').hide();
		$('.now8').hide();
		$('.now7').hide();
		$('.now6').hide();
		$('.now5').hide();
		$('.now4').hide();
		$('.now3').hide();
		$('.now2').hide();
		$('.now1').hide();
		$('.now0').hide();
		$('.vir').hide();
		$('.tperiod').hide();
	}

	var period01 = new Date("2019/09/14 00:00");
	if (now.getTime() > period01.getTime()) {
		$('.tdef').hide();
		$('.tperiod').show();
		$('.vir').show();
	}
	var period01end = new Date("2019/09/16 23:59");
	if (now.getTime() > period01end.getTime()) {
		$('.tperiod').hide();
		$('.tdef').show();
	}

	var tt10 = new Date("2019/09/21 00:00");
	if (now.getTime() > tt10.getTime()) {
		$('.now10').show();
	}
	var tt09 = new Date("2019/09/22 00:00");
	if (now.getTime() > tt09.getTime()) {
		$('.now10').hide();
		$('.now9').show();
	}
	var tt08 = new Date("2019/09/23 00:00");
	if (now.getTime() > tt08.getTime()) {
		$('.now9').hide();
		$('.now8').show();
	}

	var period02 = new Date("2019/09/21 00:00");
	if (now.getTime() > period02.getTime()) {
		$('.tdef').hide();
		$('.tperiod').show();
	}
	var period02end = new Date("2019/09/23 23:59");
	if (now.getTime() > period02end.getTime()) {
		$('.tperiod').hide();
		$('.tdef').show();
	}

	var tt07 = new Date("2019/09/24 00:00");
	if (now.getTime() > tt07.getTime()) {
		$('.now8').hide();
		$('.now7').show();
	}
	var tt06 = new Date("2019/09/25 00:00");
	if (now.getTime() > tt06.getTime()) {
		$('.now7').hide();
		$('.now6').show();
	}
	var tt05 = new Date("2019/09/26 00:00");
	if (now.getTime() > tt05.getTime()) {
		$('.now6').hide();
		$('.now5').show();
	}
	var tt04 = new Date("2019/09/27 00:00");
	if (now.getTime() > tt04.getTime()) {
		$('.now5').hide();
		$('.now4').show();
	}
	var tt03 = new Date("2019/09/28 00:00");
	if (now.getTime() > tt03.getTime()) {
		$('.now4').hide();
		$('.now3').show();
	}
	var tt02 = new Date("2019/09/29 00:00");
	if (now.getTime() > tt02.getTime()) {
		$('.now3').hide();
		$('.now2').show();
	}
	var tt01 = new Date("2019/09/30 00:00");
	if (now.getTime() > tt01.getTime()) {
		$('.now2').hide();
		$('.now0').show();
	}
	var ttlast = new Date("2019/10/01 00:00");
	if (now.getTime() > ttlast.getTime()) {
		$('.now0').hide();
	}
});
