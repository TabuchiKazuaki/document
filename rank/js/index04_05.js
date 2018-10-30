[]

$(document).ready(function() {
	var now = new Date();
	var d01 = document.getElementById('d_01');
	var d02 = document.getElementById('d_02');
	var d03 = document.getElementById('d_03');
	var d04 = document.getElementById('d_04');
	var d05 = document.getElementById('d_05');
	var d06 = document.getElementById('d_06');
	var d07 = document.getElementById('d_07');
	var d08 = document.getElementById('d_08');
	var d09 = document.getElementById('d_09');
	var d10 = document.getElementById('d_10');


	// 無料文言
	// var time01 = new Date("2018/10/07");
	// var mon01 = time01.getTime()-now.getTime();
	// var day01  = Math.floor(mon01/(1000*60*60*24)); // カウントダウン用 '日' 取得
	// $(d01).html(day01+2);
	// // 無料文言削除
	// var timeOut01 = new Date("2018/10/07 23:59");
	// if (now.getTime() > timeOut01.getTime()) {
	// 	$('#dd_01').hide();
	// }

	// 02 無料文言
	// var time02 = new Date("2018/10/07");
	// var mon02 = time02.getTime()-now.getTime();
	// var day02  = Math.floor(mon02/(1000*60*60*24)); // カウントダウン用 '日' 取得
	// $(d02).html(day02+2);
	// // 無料文言削除
	// var timeOut02 = new Date("2018/10/07 23:59");
	// if (now.getTime() > timeOut02.getTime()) {
	// 	$('#dd_02').hide();
	// }

	// 03 無料文言
	// var time03 = new Date("2018/10/16");
	// var mon03 = time03.getTime()-now.getTime();
	// var day03  = Math.floor(mon03/(1000*60*60*24)); // カウントダウン用 '日' 取得
	// $(d03).html(day03+2);
	// // 無料文言削除
	// var timeOut03 = new Date("2018/10/16 23:59");
	// if (now.getTime() > timeOut03.getTime()) {
	// 	$('#dd_03').hide();
	// }

	// // 04 無料文言
	var time04 = new Date("2018/10/31");
	var mon04 = time04.getTime()-now.getTime();
	var day04  = Math.floor(mon04/(1000*60*60*24)); // カウントダウン用 '日' 取得
	$(d04).html(day04+2);
	// 無料文言削除
	var timeOut04 = new Date("2018/10/31 23:59");
	if (now.getTime() > timeOut04.getTime()) {
		$('#dd_04').hide();
	}

	// 05 無料文言
	// var time05 = new Date("2018/10/18");
	// var mon05 = time05.getTime()-now.getTime();
	// var day05  = Math.floor(mon05/(1000*60*60*24)); // カウントダウン用 '日' 取得
	// $(d05).html(day05+2);
	// // 無料文言削除
	// var timeOut05 = new Date("2018/10/18 23:59");
	// if (now.getTime() > timeOut05.getTime()) {
	// 	$('#dd_05').hide();
	// }

	// 06 無料文言
	// var time06 = new Date("2018/10/07");
	// var mon06 = time06.getTime()-now.getTime();
	// var day06  = Math.floor(mon06/(1000*60*60*24)); // カウントダウン用 '日' 取得
	// $(d06).html(day06+2);
	// // 無料文言削除
	// var timeOut06 = new Date("2018/10/07 23:59");
	// if (now.getTime() > timeOut06.getTime()) {
	// 	$('#dd_06').hide();
	// }

	// 07 無料文言
	// var time07 = new Date("2018/10/03");
	// var mon07 = time07.getTime()-now.getTime();
	// var day07  = Math.floor(mon07/(1000*60*60*24)); // カウントダウン用 '日' 取得
	// $(d07).html(day07+2);
	// // 無料文言削除
	// var timeOut07 = new Date("2018/10/03 23:59");
	// if (now.getTime() > timeOut07.getTime()) {
	// 	$('#dd_07').hide();
	// }

	// // 08 無料文言
	var time08 = new Date("2018/11/04");
	var mon08 = time08.getTime()-now.getTime();
	var day08  = Math.floor(mon08/(1000*60*60*24)); // カウントダウン用 '日' 取得
	$(d08).html(day08+2);
	// 無料文言削除
	var timeOut08 = new Date("2018/11/04 23:59");
	if (now.getTime() > timeOut08.getTime()) {
		$('#dd_08').hide();
	}

	// 09 無料文言
	var time09 = new Date("2018/11/04");
	var mon09 = time09.getTime()-now.getTime();
	var day09  = Math.floor(mon09/(1000*60*60*24)); // カウントダウン用 '日' 取得
	$(d09).html(day09+2);
	// 無料文言削除
	var timeOut09 = new Date("2018/11/04 23:59");
	if (now.getTime() > timeOut09.getTime()) {
		$('#dd_09').hide();
	}

	// // 10 無料文言
	// var time10 = new Date("2018/10/11");
	// var mon10 = time10.getTime()-now.getTime();
	// var day10  = Math.floor(mon10/(1000*60*60*24)); // カウントダウン用 '日' 取得
	// $(d10).html(day10+2);
	// // 無料文言削除
	// var timeOut10 = new Date("2018/10/11 23:59");
	// if (now.getTime() > timeOut10.getTime()) {
	// 	$('#dd_10').hide();
	// }



});
