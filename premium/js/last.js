$(document).ready(function() {
	var now = new Date();
	var time01 = new Date("2020/01/23 00:00");
	if (now.getTime() > time01.getTime()) {
		$('.last').text('3日');
	}
	var time02 = new Date("2020/01/24 00:00");
	if (now.getTime() > time02.getTime()) {
		$('.last').text('2日');
	}
	var time03 = new Date("2020/01/25 00:00");
	if (now.getTime() > time03.getTime()) {
		$('.last').text('1日');
	}
	var day24 = new Date("2020/01/26 00:00");
	if (now.getTime() > day24.getTime()) {
		$('.last').text('24時間');
	}
	var day23 = new Date("2020/01/26 01:00");
	if (now.getTime() > day23.getTime()) {
		$('.last').text('23時間');
	}
	var day22 = new Date("2020/01/26 02:00");
	if (now.getTime() > day22.getTime()) {
		$('.last').text('22時間');
	}
	var day21 = new Date("2020/01/26 03:00");
	if (now.getTime() > day21.getTime()) {
		$('.last').text('21時間');
	}
	var day20 = new Date("2020/01/26 04:00");
	if (now.getTime() > day20.getTime()) {
		$('.last').text('20時間');
	}
	var day19 = new Date("2020/01/26 05:00");
	if (now.getTime() > day19.getTime()) {
		$('.last').text('19時間');
	}
	var day18 = new Date("2020/01/26 06:00");
	if (now.getTime() > day18.getTime()) {
		$('.last').text('18時間');
	}
	var day17 = new Date("2020/01/26 07:00");
	if (now.getTime() > day17.getTime()) {
		$('.last').text('17時間');
	}
	var day16 = new Date("2020/01/26 08:00");
	if (now.getTime() > day16.getTime()) {
		$('.last').text('16時間');
	}
	var day15 = new Date("2020/01/26 09:00");
	if (now.getTime() > day15.getTime()) {
		$('.last').text('15時間');
	}
	var day14 = new Date("2020/01/26 10:00");
	if (now.getTime() > day14.getTime()) {
		$('.last').text('14時間');
	}
	var day13 = new Date("2020/01/26 11:00");
	if (now.getTime() > day13.getTime()) {
		$('.last').text('13時間');
	}
	var day12 = new Date("2020/01/26 12:00");
	if (now.getTime() > day12.getTime()) {
		$('.last').text('12時間');
	}
	var day11 = new Date("2020/01/26 13:00");
	if (now.getTime() > day11.getTime()) {
		$('.last').text('11時間');
	}
	var day10 = new Date("2020/01/26 14:00");
	if (now.getTime() > day10.getTime()) {
		$('.last').text('10時間');
	}
	var day09 = new Date("2020/01/26 15:00");
	if (now.getTime() > day09.getTime()) {
		$('.last').text('9時間');
	}
	var day08 = new Date("2020/01/26 16:00");
	if (now.getTime() > day08.getTime()) {
		$('.last').text('8時間');
	}
	var day07 = new Date("2020/01/26 17:00");
	if (now.getTime() > day07.getTime()) {
		$('.last').text('7時間');
	}
	var day06 = new Date("2020/01/26 18:00");
	if (now.getTime() > day06.getTime()) {
		$('.last').text('6時間');
	}
	var day05 = new Date("2020/01/26 19:00");
	if (now.getTime() > day05.getTime()) {
		$('.last').text('5時間');
	}
	var day04 = new Date("2020/01/26 20:00");
	if (now.getTime() > day04.getTime()) {
		$('.last').text('4時間');
	}
	var day03 = new Date("2020/01/26 21:00");
	if (now.getTime() > day03.getTime()) {
		$('.last').text('3時間');
	}
	var day02 = new Date("2020/01/26 22:00");
	if (now.getTime() > day02.getTime()) {
		$('.last').text('2時間');
	}
	var day01 = new Date("2020/01/26 23:00");
	if (now.getTime() > day01.getTime()) {
		$('.last').text('1時間');
	}

	var before = new Date("2020/01/26 23:59");
	if (now.getTime() > before.getTime()) {
		$('.hd_h').text('本キャンペーンは終了いたしました');
		$('.last').hide();
	}
});