$(document).ready(function() {
	var now = new Date();

	var tt01 = new Date("2019/05/03 22:05");
	if (now.getTime() > tt01.getTime()) {
		$('#p_01').hide()
	}
	var tt02 = new Date("2019/05/04 00:25");
	if (now.getTime() > tt02.getTime()) {
		$('#p_02').hide()
	}

});
