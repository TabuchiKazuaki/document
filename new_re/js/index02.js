$(document).ready(function() {
	var now = new Date();
	var elv04 = document.getElementById('tv_04');
	var eln04 = document.getElementById('tn_04');
	var elv05 = document.getElementById('tv_05');
	var eln05 = document.getElementById('tn_05');
	var elv06 = document.getElementById('tv_06');
	var eln06 = document.getElementById('tn_06');
	var elv07 = document.getElementById('tv_07');
	var eln07 = document.getElementById('tn_07');
	var elv08 = document.getElementById('tv_08');
	var eln08 = document.getElementById('tn_08');
	var elv09 = document.getElementById('tv_09');
	var eln09 = document.getElementById('tn_09');

	// 04 初期
	var before04 = new Date("2018/07/22 23:00");
	if (now.getTime() > before04.getTime()) {
		$(elv04).text('今すぐ視聴する');
		$(elv04).attr("href","https://abema.tv/channels/asia-drama/slots/EQtBHnLNjDqBV1");
	}
	// ビデオ
	var change04 = new Date("2018/10/20 23:00");
	if (now.getTime() > change04.getTime()) {
		$(elv04).href = "https://abema.tv/video/title/26-52";
	}
	// 無料文言
	var time04 = new Date("2018/10/20");
	var mon04 = time04.getTime()-now.getTime();
	var day04  = Math.floor(mon04/(1000*60*60*24)); // カウントダウン用 '日' 取得
	$(d04).html(day04+1);
	if (now.getTime() > time04.getTime()) {
		$(dd_04).show();
	}
	// 無料文言削除
	var timeOut04 = new Date("2018/10/21");
	if (now.getTime() > timeOut04.getTime()) {
		$(dd_04).hide();
	}
	// 削除
	// var out04 = new Date("2018/09/21 23:00");
	// if (now.getTime() > out04.getTime()) {
	// 	$(elv04).hide();
	// }
		// tn 最新 #2
		// var next04_02 = new Date("2018/07/22 23:00");
		// if (now.getTime() > next04_02.getTime()) {
		// 	$(eln04).attr("href","https://abema.tv/channels/asia-drama/slots/EQtBHnLNjDqBV1");
		// }
		// 最新 #3
		// var next04_03 = new Date("2018/07/22 23:00");
		// if (now.getTime() > next04_03.getTime()) {
		// 	$(eln04).attr("href","https://abema.tv/channels/asia-drama/slots/EQtBHnLNjDqBV1");
		// }
		// 最新 #4
		// var next04_04 = new Date("2018/07/22 23:00");
		// if (now.getTime() > next04_04.getTime()) {
		// 	$(eln04).attr("href","https://abema.tv/channels/asia-drama/slots/EQtBHnLNjDqBV1");
		// }




	// 05 初期
	var before05 = new Date("2018/07/22 23:00");
	if (now.getTime() > before05.getTime()) {
		$(elv05).text('今すぐ視聴する');
		$(elv05).attr("href","https://abema.tv/channels/asia-drama/slots/EQtBHnLNjDqBV1");
	}
	// ビデオ
	var change05 = new Date("2018/10/20 23:00");
	if (now.getTime() > change05.getTime()) {
		$(elv05).href = "https://abema.tv/video/title/26-52";
	}
	// 無料文言
	var time05 = new Date("2018/10/20");
	var mon05 = time05.getTime()-now.getTime();
	var day05  = Math.floor(mon05/(1000*60*60*24)); // カウントダウン用 '日' 取得
	$(d05).html(day05+1);
	if (now.getTime() > time05.getTime()) {
		$(dd_05).show();
	}
	// 無料文言削除
	var timeOut05 = new Date("2018/10/21");
	if (now.getTime() > timeOut05.getTime()) {
		$(dd_05).hide();
	}
	// 削除
	// var out05 = new Date("2018/09/21 23:00");
	// if (now.getTime() > out05.getTime()) {
	// 	$(elv05).hide();
	// }
		// tn 最新 #2
		// var next05_02 = new Date("2018/07/22 23:00");
		// if (now.getTime() > next05_02.getTime()) {
		// 	$(eln05).attr("href","https://abema.tv/channels/asia-drama/slots/EQtBHnLNjDqBV1");
		// }
		// 最新 #3
		// var next05_03 = new Date("2018/07/22 23:00");
		// if (now.getTime() > next05_03.getTime()) {
		// 	$(eln05).attr("href","https://abema.tv/channels/asia-drama/slots/EQtBHnLNjDqBV1");
		// }
		// 最新 #4
		// var next05_04 = new Date("2018/07/22 23:00");
		// if (now.getTime() > next05_04.getTime()) {
		// 	$(eln05).attr("href","https://abema.tv/channels/asia-drama/slots/EQtBHnLNjDqBV1");
		// }






	// 06 初期
	var before06 = new Date("2018/07/22 23:00");
	if (now.getTime() > before06.getTime()) {
		$(elv06).text('今すぐ視聴する');
		$(elv06).attr("href","https://abema.tv/channels/asia-drama/slots/EQtBHnLNjDqBV1");
	}
	// ビデオ
	var change06 = new Date("2018/10/20 23:00");
	if (now.getTime() > change06.getTime()) {
		$(elv06).href = "https://abema.tv/video/title/26-52";
	}
	// 無料文言
	var time06 = new Date("2018/10/20");
	var mon06 = time06.getTime()-now.getTime();
	var day06  = Math.floor(mon06/(1000*60*60*24)); // カウントダウン用 '日' 取得
	$(d06).html(day06+1);
	if (now.getTime() > time06.getTime()) {
		$(dd_06).show();
	}
	// 無料文言削除
	var timeOut06 = new Date("2018/10/21");
	if (now.getTime() > timeOut06.getTime()) {
		$(dd_06).hide();
	}
	// 削除
	// var out06 = new Date("2018/09/21 23:00");
	// if (now.getTime() > out06.getTime()) {
	// 	$(elv06).hide();
	// }
		// tn 最新 #2
		// var next06_02 = new Date("2018/07/22 23:00");
		// if (now.getTime() > next06_02.getTime()) {
		// 	$(eln06).attr("href","https://abema.tv/channels/asia-drama/slots/EQtBHnLNjDqBV1");
		// }
		// 最新 #3
		// var next06_03 = new Date("2018/07/22 23:00");
		// if (now.getTime() > next06_03.getTime()) {
		// 	$(eln06).attr("href","https://abema.tv/channels/asia-drama/slots/EQtBHnLNjDqBV1");
		// }
		// 最新 #4
		// var next06_04 = new Date("2018/07/22 23:00");
		// if (now.getTime() > next06_04.getTime()) {
		// 	$(eln06).attr("href","https://abema.tv/channels/asia-drama/slots/EQtBHnLNjDqBV1");
		// }




	// 07 初期
	var before07 = new Date("2018/07/22 23:00");
	if (now.getTime() > before07.getTime()) {
		$(elv07).text('今すぐ視聴する');
		$(elv07).attr("href","https://abema.tv/channels/asia-drama/slots/EQtBHnLNjDqBV1");
	}

	// ビデオ
	var change07 = new Date("2018/10/20 23:00");
	if (now.getTime() > change07.getTime()) {
		$(elv07).href = "https://abema.tv/video/title/26-52";
	}
	// 無料文言
	var time07 = new Date("2018/10/20");
	var mon07 = time07.getTime()-now.getTime();
	var day07  = Math.floor(mon07/(1000*60*60*24)); // カウントダウン用 '日' 取得
	$(d07).html(day07+1);
	if (now.getTime() > time07.getTime()) {
		$(dd_07).show();
	}
	// 無料文言削除
	var timeOut07 = new Date("2018/10/21");
	if (now.getTime() > timeOut07.getTime()) {
		$(dd_07).hide();
	}
	// 削除
	// var out07 = new Date("2018/09/21 23:00");
	// if (now.getTime() > out07.getTime()) {
	// 	$(elv07).hide();
	// }
		// tn 最新 #2
		// var next07_02 = new Date("2018/07/22 23:00");
		// if (now.getTime() > next07_02.getTime()) {
		// 	$(eln07).attr("href","https://abema.tv/channels/asia-drama/slots/EQtBHnLNjDqBV1");
		// }
		// 最新 #3
		// var next07_03 = new Date("2018/07/22 23:00");
		// if (now.getTime() > next07_03.getTime()) {
		// 	$(eln07).attr("href","https://abema.tv/channels/asia-drama/slots/EQtBHnLNjDqBV1");
		// }
		// 最新 #4
		// var next07_04 = new Date("2018/07/22 23:00");
		// if (now.getTime() > next07_04.getTime()) {
		// 	$(eln07).attr("href","https://abema.tv/channels/asia-drama/slots/EQtBHnLNjDqBV1");
		// }






	// 08 初期
	var before08 = new Date("2018/07/22 23:00");
	if (now.getTime() > before08.getTime()) {
		$(elv08).text('今すぐ視聴する');
		$(elv08).attr("href","https://abema.tv/channels/asia-drama/slots/EQtBHnLNjDqBV1");
	}
	// ビデオ
	var change08 = new Date("2018/10/20 23:00");
	if (now.getTime() > change08.getTime()) {
		$(elv08).href = "https://abema.tv/video/title/26-52";
	}
	// 無料文言
	var time08 = new Date("2018/10/20");
	var mon08 = time08.getTime()-now.getTime();
	var day08  = Math.floor(mon08/(1000*60*60*24)); // カウントダウン用 '日' 取得
	$(d08).html(day08+1);
	if (now.getTime() > time08.getTime()) {
		$(dd_08).show();
	}
	// 無料文言削除
	var timeOut08 = new Date("2018/10/21");
	if (now.getTime() > timeOut08.getTime()) {
		$(dd_08).hide();
	}
	// 削除
	// var out08 = new Date("2018/09/21 23:00");
	// if (now.getTime() > out08.getTime()) {
	// 	$(elv08).hide();
	// }

		// tn 最新 #2
		// var next08_02 = new Date("2018/07/22 23:00");
		// if (now.getTime() > next08_02.getTime()) {
		// 	$(eln08).attr("href","https://abema.tv/channels/asia-drama/slots/EQtBHnLNjDqBV1");
		// }
		// 最新 #3
		// var next08_03 = new Date("2018/07/22 23:00");
		// if (now.getTime() > next08_03.getTime()) {
		// 	$(eln08).attr("href","https://abema.tv/channels/asia-drama/slots/EQtBHnLNjDqBV1");
		// }
		// 最新 #4
		// var next08_04 = new Date("2018/07/22 23:00");
		// if (now.getTime() > next08_04.getTime()) {
		// 	$(eln08).attr("href","https://abema.tv/channels/asia-drama/slots/EQtBHnLNjDqBV1");
		// }




	// 09 初期
	var before09 = new Date("2018/07/22 23:00");
	if (now.getTime() > before09.getTime()) {
		$(elv09).text('今すぐ視聴する');
		$(elv09).attr("href","https://abema.tv/channels/asia-drama/slots/EQtBHnLNjDqBV1");
	}
	// ビデオ
	var change09 = new Date("2018/10/20 23:00");
	if (now.getTime() > change09.getTime()) {
		$(elv09).href = "https://abema.tv/video/title/26-52";
	}
	// 無料文言
	var time09 = new Date("2018/10/20");
	var mon09 = time09.getTime()-now.getTime();
	var day09  = Math.floor(mon09/(1000*60*60*24)); // カウントダウン用 '日' 取得
	$(d09).html(day09+1);
	if (now.getTime() > time09.getTime()) {
		$(dd_09).show();
	}
	// 無料文言削除
	var timeOut09 = new Date("2018/10/21");
	if (now.getTime() > timeOut09.getTime()) {
		$(dd_09).hide();
	}
	// 削除
	// var out09 = new Date("2018/09/21 23:00");
	// if (now.getTime() > out09.getTime()) {
	// 	$(elv09).hide();
	// }

		// tn 最新 #2
		// var next09_02 = new Date("2018/07/22 23:00");
		// if (now.getTime() > next09_02.getTime()) {
		// 	$(eln09).attr("href","https://abema.tv/channels/asia-drama/slots/EQtBHnLNjDqBV1");
		// }
		// 最新 #3
		// var next09_03 = new Date("2018/07/22 23:00");
		// if (now.getTime() > next09_03.getTime()) {
		// 	$(eln09).attr("href","https://abema.tv/channels/asia-drama/slots/EQtBHnLNjDqBV1");
		// }
		// 最新 #4
		// var next09_04 = new Date("2018/07/22 23:00");
		// if (now.getTime() > next09_04.getTime()) {
		// 	$(eln09).attr("href","https://abema.tv/channels/asia-drama/slots/EQtBHnLNjDqBV1");
		// }
});
