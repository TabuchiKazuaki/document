$(document).ready(function() {
	var now = new Date();



	var elv01 = document.getElementById('tv_01');
	var eln01 = document.getElementById('tn_01');
	var d01 = document.getElementById('d_01');
	var elv02 = document.getElementById('tv_02');
	var eln02 = document.getElementById('tn_02');
	var d02 = document.getElementById('d_02');
	var elv03 = document.getElementById('tv_03');
	var eln03 = document.getElementById('tn_03');
	var d03 = document.getElementById('d_03');


	// 01 初期
	var before01 = new Date("2018/07/22 23:00");
	if (now.getTime() > before01.getTime()) {
		$(elv01).text('今すぐ視聴する');
		$(elv01).attr("href","https://abema.tv/channels/abema-special/slots/8uZLw1QBZamtkf");
	}
	// ビデオ
	var change01 = new Date("2018/10/08 23:59");
	if (now.getTime() > change01.getTime()) {
		$('#dd_01').show();
		$(elv01).text('ビデオを視聴する');
		$(elv01).attr("href","https://abema.tv/video/title/90-1141");
	}
	// 無料文言
	// var time01 = new Date("2018/10/15");
	// var mon01 = time01.getTime()-now.getTime();
	// var day01  = Math.floor(mon01/(1000*60*60*24)); // カウントダウン用 '日' 取得
	// $(d01).html(day01+2);
	// // 無料文言削除
	// var timeOut01 = new Date("2018/10/15 23:59");
	// if (now.getTime() > timeOut01.getTime()) {
	// 	$('#dd_01').hide();
	// }
	// ボタン削除
	// if (now.getTime() > out01.getTime()) {
	// 	$(elv01).hide();
	// }
		// tn 最新 #2
		var next01_02 = new Date("2018/10/08 23:59");
		if (now.getTime() > next01_02.getTime()) {
			$(eln01).attr("href","https://abema.tv/channels/abema-special/slots/CxN6pAWxbJed3d");
			$('#tn_01_s').text('2');
		}
		// 最新 #3
		// var next01_03 = new Date("2018/11/22 23:00");
		// if (now.getTime() > next01_03.getTime()) {
		// 	$(eln01).attr("href","https://abema.tv/channels/special-plus/slots/EQtBJhJFFujmFM");
		// }
		// 最新 #4
		// var next01_04 = new Date("2018/07/22 23:00");
		// if (now.getTime() > next01_04.getTime()) {
		// 	$(eln01).attr("href","https://abema.tv/channels/special-plus/slots/EQtBJhJFFujmFM");
		// }




	// 02 初期
	var before02 = new Date("2018/07/22 23:00");
	if (now.getTime() > before02.getTime()) {
		$(elv02).text('今すぐ視聴する');
		$(elv02).attr("href","https://abema.tv/channels/abema-anime/slots/8uZLv6hHRxoYXy");
	}
	// ビデオ
	var change02 = new Date("2018/10/01 19:30");
	if (now.getTime() > change02.getTime()) {
		$('#dd_02').show();
		$(elv02).text('ビデオを視聴する');
		$(elv02).attr("href","https://abema.tv/video/title/169-67");
	}
	// 無料文言
	// var time02 = new Date("2018/11/01");
	// var mon02 = time02.getTime()-now.getTime();
	// var day02  = Math.floor(mon02/(1000*60*60*24)); // カウントダウン用 '日' 取得
	// $(d02).html(day02+2);
	// if (now.getTime() > time02.getTime()) {
	// 	$('#dd_02').show();
	// }
	// // 無料文言削除
	// var timeOut02 = new Date("2018/11/01 23:59");
	// if (now.getTime() > timeOut02.getTime()) {
	// 	$('#dd_02').hide();
	// }
	// 削除
	// var out02 = new Date("2018/09/20 24:00");
	// if (now.getTime() > out02.getTime()) {
	// 	$(elv02).hide();
	// }

		// tn 最新 #2
		var next02_02 = new Date("2018/10/01 19:30");
		if (now.getTime() > next02_02.getTime()) {
			$(eln02).attr("href","https://abema.tv/channels/abema-anime/slots/ARD2oc6zNtvyu1");
			$('#tn_02_s').text('2');
		}
		// 最新 #3
		var next02_03 = new Date("2018/10/08 19:30");
		if (now.getTime() > next02_03.getTime()) {
			$(eln02).attr("href","https://abema.tv/channels/abema-anime/slots/9pGVZDpQ5hTfLB");
			$('#tn_02_s').text('3');
		}
		// 最新 #4
		var next02_04 = new Date("2018/10/15 19:30");
		if (now.getTime() > next02_04.getTime()) {
			$(eln02).attr("href","https://abema.tv/channels/abema-anime/slots/ARD2n6P7zFetzb");
			$('#tn_02_s').text('4');
		}
		// 最新 #5
		var next02_05 = new Date("2018/10/22 19:30");
		if (now.getTime() > next02_05.getTime()) {
			$(eln02).attr("href","https://abema.tv/channels/abema-anime/slots/9pGVaju3y1XE5M");
			$('#tn_02_s').text('5');
		}






	// 03 初期
	var before03 = new Date("2018/07/22 23:00");
	if (now.getTime() > before03.getTime()) {
		$(elv03).text('今すぐ視聴する');
		$(elv03).attr("href","https://abema.tv/channels/abema-anime/slots/EQtBGsqaNVfiF1");
	}

	// ビデオ
	var change03 = new Date("2018/10/09 00:00");
	if (now.getTime() > change03.getTime()) {
		$('#dd_03').show();
		$(elv03).text('ビデオを視聴する');
		$(elv03).attr("href","https://abema.tv/video/title/26-59");
	}
	// 無料文言
	// var time03 = new Date("2018/10/20");
	// var mon03 = time03.getTime()-now.getTime();
	// var day03  = Math.floor(mon03/(1000*60*60*24)); // カウントダウン用 '日' 取得
	// $(d03).html(day03+2);
	// if (now.getTime() > time03.getTime()) {
	// 	$('#dd_03').show();
	// }
	// // 無料文言削除
	// var timeOut03 = new Date("2018/10/21");
	// if (now.getTime() > timeOut03.getTime()) {
	// 	$('#dd_03').hide();
	// }
	// 削除
	// var out03 = new Date("2018/09/21 23:00");
	// if (now.getTime() > out03.getTime()) {
	// 	$(elv03).hide();
	// }

		// tn 最新 #2
		var next03_02 = new Date("2018/10/09 00:00");
		if (now.getTime() > next03_02.getTime()) {
			$(eln03).attr("href","https://abema.tv/channels/abema-anime/slots/9k3PifVCsGb7kj");
			$('#tn_03_s').text('2');
		}
		// 最新 #3
		var next03_03 = new Date("2018/10/16 00:00");
		if (now.getTime() > next03_03.getTime()) {
			$(eln03).attr("href","https://abema.tv/channels/abema-anime/slots/9pGVbxKSDiB6G7");
			$('#tn_03_s').text('3');
		}
		// 最新 #4
		var next03_04 = new Date("2018/10/23 00:00");
		if (now.getTime() > next03_04.getTime()) {
			$(eln03).attr("href","https://abema.tv/channels/abema-anime/slots/9pGVcFTPR4HgBH");
			$('#tn_03_s').text('4');
		}

});
