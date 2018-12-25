$(document).ready(function() {
	var now = new Date();
	// 01 遷移先 放送前
	var bf01 = new Date("2018/11/06");
	if (now.getTime() > bf01.getTime()) {
		$('#a_01').text('視聴予約する');
		$('#a_01').attr("href","https://abema.tv/channels/abema-special/slots/ARD2kt7idhbJ1D");
	}
	// 遷移先 放送後 ビデオ
	var bf01 = new Date("2019/01/01 22:15");
	if (now.getTime() > bf01.getTime()) {
		$('#a_01').text('ビデオを見る');
		$('#a_01').attr("href","https://abema.tv/video/title/90-980");
		// $('#a_01').css({'background':'#ccc', 'border':'#ccc' , 'color':'#777'});
		$('#a_01').attr("href","--");
	}
	 // 02 前
	 var bf02 = new Date("2018/11/06");
	 if (now.getTime() > bf02.getTime()) {
		$('#a_02').text('視聴予約する');
		$('#a_02').attr("href","https://abema.tv/channels/aibo/slots/B734FPDcFtZFQb");
	 }
	 // 後
	 var bf02 = new Date("2019/01/01 21:00");
	 if (now.getTime() > bf02.getTime()) {
		$('#a_02').text('ビデオを見る');
		$('#a_02').attr("href","https://abema.tv/video/title/50-44");
	 }

	 // 03 前
	 var bf03 = new Date("2018/11/06");
	 if (now.getTime() > bf03.getTime()) {
		$('#a_03').text('視聴予約する');
		$('#a_03').attr("href","https://abema.tv/channels/abema-special/slots/98hy8A3pbhmzCX");
	 }
	 // 後
	 var bf03 = new Date("2019/01/02 0:15")
	 if (now.getTime() > bf03.getTime()) {
		$('#a_03').text('ビデオを見る');
		$('#a_03').attr("href","https://abema.tv/video/title/90-1139");
	 }

	 // 04 前
	 var bf04 = new Date("2018/11/06");
	 if (now.getTime() > bf04.getTime()) {
		$('#a_04').text('視聴予約する');
		$('#a_04').attr("href","https://abema.tv/channels/abema-special/slots/C42Mw8w3843iSs");
	 }
	 // 後
	 var bf04 = new Date("2019/01/01 14:30");
	 if (now.getTime() > bf04.getTime()) {
		$('#a_04').text('ビデオを見る');
		$('#a_04').attr("href","https://abema.tv/video/title/90-1081");
	 }

	  // 05 前
	 var bf05 = new Date("2018/11/06");
	 if (now.getTime() > bf05.getTime()) {
		$('#a_05').text('視聴予約する');
		$('#a_05').attr("href","https://abema.tv/channels/shogi/slots/9MiUecBs38JWYF");
	 }
	 // 後
	 var bf05 = new Date("2019/01/01 19:38");
	 if (now.getTime() > bf05.getTime()) {
		$('#a_05').text('ビデオを見る');
		$('#a_05').attr("href","https://abema.tv/video/title/288-14_s1_p5");
	 }

	// 06 前
	var bf06 = new Date("2018/11/06");
		if (now.getTime() > bf06.getTime()) {
		$('#a_06').text('視聴予約する');
		$('#a_06').attr("href","https://abema.tv/channels/asia-drama/slots/DMKC5UbNKhL7rP");
	}
	// 後
	var bf06 = new Date("2019/01/01 21:25");
		if (now.getTime() > bf06.getTime()) {
		$('#a_06').text('ビデオを見る');
		$('#a_06').attr("href","https://abema.tv/video/title/158-43_s0_p1");
	}

});
