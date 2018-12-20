$(document).ready(function() {
	var now = new Date();
	// 01 遷移先 放送前
	var bf01 = new Date("2018/11/06");
	if (now.getTime() > bf01.getTime()) {
		$('#a_01').text('視聴予約する');
		$('#a_01').attr("href","https://abema.tv/channels/abema-special/slots/C42MxNDP5mcW8X");
	}
	// 遷移先 放送後 ビデオ
	var bf01 = new Date("2019/01/01 00:00");
	if (now.getTime() > bf01.getTime()) {
		$('#a_01').text('ビデオを見る');
		$('#a_01').attr("href","https://abema.tv/video/title/90-1186");
	}
	 // 02 前
	 var bf02 = new Date("2018/11/06");
	 if (now.getTime() > bf02.getTime()) {
		$('#a_02').text('視聴予約する');
		$('#a_02').attr("href","https://abema.tv/channels/abema-special/slots/98hy8A3pbhmzCX");
	 }
	 // 後
	 var bf02 = new Date("2019/01/02 00:15");
	 if (now.getTime() > bf02.getTime()) {
		$('#a_02').text('ビデオを見る');
		$('#a_02').attr("href","https://abema.tv/video/title/90-1139");
	 }

	 // 03 前
	 var bf03 = new Date("2018/11/06");
	 if (now.getTime() > bf03.getTime()) {
		$('#a_03').text('視聴予約する');
		$('#a_03').attr("href","https://abema.tv/channels/abema-special/slots/AYGmVmPiCN1YYo");
	 }
	 // 後
	 var bf03 = new Date("2019/1/5 23:00");
	 if (now.getTime() > bf03.getTime()) {
		$('#a_03').text('ビデオを見る');
		$('#a_03').attr("href","https://abema.tv/video/title/90-1170");
	 }

	 // 04 前
	 var bf04 = new Date("2018/11/06");
	 if (now.getTime() > bf04.getTime()) {
		$('#a_04').text('視聴予約する');
		$('#a_04').attr("href","https://abema.tv/channels/abema-special/slots/C42MuKg5kcntrb");
	 }
	 // 後
	 var bf04 = new Date("2018/12/30 00:00");
	 if (now.getTime() > bf04.getTime()) {
		$('#a_04').text('ビデオを見る');
		$('#a_04').attr("href","https://abema.tv/video/title/90-1182");
	 }

	 // 05 前
	 var bf05 = new Date("2018/11/06");
	 if (now.getTime() > bf05.getTime()) {
		$('#a_05').text('視聴予約する');
		$('#a_05').attr("href","https://abema.tv/channels/abema-special/slots/B2i3uhkDKsy7j5");
	 }
	 // 後
	 var bf05 = new Date("2018/12/29 23:00");
	 if (now.getTime() > bf05.getTime()) {
		$('#a_05').text('ビデオを見る');
		$('#a_05').attr("href","https://abema.tv/video/title/90-1170");
	 }

	// 06 前
	var bf06 = new Date("2018/11/06");
		if (now.getTime() > bf06.getTime()) {
		$('#a_06').text('視聴予約する');
		$('#a_06').attr("href","https://abema.tv/channels/abema-special/slots/C42Mtijh5LkR6P");
	}
	// 後
	var bf06 = new Date("2019/01/06 00:00");
		if (now.getTime() > bf06.getTime()) {
		$('#a_06').text('ビデオを見る');
		$('#a_06').attr("href","https://abema.tv/video/title/90-1182");
	}

	// 07 前
	var bf07 = new Date("2018/11/06");
		if (now.getTime() > bf07.getTime()) {
		$('#a_07').text('視聴予約する');
		$('#a_07').attr("href","https://abema.tv/channels/abema-special/slots/BYye4f8Woz3yts");
	}
	// 後
	var bf07 = new Date("2018/12/30 23:00");
		if (now.getTime() > bf07.getTime()) {
		$('#a_07').text('ビデオを見る');
		$('#a_07').attr("href","https://abema.tv/video/title/90-1060");
	}

	// 08 前
	var bf08 = new Date("2018/11/06");
		if (now.getTime() > bf08.getTime()) {
		$('#a_08').text('視聴予約する');
		$('#a_08').attr("href","https://abema.tv/channels/abema-special/slots/C42MxMHwmFpHef");
	}
	// 後
	var bf08 = new Date("2019/01/06 23:00");
		if (now.getTime() > bf08.getTime()) {
		$('#a_08').text('ビデオを見る');
		$('#a_08').attr("href","https://abema.tv/video/title/90-1060");
	}

});
