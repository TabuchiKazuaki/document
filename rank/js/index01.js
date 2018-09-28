

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


	// ビデオ
	var change01 = new Date("2018/09/20 23:00");
	if (now.getTime() > change01.getTime()) {
		$(dd_01).show();
	}
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




	// 02 初期
	var before02 = new Date("2018/07/22 23:00");
	if (now.getTime() > before02.getTime()) {
		$(elv02).text('今すぐ視聴する');
		$(elv02).attr("href","https://abema.tv/channels/special-plus/slots/EQtBJhJFFujmFM");
	}
	// ビデオ
	var change02 = new Date("2018/10/20 23:00");
	if (now.getTime() > change02.getTime()) {
		$(dd_02).show();
		$(elv02).text('ビデオを視聴する');
		$(elv02).href = "https://abema.tv/video/title/26-52";
	}
	// 無料文言
	var time02 = new Date("2018/10/20");
	var mon02 = time02.getTime()-now.getTime();
	var day02  = Math.floor(mon02/(1000*60*60*24)); // カウントダウン用 '日' 取得
	$(d02).html(day02+1);
	if (now.getTime() > time02.getTime()) {
		$(dd_02).show();
	}
	// 無料文言削除
	var timeOut02 = new Date("2018/10/21");
	if (now.getTime() > timeOut02.getTime()) {
		$(dd_02).hide();
	}
	// 削除
	// var out02 = new Date("2018/09/20 24:00");
	// if (now.getTime() > out02.getTime()) {
	// 	$(elv02).hide();
	// }

		// tn 最新 #2
		// var next02_02 = new Date("2018/07/22 23:00");
		// if (now.getTime() > next02_02.getTime()) {
		// 	$(eln02).attr("href","https://abema.tv/channels/special-plus/slots/EQtBJhJFFujmFM");
		// }
		// 最新 #3
		// var next02_03 = new Date("2018/07/22 23:00");
		// if (now.getTime() > next02_03.getTime()) {
		// 	$(eln02).attr("href","https://abema.tv/channels/special-plus/slots/EQtBJhJFFujmFM");
		// }
		// 最新 #4
		// var next02_04 = new Date("2018/07/22 23:00");
		// if (now.getTime() > next02_04.getTime()) {
		// 	$(eln02).attr("href","https://abema.tv/channels/special-plus/slots/EQtBJhJFFujmFM");
		// }






	// 03 初期
	var before03 = new Date("2018/07/22 23:00");
	if (now.getTime() > before03.getTime()) {
		$(elv03).text('今すぐ視聴する');
		$(elv03).attr("href","https://abema.tv/channels/special-plus/slots/EQtBJhJFFujmFM");
	}

	// ビデオ
	var change03 = new Date("2018/10/25 23:00");
	if (now.getTime() > change03.getTime()) {
		$(dd_03).show();
		$(elv03).text('ビデオを視聴する');
		$(elv03).href = "https://abema.tv/video/title/26-52";
	}
	// 無料文言
	var time03 = new Date("2018/10/20");
	var mon03 = time03.getTime()-now.getTime();
	var day03  = Math.floor(mon03/(1000*60*60*24)); // カウントダウン用 '日' 取得
	$(d03).html(day03+1);
	if (now.getTime() > time03.getTime()) {
		$(dd_03).show();
	}
	// 無料文言削除
	var timeOut03 = new Date("2018/10/21");
	if (now.getTime() > timeOut03.getTime()) {
		$(dd_03).hide();
	}
	// 削除
	// var out03 = new Date("2018/09/21 23:00");
	// if (now.getTime() > out03.getTime()) {
	// 	$(elv03).hide();
	// }

		// tn 最新 #2
		// var next03_02 = new Date("2018/07/22 23:00");
		// if (now.getTime() > next03_02.getTime()) {
		// 	$(eln03).attr("href","https://abema.tv/channels/special-plus/slots/EQtBJhJFFujmFM");
		// }
		// 最新 #3
		// var next03_03 = new Date("2018/07/22 23:00");
		// if (now.getTime() > next03_03.getTime()) {
		// 	$(eln03).attr("href","https://abema.tv/channels/special-plus/slots/EQtBJhJFFujmFM");
		// }
		// 最新 #4
		// var next03_04 = new Date("2018/07/22 23:00");
		// if (now.getTime() > next03_04.getTime()) {
		// 	$(eln03).attr("href","https://abema.tv/channels/special-plus/slots/EQtBJhJFFujmFM");
		// }
});
