$(document).ready(function() {
	var now = new Date();
	// 01 遷移先 放送前
	var bf01 = new Date("2018/11/11");
	if (now.getTime() > bf01.getTime()) {
		$('#a_01').text('視聴予約する');
		$('#a_01').attr("href","https://abema.tv/channels/abema-anime/slots/9k3PmhK5fRWuDq");
	}
	// 遷移先 放送後 ビデオ
	var bf01 = new Date("2018/12/28 20:40");
	if (now.getTime() > bf01.getTime()) {
		$('#a_01').text('ビデオを見る');
		$('#a_01').attr("href","https://abema.tv/video/title/199-24");
	}
	 // 02 前
	 var bf02 = new Date("2018/11/06");
	 if (now.getTime() > bf02.getTime()) {
		$('#a_02').text('視聴予約する');
		$('#a_02').attr("href","");
	 }
	 // 後
	 var bf02 = new Date("");
	 if (now.getTime() > bf02.getTime()) {
		$('#a_02').text('ビデオを見る');
		$('#a_02').attr("");
	 }

	 // 03 前
	 var bf03 = new Date("2018/11/06");
	 if (now.getTime() > bf03.getTime()) {
		$('#a_03').text('視聴予約する');
		$('#a_03').attr("href","https://abema.tv/channels/abema-anime/slots/CgjWhhFxUFDzRm");
	 }
	 // 後
	 var bf03 = new Date("");
	 if (now.getTime() > bf03.getTime()) {
		$('#a_03').text('ビデオを見る');
		$('#a_03').attr("href","");
	 }

	 // 04 前
	 var bf04 = new Date("2018/11/06");
	 if (now.getTime() > bf04.getTime()) {
		$('#a_04').text('視聴予約する');
		$('#a_04').attr("href","https://abema.tv/channels/anime-live/slots/FCAvQEfjqQLSjH");
	 }
	 // 後
	 var bf04 = new Date("2018/12/29 15:47");
	 if (now.getTime() > bf04.getTime()) {
		$('#a_04').text('ビデオを見る');
		$('#a_04').attr("href","https://abema.tv/video/title/19-24");
	 }

	 // 05 前
	 var bf05 = new Date("2018/11/06");
	 if (now.getTime() > bf05.getTime()) {
		$('#a_05').text('視聴予約する');
		$('#a_05').attr("href","https://abema.tv/channels/abema-anime/slots/FFtVW6Vh9CHPD1");
	 }
	 // 後
	 var bf05 = new Date("");
	 if (now.getTime() > bf05.getTime()) {
		$('#a_05').text('ビデオを見る');
		$('#a_05').attr("href","");
	 }

	 // 06 前
	 var bf06 = new Date("2018/11/06");
	 if (now.getTime() > bf06.getTime()) {
		$('#a_06').text('視聴予約する');
		$('#a_06').attr("href","https://abema.tv/channels/everybody-anime/slots/B6fefJKShvzTkb");
	 }
	 // 後
	 var bf06 = new Date("2018/12/29 21:40");
	 if (now.getTime() > bf06.getTime()) {
		$('#a_06').text('ビデオを見る');
		$('#a_06').attr("href","https://abema.tv/video/title/12-17");
	 }

	 // 07 前
	 var bf07 = new Date("2018/11/06");
	 if (now.getTime() > bf07.getTime()) {
		$('#a_07').text('視聴予約する');
		$('#a_07').attr("href","https://abema.tv/channels/everybody-anime2/slots/CfqqLKwnXB3VAP");
	 }
	 // 後
	 var bf07 = new Date("");
	 if (now.getTime() > bf07.getTime()) {
		$('#a_07').text('ビデオを見る');
		$('#a_07').attr("href","");
	 }
});
