$(document).ready(function() {
	var now = new Date();
	// 01 遷移先 放送前
	var bf01 = new Date("2018/11/11");
	if (now.getTime() > bf01.getTime()) {
		$('#a_01').text('視聴予約する');
		$('#a_01').attr("href","https://abema.tv/channels/everybody-anime/slots/AihQNQiswopkqV");
	}
	// 遷移先 放送後 ビデオ
	var bf01 = new Date("2019/01/04 22:15");
	if (now.getTime() > bf01.getTime()) {
		$('#a_01').text('ビデオを見る');
		$('#a_01').attr("href","https://abema.tv/video/title/12-17");
	}
	 // 02 前
	 var bf02 = new Date("2018/11/06");
	 if (now.getTime() > bf02.getTime()) {
		$('#a_02').text('視聴予約する');
		$('#a_02').attr("href","https://abema.tv/channels/abema-anime/slots/EaryVoeuVcn33D");
	 }
	 // 後
	 var bf02 = new Date("2019/01/04 14:40");
	 if (now.getTime() > bf02.getTime()) {
		$('#a_02').text('ビデオを見る');
		$('#a_02').attr("href","https://abema.tv/video/title/409-1");
	 }

	 // 03 前
	 var bf03 = new Date("2018/11/06");
	 if (now.getTime() > bf03.getTime()) {
		$('#a_03').text('視聴予約する');
		$('#a_03').attr("href","https://abema.tv/channels/abema-anime/slots/Bprzm5PgRkZnAs");
	 }
	 // 後
	 var bf03 = new Date("2019/01/04 21:30");
	 if (now.getTime() > bf03.getTime()) {
		$('#a_03').text('ビデオを見る');
		$('#a_03').attr("href","https://abema.tv/video/title/13-47_s5");
	 }

	 // 04 前
	 var bf04 = new Date("2018/11/06");
	 if (now.getTime() > bf04.getTime()) {
		$('#a_04').text('視聴予約する');
		$('#a_04').attr("href","https://abema.tv/channels/abema-anime/slots/CM1ChJeq5NVxxX");
	 }
	 // 後
	 var bf04 = new Date("2019/01/04 22:30");
	 if (now.getTime() > bf04.getTime()) {
		$('#a_04').text('詳細を見る');
		// $('#a_04').attr("href","");
	 }

	 // 05 前
	 var bf05 = new Date("2018/11/06");
	 if (now.getTime() > bf05.getTime()) {
		$('#a_05').text('視聴予約する');
		$('#a_05').attr("href","https://abema.tv/channels/anime-live/slots/F25Uj5TrAjDhuy");
	 }
	 // 後
	 var bf05 = new Date("2019/01/05 01:57");
	 if (now.getTime() > bf05.getTime()) {
		$('#a_05').text('ビデオを見る');
		$('#a_05').attr("href","https://abema.tv/video/title/25-2xrwzkrsieb");
	 }


});
