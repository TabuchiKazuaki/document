$(document).ready(function() {
	var now = new Date();
	// 01 遷移先 放送前
	var bf01 = new Date("2018/11/06");
	if (now.getTime() > bf01.getTime()) {
		$('#a_01').text('視聴予約する');
		$('#a_01').attr("href","https://abema.tv/channels/special-plus/slots/Aq2KaBfA72o3oD");
	}
	// 遷移先 放送後 ビデオ
	var bf01 = new Date("2018/12/31 00:00");
	if (now.getTime() > bf01.getTime()) {
		$('#a_01').text('詳細を見る');
	}
	 // 02 前
	 var bf02 = new Date("2018/11/06");
	 if (now.getTime() > bf02.getTime()) {
		$('#a_02').text('視聴予約する');
		$('#a_02').attr("href","https://abema.tv/channels/abema-special/slots/98hy7rUfgqPLLw");
	 }
	 // 後
	 var bf02 = new Date("2018/12/29 23:00");
	 if (now.getTime() > bf02.getTime()) {
		$('#a_02').text('ビデオを見る');
		$('#a_02').attr("href","https://abema.tv/video/title/90-493");
	 }



	 // 04 前
	 var bf04 = new Date("2018/11/06");
	 if (now.getTime() > bf04.getTime()) {
		$('#a_04').text('視聴予約する');
		$('#a_04').attr("href","https://abema.tv/channels/abema-special/slots/BYye4f8Woz3yts");
	 }
	 // 後
	 var bf04 = new Date("2018/12/30 01:00");
	 if (now.getTime() > bf04.getTime()) {
		$('#a_04').text('ビデオを見る');
		$('#a_04').attr("href","https://abema.tv/video/title/90-1060");
	 }


});
