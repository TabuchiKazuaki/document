
$(document).ready(function() {
	var now = new Date();
	var def = new Date("2019/01/01 00:00");
	if (now.getTime() > def.getTime()) {
		$('.h02').hide();
		$('.h01').show();
	}
});


$(document).ready(function() {
	var now = new Date();
	var def = new Date("2020/01/01 00:00");
	if (now.getTime() > def.getTime()) {
		$('.h02').show();
		$('.h01').hide();
	}
});