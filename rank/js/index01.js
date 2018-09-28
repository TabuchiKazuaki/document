

$(document).ready(function() {
	$('.animated_two').on('click',function(){
		var flg = $(this).hasClass("bounce");
		if(!flg){
			$(this).addClass('bounce');
		} else {
			$(this).removeClass('bounce');
		}
	});

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
	var time01 = new Date("2018/10/20");
	var mon01 = time01.getTime()-now.getTime();
	var day01  = Math.floor(mon01/(1000*60*60*24)); // カウントダウン用 '日' 取得
	$(d01).html(day01+1);
	// 無料文言削除
	var timeOut01 = new Date("2018/10/21");
	if (now.getTime() > timeOut01.getTime()) {
		$(dd_01).hide();
	}

	// 02 無料文言
	var time01 = new Date("2018/10/20");
	var mon01 = time01.getTime()-now.getTime();
	var day01  = Math.floor(mon01/(1000*60*60*24)); // カウントダウン用 '日' 取得
	$(d01).html(day01+1);
	// 無料文言削除
	var timeOut01 = new Date("2018/10/21");
	if (now.getTime() > timeOut01.getTime()) {
		$(dd_01).hide();
	}

	// 03 無料文言
	var time01 = new Date("2018/10/20");
	var mon01 = time01.getTime()-now.getTime();
	var day01  = Math.floor(mon01/(1000*60*60*24)); // カウントダウン用 '日' 取得
	$(d01).html(day01+1);
	// 無料文言削除
	var timeOut01 = new Date("2018/10/21");
	if (now.getTime() > timeOut01.getTime()) {
		$(dd_01).hide();
	}

	// 04 無料文言
	var time01 = new Date("2018/10/20");
	var mon01 = time01.getTime()-now.getTime();
	var day01  = Math.floor(mon01/(1000*60*60*24)); // カウントダウン用 '日' 取得
	$(d01).html(day01+1);
	// 無料文言削除
	var timeOut01 = new Date("2018/10/21");
	if (now.getTime() > timeOut01.getTime()) {
		$(dd_01).hide();
	}

	// 05 無料文言
	var time01 = new Date("2018/10/20");
	var mon01 = time01.getTime()-now.getTime();
	var day01  = Math.floor(mon01/(1000*60*60*24)); // カウントダウン用 '日' 取得
	$(d01).html(day01+1);
	// 無料文言削除
	var timeOut01 = new Date("2018/10/21");
	if (now.getTime() > timeOut01.getTime()) {
		$(dd_01).hide();
	}

	// 06 無料文言
	var time01 = new Date("2018/10/20");
	var mon01 = time01.getTime()-now.getTime();
	var day01  = Math.floor(mon01/(1000*60*60*24)); // カウントダウン用 '日' 取得
	$(d01).html(day01+1);
	// 無料文言削除
	var timeOut01 = new Date("2018/10/21");
	if (now.getTime() > timeOut01.getTime()) {
		$(dd_01).hide();
	}

	// 07 無料文言
	var time01 = new Date("2018/10/20");
	var mon01 = time01.getTime()-now.getTime();
	var day01  = Math.floor(mon01/(1000*60*60*24)); // カウントダウン用 '日' 取得
	$(d01).html(day01+1);
	// 無料文言削除
	var timeOut01 = new Date("2018/10/21");
	if (now.getTime() > timeOut01.getTime()) {
		$(dd_01).hide();
	}

	// 08 無料文言
	var time01 = new Date("2018/10/20");
	var mon01 = time01.getTime()-now.getTime();
	var day01  = Math.floor(mon01/(1000*60*60*24)); // カウントダウン用 '日' 取得
	$(d01).html(day01+1);
	// 無料文言削除
	var timeOut01 = new Date("2018/10/21");
	if (now.getTime() > timeOut01.getTime()) {
		$(dd_01).hide();
	}

	// 09 無料文言
	var time01 = new Date("2018/10/20");
	var mon01 = time01.getTime()-now.getTime();
	var day01  = Math.floor(mon01/(1000*60*60*24)); // カウントダウン用 '日' 取得
	$(d01).html(day01+1);
	// 無料文言削除
	var timeOut01 = new Date("2018/10/21");
	if (now.getTime() > timeOut01.getTime()) {
		$(dd_01).hide();
	}

	// 10 無料文言
	var time01 = new Date("2018/10/20");
	var mon01 = time01.getTime()-now.getTime();
	var day01  = Math.floor(mon01/(1000*60*60*24)); // カウントダウン用 '日' 取得
	$(d01).html(day01+1);
	// 無料文言削除
	var timeOut01 = new Date("2018/10/21");
	if (now.getTime() > timeOut01.getTime()) {
		$(dd_01).hide();
	}



});
