$(document).ready(function() {
	var now = new Date();

	var tt01 = new Date("2019/05/01 21:13");
	if (now.getTime() > tt01.getTime()) {
		$('#p_01').css('display','block')
	}
	var tt10 = new Date("2019/05/01 22:59");
	if (now.getTime() > tt10.getTime()) {
		$('#p_10').css('display','block')
	}

});
