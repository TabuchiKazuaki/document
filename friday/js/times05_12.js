$(document).ready(function() {
	var now = new Date();
	var tl01 = new Date("2019/06/15 00:00");
	if (now.getTime() > tl01.getTime()) {
		$('#bag071').hide();
		$('#bag072').hide();
	}
	var now = new Date();
	var tt02 = new Date("2019/07/05 00:00");
	if (now.getTime() > tt02.getTime()) {
		$('#bag071').show();
		$('#bag072').show();
	}
	var now = new Date();
	var tl02 = new Date("2019/07/06 00:00");
	if (now.getTime() > tl02.getTime()) {
		$('#bag071').hide();
		$('#bag072').hide();
	}
});
