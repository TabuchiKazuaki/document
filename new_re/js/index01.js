$(document).ready(function() {
	var now = new Date();
	var elv01 = document.getElementById('tv_01');
	var eln01 = document.getElementById('tn_01');
	var elv02 = document.getElementById('tv_02');
	var eln02 = document.getElementById('tn_02');
	var elv03 = document.getElementById('tv_03');
	var eln03 = document.getElementById('tn_03');


	// 01 初期
	var before01 = new Date("2018/07/22 23:00");
	if (now.getTime() > before01.getTime()) {
		elv01.text('今すぐ視聴する');
		elv01.attr("href","https://abema.tv/channels/special-plus/slots/EQtBJhJFFujmFM");
	}
	// ビデオ
	var change01 = new Date("2018/10/20 23:00");
	if (now.getTime() > change01.getTime()) {
		elv01.href = "https://abema.tv/video/title/26-52";
	}
	// 削除
	var out01 = new Date("2018/010/20 23:00");
	if (now.getTime() > out01.getTime()) {
		elv01.hide();
	}

	// 02 初期
	var before02 = new Date("2018/07/22 23:00");
	if (now.getTime() > before02.getTime()) {
		elv02.text('今すぐ視聴する');
		elv02.attr("href","https://abema.tv/channels/special-plus/slots/EQtBJhJFFujmFM");
	}
	// ビデオ
	var change02 = new Date("2018/10/20 23:00");
	if (now.getTime() > change02.getTime()) {
		elv02.href = "https://abema.tv/video/title/26-52";
	}
	// 削除
	var out02 = new Date("2018/010/20 23:00");
	if (now.getTime() > out02.getTime()) {
		elv02.hide();
	}

	// 03 初期
	var before03 = new Date("2018/07/22 23:00");
	if (now.getTime() > before03.getTime()) {
		elv03.text('今すぐ視聴する');
		elv03.attr("href","https://abema.tv/channels/special-plus/slots/EQtBJhJFFujmFM");
	}
	// ビデオ
	var change03 = new Date("2018/10/20 23:00");
	if (now.getTime() > change03.getTime()) {
		elv03.href = "https://abema.tv/video/title/26-52";
	}
	// 削除
	var out03 = new Date("2018/010/20 23:00");
	if (now.getTime() > out03.getTime()) {
		elv03.hide();
	}



});
