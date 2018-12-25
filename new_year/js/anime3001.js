$(document).ready(function() {
	var now = new Date();
	// 01 遷移先 放送前
	var bf01 = new Date("2018/11/11");
	if (now.getTime() > bf01.getTime()) {
		$('#a_01').text('視聴予約する');
		$('#a_01').attr("href","https://abema.tv/channels/abema-anime/slots/BihgAeHz21hz9D");
	}
	// 遷移先 放送後 ビデオ
	var bf01 = new Date("");
	if (now.getTime() > bf01.getTime()) {
		$('#a_01').text('詳細を見る');
		// $('#a_01').attr("href","");
	}
	 // 02 前
	 var bf02 = new Date("2018/11/06");
	 if (now.getTime() > bf02.getTime()) {
		$('#a_02').text('視聴予約する');
		$('#a_02').attr("href","https://abema.tv/channels/anime-live/slots/FCAvS46qgUgoJ7");
	 }
	 // 後
	 var bf02 = new Date("2018/12/30 19:47");
	 if (now.getTime() > bf02.getTime()) {
		$('#a_02').text('ビデオを見る');
		$('#a_02').attr("https://abema.tv/video/title/25-5at-idi-yic");
	 }

	 // 03 前
	 var bf03 = new Date("2018/11/06");
	 if (now.getTime() > bf03.getTime()) {
		$('#a_03').text('視聴予約する');
		$('#a_03').attr("href","https://abema.tv/channels/anime-live/slots/FCAvQYE7cnd6EB");
	 }
	 // 後
	 var bf03 = new Date("");
	 if (now.getTime() > bf03.getTime()) {
		$('#a_03').text('詳細を見る');
		// $('#a_03').attr("href","");
	 }

	 // 04 前
	 var bf04 = new Date("2018/11/06");
	 if (now.getTime() > bf04.getTime()) {
		$('#a_04').text('視聴予約する');
		$('#a_04').attr("href","https://abema.tv/channels/abema-anime/slots/9pGVZXGMLg59Zq");
	 }
	 // 後
	 var bf04 = new Date("2018/12/30 01:30");
	 if (now.getTime() > bf04.getTime()) {
		$('#a_04').text('ビデオを見る');
		$('#a_04').attr("href","https://abema.tv/video/title/171-14");
	 }

	 // 05 前
	 var bf05 = new Date("2018/11/06");
	 if (now.getTime() > bf05.getTime()) {
		$('#a_05').text('視聴予約する');
		$('#a_05').attr("href","https://abema.tv/channels/everybody-anime2/slots/DgmzxmyYfzg6AT");
	 }
	 // 後
	 var bf05 = new Date("2018/12/30 23:55");
	 if (now.getTime() > bf05.getTime()) {
		$('#a_05').text('ビデオを見る');
		$('#a_05').attr("href","https://abema.tv/video/title/13-78");
	 }

});
