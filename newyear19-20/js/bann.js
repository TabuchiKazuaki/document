



$(document).ready(function() {
	var now = new Date();

	var defdaily = new Date("2019/12/28 00:00");
	if (now.getTime() > defdaily.getTime()) {
		$('.o28').show();
	}
});