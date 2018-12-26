$(document).ready(function() {
	var now = new Date();
	// 01 遷移先 放送前
	var bf01 = new Date("2018/11/11");
	if (now.getTime() > bf01.getTime()) {
		$('#a_01').text('視聴予約する');
		$('#a_01').attr("href","https://abema.tv/channels/abema-anime-2/slots/DaBaQtARoNcNJj");
	}
	// 遷移先 放送後 ビデオ
	var bf01 = new Date("2018/12/27 01:00");
	if (now.getTime() > bf01.getTime()) {
		$('#a_01').text('ビデオを見る');
		$('#a_01').attr("href","https://abema.tv/video/title/26-36");
	}
	 // 02 前
	 var bf02 = new Date("2018/11/06");
	 if (now.getTime() > bf02.getTime()) {
		$('#a_02').text('視聴予約する');
		$('#a_02').attr("href","https://abema.tv/channels/abema-anime/slots/BihgAda8DGEDew");
	 }
	 // 後
	 var bf02 = new Date("2018/12/27 13:27");
	 if (now.getTime() > bf02.getTime()) {
		$('#a_02').text('詳細を見る');
	 }

	 // 03 前
	 var bf03 = new Date("2018/11/06");
	 if (now.getTime() > bf03.getTime()) {
		$('#a_03').text('視聴予約する');
		$('#a_03').attr("href","https://abema.tv/channels/abema-anime-2/slots/AYvR6iUKq5rSW3");
	 }
	 // 後
	 var bf03 = new Date("2018/12/28 00:00");
	 if (now.getTime() > bf03.getTime()) {
		$('#a_03').text('ビデオを見る');
		$('#a_03').attr("href","https://abema.tv/video/title/26-46");
	 }

	 // 04 前
	 var bf04 = new Date("2018/11/06");
	 if (now.getTime() > bf04.getTime()) {
		$('#a_04').text('視聴予約する');
		$('#a_04').attr("href","https://abema.tv/channels/everybody-anime2/slots/B734GbF1R2ks6F");
	 }
	 // 後
	 var bf04 = new Date("2018/12/27 22:20");
	 if (now.getTime() > bf04.getTime()) {
		$('#a_04').text('ビデオを見る');
		$('#a_04').attr("href","https://abema.tv/video/title/203-2");
	 }

});
