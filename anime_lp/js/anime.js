$(document).ready(function() {
	var now = new Date();
	var ele01 = document.getElementById('s_01');
	var ele02 = document.getElementById('s_02');
	var ele03 = document.getElementById('s_03');
	var ele04 = document.getElementById('s_04');
	var ele05 = document.getElementById('s_05');
	var ele06 = document.getElementById('s_06');
	var ele07 = document.getElementById('s_07');
	var ele08 = document.getElementById('s_08');
	var ele09 = document.getElementById('s_09');
	var ele10 = document.getElementById('s_10');
	var ele11 = document.getElementById('s_11');
	var ele12 = document.getElementById('s_12');
	// 01
	var out01 = new Date("2018/03/22 23:00");
	if (now.getTime() > out01.getTime()) {
		ele01.href = "https://abema.tv/video/title/26-52";
		$("#d_01").hide();
	}

	// 02
	var out02 = new Date("2018/03/22 00:00");
	if (now.getTime() > out02.getTime()) {
		ele02.href = "https://abema.tv/video/title/26-54";
		$("#d_02").hide();
	}

	// 03
	var out03 = new Date("2018/03/23 00:35");
	if (now.getTime() > out03.getTime()) {
		ele03.href = "https://abema.tv/video/title/409-3";
		$("#d_03").hide();
	}
	// 04
	var out04 = new Date("2018/03/22 23:00");
	if (now.getTime() > out04.getTime()) {
		ele04.href = "https://abema.tv/video/title/54-18";
		$("#d_04").hide();
	}
	// 05
	var out05 = new Date("2018/03/23 23:30");
	if (now.getTime() > out05.getTime()) {
		ele05.href = "https://abema.tv/video/title/218-58";
		$("#d_05").hide();
	}
	// 06
	var out06 = new Date("2018/03/21 18:00");
	if (now.getTime() > out06.getTime()) {
		ele06.href = "https://abema.tv/video/title/26-50";
		$("#d_06").hide();
	}
	// 07
	var out07 = new Date("2018/03/21 00:50");
	if (now.getTime() > out07.getTime()) {
		ele07.href = "https://abema.tv/video/title/30-7";
		$("#d_07").hide();
	}
	// 08
	var out08 = new Date("2018/03/23 00:50");
	if (now.getTime() > out08.getTime()) {
		ele08.href = "https://abema.tv/video/title/26-39";
		$("#d_08").hide();
	}
	// 09
	var out09 = new Date("2018/03/21 12:30");
	if (now.getTime() > out09.getTime()) {
		ele09.href = "https://abema.tv/video/title/12-2mchatusn-h";
		$("#d_09").hide();
	}
	// 10
	var out10 = new Date("2018/03/21 21:00");
	if (now.getTime() > out10.getTime()) {
		ele10.href = "https://abema.tv/video/title/35-9ktacxeimpu";
		$("#d_10").hide();
	}
	// 11
	var out11 = new Date("2018/03/21 23:30");
	if (now.getTime() > out11.getTime()) {
		ele11.href = "https://abema.tv/video/title/420-5";
		$("#d_11").hide();
	}
	// 12
	var out12 = new Date("2018/03/21 21:00");
	if (now.getTime() > out12.getTime()) {
		ele12.href = "https://abema.tv/video/title/2-7swizezassj";
		$("#d_12").hide();
	}

});
