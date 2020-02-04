$(document).ready(function() {
	var now = new Date();
	var t01 = new Date("2020/02/01 00:00");
	if (now.getTime() > t01.getTime()) {
		$('#t01').text('テスト');
		$('#t01').removeClass('animated')
	}
});
