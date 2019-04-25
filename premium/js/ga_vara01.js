$(document).ready(function() {
	var now = new Date();

	var tt01 = new Date("2019/05/05 23:59");
	if (now.getTime() > tt01.getTime()) {
		$('#g_01').hide();
		$('#g_02').hide();
	}

	var tt02 = new Date("2019/05/03 22:05");
	if (now.getTime() > tt02.getTime()) {
		// $('#p_01').hide();
		$('#p_01').children('.pop').text('有料');
	}
	var tt03 = new Date("2019/05/06 00:00");
	if (now.getTime() > tt03.getTime()) {
		$('#p_02').hide();
	}
});
