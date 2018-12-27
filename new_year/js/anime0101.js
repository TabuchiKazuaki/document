$(document).ready(function() {
	var now = new Date();
	// 01 遷移先 放送前
	// var bf01 = new Date("2018/11/11");
	// if (now.getTime() > bf01.getTime()) {
	// 	$('#a_01').text('視聴予約する');
	// 	$('#a_01').attr("href","");
	// }
	// // 遷移先 放送後 ビデオ
	// var bf01 = new Date("");
	// if (now.getTime() > bf01.getTime()) {
	// 	$('#a_01').text('ビデオを見る');
	// 	$('#a_01').attr("href","");
	// }
	 // 02 前
	 var bf02 = new Date("2018/11/06");
	 if (now.getTime() > bf02.getTime()) {
		$('#a_02').text('視聴予約する');
		$('#a_02').attr("href","https://abema.tv/channels/abema-anime/slots/CgGCPRhhYdUJST");
	 }
	 // 後
	 var bf02 = new Date("2019/01/01 13:50");
	 if (now.getTime() > bf02.getTime()) {
		$('#a_02').text('詳細を見る');
	 }

	 // 03 前
	 var bf03 = new Date("2018/11/06");
	 if (now.getTime() > bf03.getTime()) {
		$('#a_03').text('視聴予約する');
		$('#a_03').attr("href","https://abema.tv/channels/anime-live/slots/8EzQGgnc5a2Pz7");
	 }
	 // 後
	 var bf03 = new Date("2019/01/01 20:57");
	 if (now.getTime() > bf03.getTime()) {
		$('#a_03').text('ビデオを見る');
		$('#a_03').attr("href","https://abema.tv/video/title/25-2xrwzkrsieb");
	 }

	 // 04 前
	 var bf04 = new Date("2018/11/06");
	 if (now.getTime() > bf04.getTime()) {
		$('#a_04').text('視聴予約する');
		$('#a_04').attr("href","https://abema.tv/channels/everybody-anime/slots/B6fegofvWSwnB9");
	 }
	 // 後
	 var bf04 = new Date("2019/01/01 22:00");
	 if (now.getTime() > bf04.getTime()) {
		$('#a_04').text('ビデオを見る');
		$('#a_04').attr("href","https://abema.tv/video/title/12-17");
	 }

	 // 05 前
	 var bf05 = new Date("2018/11/06");
	 if (now.getTime() > bf05.getTime()) {
		$('#a_05').text('視聴予約する');
		$('#a_05').attr("href","https://abema.tv/channels/abema-anime/slots/CWxXRgSwCFgzPh");
	 }
	 // 後
	 var bf05 = new Date("2019/01/01 21:00");
	 if (now.getTime() > bf05.getTime()) {
		$('#a_05').text('ビデオを見る');
		$('#a_05').attr("href","https://abema.tv/video/title/26-40");
	 }

	  // 06 前
	 var bf06 = new Date("2018/11/06");
	 if (now.getTime() > bf06.getTime()) {
		$('#a_06').text('視聴予約する');
		$('#a_06').attr("href","https://abema.tv/channels/abema-anime/slots/9k3PkBmmfuMsbd");
	 }
	 // 後
	 var bf06 = new Date("2019/01/01 21:15");
	 if (now.getTime() > bf06.getTime()) {
		$('#a_06').text('ビデオを見る');
		$('#a_06').attr("href","https://abema.tv/video/title/26-40");
	 }

	  // 07 前
	 var bf07 = new Date("2018/11/06");
	 if (now.getTime() > bf07.getTime()) {
		$('#a_07').text('視聴予約する');
		$('#a_07').attr("href","https://abema.tv/channels/anime-live/slots/F25UimGAhDrTPu");
	 }
	 // 後
	 var bf07 = new Date("2019/01/01 22:38");
	 if (now.getTime() > bf07.getTime()) {
		$('#a_07').text('ビデオを見る');
		$('#a_07').attr("href","https://abema.tv/video/title/25-101");
	 }

});
