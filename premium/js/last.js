$(document).ready(function() {
	var now = new Date();
	var time01 = new Date("2020/01/23 00:00");
	if (now.getTime() > time01.getTime()) {
		$('.last').text('4日');
	}
	var time02 = new Date("2020/01/24 00:00");
	if (now.getTime() > time02.getTime()) {
		$('.last').text('3日');
	}
	var time03 = new Date("2020/01/25 00:00");
	if (now.getTime() > time03.getTime()) {
		$('.last').text('2日');
	}
	var time04 = new Date("2020/01/26 00:00");
	if (now.getTime() > time04.getTime()) {
		$('.last').text('本日最終日');
	}


	var before = new Date("2020/01/26 23:59");
	if (now.getTime() > before.getTime()) {
		$('.hd_h').text('本キャンペーンは終了いたしました');
		$('.last').hide();
	}
});
