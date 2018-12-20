$(document).ready(function() {
	var now = new Date();


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
