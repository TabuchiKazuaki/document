$(document).ready(function() {
	var now = new Date();
	// 01 遷移先 放送前
	var bf01 = new Date("2018/11/06");
	if (now.getTime() > bf01.getTime()) {
		$('#a_01').text('視聴予約する');
		$('#a_01').attr("href","https://abema.tv/channels/abema-special/slots/C42MuKg5kcntrb");
	}
	// 遷移先 放送後 ビデオ
	var bf01 = new Date("2018/12/30 00:00");
	if (now.getTime() > bf01.getTime()) {
		$('#a_01').text('ビデオを見る');
		$('#a_01').attr("href","https://abema.tv/video/title/90-1182");
	}
	 // 02 前
	 var bf02 = new Date("2018/11/06");
	 if (now.getTime() > bf02.getTime()) {
		$('#a_02').text('視聴予約する');
		$('#a_02').attr("href","https://abema.tv/channels/abema-special/slots/B2i3uhkDKsy7j5");
	 }
	 // 後
	 var bf02 = new Date("2018/12/29 23:00");
	 if (now.getTime() > bf02.getTime()) {
		$('#a_02').text('ビデオを見る');
		$('#a_02').attr("href","https://abema.tv/video/title/90-1170");
	 }

	 // 03 前
	 var bf03 = new Date("2018/11/06");
	 if (now.getTime() > bf03.getTime()) {
		$('#a_03').text('視聴予約する');
		$('#a_03').attr("href","https://abema.tv/channels/special-plus-2/slots/98hy9PCdbu7zY7");
	 }
	 // 後
	 var bf03 = new Date("2018/12/29 23:00")
	 if (now.getTime() > bf03.getTime()) {
		$('#a_03').text('ビデオを見る');
		$('#a_03').attr("href","https://abema.tv/video/title/90-1116");
	 }

	 // 04 前
	 var bf04 = new Date("2018/11/06");
	 if (now.getTime() > bf04.getTime()) {
		$('#a_04').text('視聴予約する');
		$('#a_04').attr("href","https://abema.tv/channels/abema-special/slots/9z3UqXd55FjPuq");
	 }
	 // 後
	 var bf04 = new Date("2018/12/30 01:00");
	 if (now.getTime() > bf04.getTime()) {
		$('#a_04').text('ビデオを見る');
		$('#a_04').attr("href","https://abema.tv/video/title/90-995");
	 }

	  // 05 前
	 var bf05 = new Date("2018/11/06");
	 if (now.getTime() > bf05.getTime()) {
		$('#a_05').text('視聴予約する');
		$('#a_05').attr("href","---");
	 }
	 // 後
	 var bf05 = new Date("2018/12/27 23:00");
	 if (now.getTime() > bf05.getTime()) {
		$('#a_05').text('ビデオを見る');
		$('#a_05').attr("href","---");
	 }
});
