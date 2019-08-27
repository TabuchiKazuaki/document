$(document).ready(function() {
	var now = new Date();

	var ttbefore = new Date("2019/05/04 15:15");
	if (now.getTime() > ttbefore.getTime()) {
		$('.dt01').show();
		$('.dt02').hide();
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
	}

	var dtt01 = new Date("2019/08/11 00:00");
	if (now.getTime() > dtt01.getTime()) {
		$('.dt01').hide();
		$('.dt02').show();
	}
	var dtt02 = new Date("2019/08/14 00:00");
	if (now.getTime() > dtt02.getTime()) {
		$('.dt01').show();
		$('.dt02').hide();
	}
	var tt10 = new Date("2019/08/21 00:00");
	if (now.getTime() > tt10.getTime()) {
		$('.now10').show();
	}
	var tt09 = new Date("2019/08/22 00:00");
	if (now.getTime() > tt09.getTime()) {
		$('.now10').hide();
		$('.now9').show();
	}
	var tt08 = new Date("2019/08/23 00:00");
	if (now.getTime() > tt08.getTime()) {
		$('.now9').hide();
		$('.now8').show();
	}
	var tt07 = new Date("2019/08/24 00:00");
	if (now.getTime() > tt07.getTime()) {
		$('.now8').hide();
		$('.now7').show();
	}
	var tt06 = new Date("2019/08/25 00:00");
	if (now.getTime() > tt06.getTime()) {
		$('.now7').hide();
		$('.now6').show();
	}
	var tt05 = new Date("2019/08/26 00:00");
	if (now.getTime() > tt05.getTime()) {
		$('.now6').hide();
		$('.now5').show();
	}
	var tt04 = new Date("2019/08/27 00:00");
	if (now.getTime() > tt04.getTime()) {
		$('.now5').show();
	}
	var tt03 = new Date("2019/08/28 00:00");
	if (now.getTime() > tt03.getTime()) {
		$('.now5').hide();
		$('.now4').show();
	}
	var tt02 = new Date("2019/08/29 00:00");
	if (now.getTime() > tt02.getTime()) {
		$('.now4').hide();
		$('.now3').show();
	}
	var tt01 = new Date("2019/08/30 00:00");
	if (now.getTime() > tt01.getTime()) {
		$('.now3').hide();
		$('.now2').show();
	}
	var tt00 = new Date("2019/08/31 00:00");
	if (now.getTime() > tt00.getTime()) {
		$('.now2').hide();
		$('.now0').show();
	}
	var ttlast = new Date("2019/09/01 00:00");
	if (now.getTime() > ttlast.getTime()) {
		$('.now0').hide();
	}
});
