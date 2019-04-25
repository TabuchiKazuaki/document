$(document).ready(function() {
	var now = new Date();

	var tt02 = new Date("2019/05/06 00:00");
	if (now.getTime() > tt02.getTime()) {
		$('#p_02').hide()
	}
});
