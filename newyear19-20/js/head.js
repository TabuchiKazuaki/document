
$(document).ready(function() {
	var now = new Date();
	var def = new Date("2019/01/01 00:00");
	if (now.getTime() > def.getTime()) {
		$('.h02').hide();
		$('.h01').show();

		// banner
		$('.cl01').show();
		$('.cl02').hide();
	}
});


$(document).ready(function() {
	var now = new Date();
	var t01 = new Date("2020/01/01 00:00");
	if (now.getTime() > t01.getTime()) {
		$('.h02').show();
		$('.h01').hide();

		// banner
		$('.cl01').show();
		$('.cl02').hide();
	}
});


$(document).ready(function() {
	var now = new Date();
	var defdaily = new Date("2019/12/10 00:00");
	if (now.getTime() > defdaily.getTime()) {
		$('.d_chack').hide();
		&('#d28').hide();
		&('#d29').hide();
		&('#d30').hide();
		&('#d31').hide();
		&('#d01').hide();
		&('#d02').hide();
		&('#d03').hide();
		&('#d04').hide();
		&('#d05').hide();
	}
});

$(document).ready(function() {
	var now = new Date();
	var daily28 = new Date("2019/12/28 00:00");
	if (now.getTime() > daily28.getTime()) {
		$('.d_chack').show();
		&('#d28').show();
	}

	var daily29 = new Date("2019/12/28 00:00");
	if (now.getTime() > daily29.getTime()) {
		$('.d_chack').show();
		&('#d29').show();
	}
});