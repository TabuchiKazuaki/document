$(document).ready(function() {
	var now = new Date();
	var time01 = new Date("2020/01/23 00:00");
	if (now.getTime() > time01.getTime()) {
		$('.last').text('３日');
	}
	var time02 = new Date("2020/01/24 00:00");
	if (now.getTime() > time02.getTime()) {
		$('.last').text('２日');
	}
	var time03 = new Date("2020/01/25 00:00");
	if (now.getTime() > time03.getTime()) {
		$('.last').text('１日');
	}
	var day24 = new Date("2020/01/26 00:00");
	if (now.getTime() > day24.getTime()) {
		$('.last').text('２４時間');
	}
	var day23 = new Date("2020/01/26 01:00");
	if (now.getTime() > day23.getTime()) {
		$('.last').text('２３時間');
	}
	var day22 = new Date("2020/01/26 02:00");
	if (now.getTime() > day22.getTime()) {
		$('.last').text('２２時間');
	}
	var day21 = new Date("2020/01/26 03:00");
	if (now.getTime() > day21.getTime()) {
		$('.last').text('２１時間');
	}
	var day20 = new Date("2020/01/26 04:00");
	if (now.getTime() > day20.getTime()) {
		$('.last').text('２０時間');
	}
	var day19 = new Date("2020/01/26 05:00");
	if (now.getTime() > day19.getTime()) {
		$('.last').text('１９時間');
	}
	var day18 = new Date("2020/01/26 06:00");
	if (now.getTime() > day18.getTime()) {
		$('.last').text('１８時間');
	}
	var day17 = new Date("2020/01/26 07:00");
	if (now.getTime() > day17.getTime()) {
		$('.last').text('１７時間');
	}
	var day16 = new Date("2020/01/26 08:00");
	if (now.getTime() > day16.getTime()) {
		$('.last').text('１６時間');
	}
	var day15 = new Date("2020/01/26 09:00");
	if (now.getTime() > day15.getTime()) {
		$('.last').text('１５時間');
	}
	var day14 = new Date("2020/01/26 10:00");
	if (now.getTime() > day14.getTime()) {
		$('.last').text('１４時間');
	}
	var day13 = new Date("2020/01/26 11:00");
	if (now.getTime() > day13.getTime()) {
		$('.last').text('１３時間');
	}
	var day12 = new Date("2020/01/26 12:00");
	if (now.getTime() > day12.getTime()) {
		$('.last').text('１２時間');
	}
	var day11 = new Date("2020/01/26 13:00");
	if (now.getTime() > day11.getTime()) {
		$('.last').text('１１時間');
	}
	var day10 = new Date("2020/01/26 14:00");
	if (now.getTime() > day10.getTime()) {
		$('.last').text('１０時間');
	}
	var day09 = new Date("2020/01/26 15:00");
	if (now.getTime() > day09.getTime()) {
		$('.last').text('９時間');
	}
	var day08 = new Date("2020/01/26 16:00");
	if (now.getTime() > day08.getTime()) {
		$('.last').text('８時間');
	}
	var day07 = new Date("2020/01/26 17:00");
	if (now.getTime() > day07.getTime()) {
		$('.last').text('７時間');
	}
	var day06 = new Date("2020/01/26 18:00");
	if (now.getTime() > day06.getTime()) {
		$('.last').text('６時間');
	}
	var day05 = new Date("2020/01/26 19:00");
	if (now.getTime() > day05.getTime()) {
		$('.last').text('５時間');
	}
	var day04 = new Date("2020/01/26 20:00");
	if (now.getTime() > day04.getTime()) {
		$('.last').text('４時間');
	}
	var day03 = new Date("2020/01/26 21:00");
	if (now.getTime() > day03.getTime()) {
		$('.last').text('３時間');
	}
	var day02 = new Date("2020/01/26 22:00");
	if (now.getTime() > day02.getTime()) {
		$('.last').text('２時間');
	}
	var day01 = new Date("2020/01/26 23:00");
	if (now.getTime() > day01.getTime()) {
		$('.last').text('１時間');
	}

	var before = new Date("2020/01/26 23:59");
	if (now.getTime() > before.getTime()) {
		$('.hd_h').text('キャンペーン期間1月26日まで');
		$('.last').hide();
	}

});
