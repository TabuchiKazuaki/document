

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
	var time01 = new Date("2018/12/01");
	var mon01 = time01.getTime()-now.getTime();
	var day01  = Math.floor(mon01/(1000*60*60*24)); // カウントダウン用 '日' 取得
	$(d01).html(day01+2);
	// 無料文言削除
	var timeOut01 = new Date("2018/12/01 23:59");
	if (now.getTime() > timeOut01.getTime()) {
		$('#dd_01').hide();
	}

	// 02 無料文言
	var time021 = new Date("2018/12/05");
	var mon021 = time021.getTime()-now.getTime();
	var day021  = Math.floor(mon021/(1000*60*60*24)); // カウントダウン用 '日' 取得
	$(d02).html(day021+2);
	// 無料文言削除
	var timeOut021 = new Date("2018/12/05 23:59");
	if (now.getTime() > timeOut021.getTime()) {
		$('#dd_02').hide();
	}
	var time02 = new Date("2018/11/28");
	var mon02 = time02.getTime()-now.getTime();
	var day02  = Math.floor(mon02/(1000*60*60*24)); // カウントダウン用 '日' 取得
	$(d02).html(day02+2);
	// 無料文言削除


	// 03 無料文言
	// var time03 = new Date("2018/11/25");
	// var mon03 = time03.getTime()-now.getTime();
	// var day03  = Math.floor(mon03/(1000*60*60*24)); // カウントダウン用 '日' 取得
	// $(d03).html(day03+2);
	// // 無料文言削除
	// var timeOut03 = new Date("2018/11/25 23:59");
	// if (now.getTime() > timeOut03.getTime()) {
	// 	$('#dd_03').hide();
	// }

	// 04 無料文言
	// var time04 = new Date("2018/11/02");
	// var mon04 = time04.getTime()-now.getTime();
	// var day04  = Math.floor(mon04/(1000*60*60*24)); // カウントダウン用 '日' 取得
	// $(d04).html(day04+2);
	// // 無料文言削除
	// var timeOut04 = new Date("2018/11/02 23:59");
	// if (now.getTime() > timeOut04.getTime()) {
	// 	$('#dd_04').hide();
	// }

	// // 05 無料文言
	var time051 = new Date("2018/12/05");
	var mon051 = time051.getTime()-now.getTime();
	var day051  = Math.floor(mon051/(1000*60*60*24)); // カウントダウン用 '日' 取得
	$(d05).html(day051+2);
	// 無料文言削除
	var timeOut051 = new Date("2018/12/05 23:59");
	if (now.getTime() > timeOut051.getTime()) {
		$('#dd_05').hide();
	}
	var time05 = new Date("2018/11/28");
	var mon05 = time05.getTime()-now.getTime();
	var day05  = Math.floor(mon05/(1000*60*60*24)); // カウントダウン用 '日' 取得
	$(d05).html(day05+2);
	// 無料文言削除


	// 06 無料文言
	var time061 = new Date("2018/12/04");
	var mon061 = time061.getTime()-now.getTime();
	var day061  = Math.floor(mon061/(1000*60*60*24)); // カウントダウン用 '日' 取得
	$(d061).html(day061+2);
	// 無料文言削除
	var timeOut061 = new Date("2018/12/04 23:59");
	if (now.getTime() > timeOut061.getTime()) {
		$('#dd_06').hide();
	}

	var time06 = new Date("2018/11/27");
	var mon06 = time06.getTime()-now.getTime();
	var day06  = Math.floor(mon06/(1000*60*60*24)); // カウントダウン用 '日' 取得
	$(d06).html(day06+2);
	// 無料文言削除

	// 07 無料文言
	var time07 = new Date("2018/12/02");
	var mon07 = time07.getTime()-now.getTime();
	var day07  = Math.floor(mon07/(1000*60*60*24)); // カウントダウン用 '日' 取得
	$(d07).html(day07+2);
	// 無料文言削除
	var timeOut07 = new Date("2018/12/02 23:59");
	if (now.getTime() > timeOut07.getTime()) {
		$('#dd_07').hide();
	}

	// 08 無料文言
	var time081 = new Date("2018/11/28");
	var mon081 = time081.getTime()-now.getTime();
	var day081  = Math.floor(mon081/(1000*60*60*24)); // カウントダウン用 '日' 取得
	$(d08).html(day081+2);
	// 無料文言削除
	var timeOut081 = new Date("2018/11/28 23:59");
	if (now.getTime() > timeOut081.getTime()) {
		$('#dd_08').hide();
	}

	var time08 = new Date("2018/11/28");
	var mon08 = time08.getTime()-now.getTime();
	var day08  = Math.floor(mon08/(1000*60*60*24)); // カウントダウン用 '日' 取得
	$(d08).html(day08+2);
	// 無料文言削除


	// 09 無料文言
	var time09 = new Date("2018/12/02");
	var mon09 = time09.getTime()-now.getTime();
	var day09  = Math.floor(mon09/(1000*60*60*24)); // カウントダウン用 '日' 取得
	$(d09).html(day09+2);
	// 無料文言削除
	var timeOut09 = new Date("2018/12/02 23:59");
	if (now.getTime() > timeOut09.getTime()) {
		$('#dd_09').hide();
	}

	// 10 無料文言
	var time101 = new Date("2018/12/06");
	var mon101 = time101.getTime()-now.getTime();
	var day101  = Math.floor(mon101/(1000*60*60*24)); // カウントダウン用 '日' 取得
	$(d10).html(day101+2);
	// 無料文言削除
	var timeOut101 = new Date("2018/12/06 23:59");
	if (now.getTime() > timeOut101.getTime()) {
		$('#dd_10').hide();
	}

	var time10 = new Date("2018/11/29");
	var mon10 = time10.getTime()-now.getTime();
	var day10  = Math.floor(mon10/(1000*60*60*24)); // カウントダウン用 '日' 取得
	$(d10).html(day10+2);
	// 無料文言削除



});
