$(document).ready(function() {
	var now = new Date();
	// 01 遷移先 放送前
	var bf01 = new Date("2018/11/11");
	if (now.getTime() > bf01.getTime()) {
		$('#a_01').text('視聴予約する');
		$('#a_01').attr("href","https://abema.tv/channels/abema-anime-2/slots/DaBaPfDhXmjnCX");
	}
	// 遷移先 放送後 ビデオ
	var bf01 = new Date("2018/12/28 20:40");
	if (now.getTime() > bf01.getTime()) {
		$('#a_01').text('ビデオを見る');
		$('#a_01').attr("href","https://abema.tv/video/title/26-36");
	}
	 // 02 前
	 var bf02 = new Date("2018/11/06");
	 if (now.getTime() > bf02.getTime()) {
		$('#a_02').text('視聴予約する');
		$('#a_02').attr("href","https://abema.tv/channels/abema-anime/slots/BihgEGckrT7dsm");
	 }
	 // 後
	 var bf02 = new Date("2018/12/28 13:27");
	 if (now.getTime() > bf02.getTime()) {
		$('#a_02').text('詳細を見る');
		// $('#a_02').attr("");
	 }

	 // 03 前
	 var bf03 = new Date("2018/11/06");
	 if (now.getTime() > bf03.getTime()) {
		$('#a_03').text('視聴予約する');
		$('#a_03').attr("href","https://abema.tv/channels/anime-live/slots/FCAvTa11oAGuPD");
	 }
	 // 後
	 var bf03 = new Date("2018/12/28 21:48");
	 if (now.getTime() > bf03.getTime()) {
		$('#a_03').text('ビデオを見る');
		$('#a_03').attr("href","https://abema.tv/video/title/25-8cwxyxikzsj");
	 }

	 // 04 前
	 var bf04 = new Date("2018/11/06");
	 if (now.getTime() > bf04.getTime()) {
		$('#a_04').text('視聴予約する');
		$('#a_04').attr("href","https://abema.tv/channels/abema-anime-2/slots/FCAvQYZyXDvJHu");
	 }
	 // 後
	 var bf04 = new Date("2018/12/29 00:00");
	 if (now.getTime() > bf04.getTime()) {
		$('#a_04').text('ビデオを見る');
		$('#a_04').attr("href","https://abema.tv/video/title/26-46");
	 }

	 // 05 前
	 var bf05 = new Date("2018/11/06");
	 if (now.getTime() > bf05.getTime()) {
		$('#a_05').text('視聴予約する');
		$('#a_05').attr("href","https://abema.tv/channels/abema-anime/slots/9k3Pi4f15EV4kf");
	 }
	 // 後
	 var bf05 = new Date("2018/12/29 00:30");
	 if (now.getTime() > bf05.getTime()) {
		$('#a_05').text('ビデオを見る');
		$('#a_05').attr("href","https://abema.tv/video/title/26-58");
	 }

	 // 06 前
	 var bf06 = new Date("2018/11/06");
	 if (now.getTime() > bf06.getTime()) {
		$('#a_06').text('視聴予約する');
		$('#a_06').attr("href","https://abema.tv/channels/everybody-anime2/slots/B734JiRPdiowCj");
	 }
	 // 後
	 var bf06 = new Date("2018/12/28 23:20");
	 if (now.getTime() > bf06.getTime()) {
		$('#a_06').text('ビデオを見る');
		$('#a_06').attr("href","https://abema.tv/video/title/203-2");
	 }
});
