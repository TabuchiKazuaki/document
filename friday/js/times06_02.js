$(document).ready(function() {
	var now = new Date();
	var tl02 = new Date("2019/06/22 00:00");
	if (now.getTime() > tl02.getTime()) {
		$('#bag020712').hide();
		$('#bag030712').hide();
		$('#bag040712').hide();
		$('#bag050712').hide();
		$('#bag060712').hide();
		$('#bag070712').hide();
		$('#bag150712').hide();
		$('#bag150714').hide();

	}

	var now = new Date();
	var ts00 = new Date("2019/07/12 00:00");
	if (now.getTime() > ts00.getTime()) {
		$('#bag020712').show();
		$('#bag030712').show();
		$('#bag040712').show();
		$('#bag050712').show();
		$('#bag060712').show();
		$('#bag070712').show();
		$('#bag150712').show();
	}

	var now = new Date();
	var tl00 = new Date("2019/07/13 00:00");
	if (now.getTime() > tl00.getTime()) {
		$('#bag020712').hide();
		$('#bag030712').hide();
		$('#bag040712').hide();
		$('#bag050712').hide();
		$('#bag060712').hide();
		$('#bag070712').hide();
	}

	var tl01 = new Date("2019/07/14 00:00");
	if (now.getTime() > tl01.getTime()) {
		$('#bag150712').hide();
		$('#bag150714').show();
	}
	var now = new Date();
	var ts01 = new Date("2019/07/15 23:59");
	if (now.getTime() > ts01.getTime()) {
		$('#bag150714').hide();
	}
});
