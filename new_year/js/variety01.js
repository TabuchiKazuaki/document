$(document).ready(function() {
	var now = new Date();
	// 01 遷移先 放送前
	var bf01 = new Date("2018/11/06");
	if (now.getTime() > bf01.getTime()) {
		$('#a_01').text('視聴予約する');
		$('#a_01').attr("href","https://abema.tv/channels/abema-special/slots/ARD2kt7idhbJ1D");
	}
	// 遷移先 放送後 ビデオ
	var bf01 = new Date("2019/01/01 20:00");
	if (now.getTime() > bf01.getTime()) {
		$('#a_01').text('ビデオを見る');
		$('#a_01').attr("href","https://abema.tv/video/title/90-980");
	}
	 // 02 前
	 var bf02 = new Date("2018/11/06");
	 if (now.getTime() > bf02.getTime()) {
		$('#a_02').text('視聴予約する');
		$('#a_02').attr("href","https://abema.tv/channels/abema-special/slots/98hy7rUfgqPLLw");
	 }
	 // 後
	 var bf02 = new Date("2018/12/30 22:00:00");
	 if (now.getTime() > bf02.getTime()) {
		$('#a_02').text('ビデオを見る');
		$('#a_02').attr("href","https://abema.tv/video/title/90-493");
	 }

	 // 03 前
	 var bf03 = new Date("2018/11/06");
	 if (now.getTime() > bf03.getTime()) {
		$('#a_03').text('視聴予約する');
		$('#a_03').attr("href","https://abema.tv/channels/special-plus/slots/C42MtQgYSKjixw");
	 }
	 // 後
	 var bf03 = new Date("2019/1/3 00:00");
	 if (now.getTime() > bf03.getTime()) {
		$('#a_03').text('ビデオを見る');
		$('#a_03').attr("href","https://abema.tv/video/title/90-1147");
	 }

	 // 04 前
	 var bf04 = new Date("2018/11/06");
	 if (now.getTime() > bf04.getTime()) {
		$('#a_04').text('視聴予約する');
		$('#a_04').attr("href","https://abema.tv/channels/abema-special/slots/CEfYhWsHoBZHsD");
	 }
	 // 後
	 var bf04 = new Date("2018/12/29 00:00");
	 if (now.getTime() > bf04.getTime()) {
		$('#a_04').text('ビデオを見る');
		$('#a_04').attr("href","https://abema.tv/video/title/90-1202");
	 }

	 // 05 前
	 var bf05 = new Date("2018/11/06");
	 if (now.getTime() > bf05.getTime()) {
		$('#a_05').text('視聴予約する');
		$('#a_05').attr("href","https://abema.tv/channels/abema-special/slots/C42Mw8w3843iSs");
	 }
	 // 後
	 var bf05 = new Date("2019/01/03 00:00");
	 if (now.getTime() > bf05.getTime()) {
		$('#a_05').text('ビデオを見る');
		$('#a_05').attr("href","https://abema.tv/video/title/90-1081");
	 }

	// 06 前
	var bf06 = new Date("2018/11/06");
		if (now.getTime() > bf06.getTime()) {
		$('#a_06').text('視聴予約する');
		$('#a_06').attr("href","https://abema.tv/channels/abema-special/slots/BVK26h8DHTmDQT");
	}
	// 後
	var bf06 = new Date("2018/12/27 23:00");
		if (now.getTime() > bf06.getTime()) {
		$('#a_06').text('ビデオを見る');
		$('#a_06').attr("href","https://abema.tv/video/title/90-1120");
	}

	// 07 前
	var bf07 = new Date("2018/11/06");
		if (now.getTime() > bf07.getTime()) {
		$('#a_07').text('視聴予約する');
		$('#a_07').attr("href","https://abema.tv/channels/abema-special/slots/C42Mw9CyhF7wmZ");
	}
	// 後
	var bf07 = new Date("2019/01/03 23:00");
		if (now.getTime() > bf07.getTime()) {
		$('#a_07').text('ビデオを見る');
		$('#a_07').attr("href","https://abema.tv/video/title/90-1120");
	}




	// 08 前
	var bf08 = new Date("2018/11/06");
		if (now.getTime() > bf08.getTime()) {
		$('#a_08').text('視聴予約する');
		$('#a_08').attr("href","https://abema.tv/channels/abema-special/slots/F8yckYySN4jPbM");
	}
	// 後
	var bf08 = new Date("2018/12/28 23:00");
		if (now.getTime() > bf08.getTime()) {
		$('#a_08').text('ビデオを見る');
		$('#a_08').attr("href","https://abema.tv/video/title/90-1172");
	}

	// 09 前
	var bf09 = new Date("2018/11/06");
		if (now.getTime() > bf09.getTime()) {
		$('#a_09').text('視聴予約する');
		$('#a_09').attr("href","https://abema.tv/channels/asia-drama/slots/B6feivHuZMVyxB");
	}
	// 後1/4 23:00
	var bf09 = new Date("2019/01/04 23:00");
		if (now.getTime() > bf09.getTime()) {
		$('#a_09').text('ビデオを見る');
		$('#a_09').attr("href","https://abema.tv/video/title/90-1172");
	}

	// 10 前
	var bf10 = new Date("2018/11/06");
		if (now.getTime() > bf10.getTime()) {
		$('#a_10').text('視聴予約する');
		$('#a_10').attr("href","https://abema.tv/channels/abema-special/slots/98hy8mpPJSCYto");
	}
	// 後
	var bf10 = new Date("2019/01/05 00:00");
		if (now.getTime() > bf10.getTime()) {
		$('#a_10').text('ビデオを見る');
		$('#a_10').attr("href","https://abema.tv/video/title/90-765");
	}

	// 11 前
	var bf11 = new Date("2018/11/06");
		if (now.getTime() > bf11.getTime()) {
		$('#a_11').text('視聴予約する');
		$('#a_11').attr("href","https://abema.tv/channels/abema-special/slots/9z3UqXd55FjPuq");
	}
	// 後
	var bf11 = new Date("2018/12/29 00:00");
		if (now.getTime() > bf11.getTime()) {
		$('#a_11').text('ビデオを見る');
		$('#a_11').attr("href","https://abema.tv/video/title/90-995");
	}


	// 12 前
	var bf12 = new Date("2018/11/06");
		if (now.getTime() > bf12.getTime()) {
		$('#a_12').text('視聴予約する');
		$('#a_12').attr("href","https://abema.tv/channels/abema-special/slots/98hy95aChZ5XgK");
	}
	// 後
	var bf12 = new Date("2019/01/05 00:00");
		if (now.getTime() > bf12.getTime()) {
		$('#a_12').text('ビデオを見る');
		$('#a_12').attr("href","https://abema.tv/video/title/90-1171");
	}

	// 13 前
	var bf13 = new Date("2018/11/06");
		if (now.getTime() > bf13.getTime()) {
		$('#a_13').text('視聴予約する');
		$('#a_13').attr("href","https://abema.tv/channels/abema-special/slots/98hy7FKKxVoEiK");
	}
	// 後
	var bf13 = new Date("2019/01/06 22:00");
		if (now.getTime() > bf13.getTime()) {
		$('#a_13').text('ビデオを見る');
		$('#a_13').attr("href","https://abema.tv/video/title/90-493");
	}

	// 14 前
	var bf14 = new Date("2018/11/06");
		if (now.getTime() > bf14.getTime()) {
		$('#a_14').text('視聴予約する');
		$('#a_14').attr("href","https://abema.tv/channels/abema-special/slots/98hyAbPxbdzb1H");
	}
	// 後
	var bf14 = new Date("2019/01/06 23:30");
		if (now.getTime() > bf14.getTime()) {
		$('#a_14').text('ビデオを見る');
		$('#a_14').attr("href","https://abema.tv/video/title/90-978");
	}



});
