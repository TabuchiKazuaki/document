$(document).ready(function() {
	var now = new Date();
	// 01 遷移先 放送前
	var bf01 = new Date("2018/11/06");
	if (now.getTime() > bf01.getTime()) {
		$('#a_01').text('視聴予約する');
		$('#a_01').attr("href","https://abema.tv/channels/abema-special/slots/CEfYhWsHoBZHsD");
	}
	// 遷移先 放送後 ビデオ
	var bf01 = new Date("2018/12/29 00:00");
	if (now.getTime() > bf01.getTime()) {
		$('#a_01').text('ビデオを見る');
		$('#a_01').attr("href","https://abema.tv/video/title/90-1202");
	}
	 // 02 前
	 var bf02 = new Date("2018/11/06");
	 if (now.getTime() > bf02.getTime()) {
		$('#a_02').text('視聴予約する');
		$('#a_02').attr("href","https://abema.tv/channels/abema-special/slots/BVK26h8DHTmDQT");
	 }
	 // 後
	 var bf02 = new Date("2018/12/27 23:00");
	 if (now.getTime() > bf02.getTime()) {
		$('#a_02').text('ビデオを見る');
		$('#a_02').attr("href","https://abema.tv/video/title/90-1120");
	 }

	 // 03 前
	 var bf03 = new Date("2018/11/06");
	 if (now.getTime() > bf03.getTime()) {
		$('#a_03').text('視聴予約する');
		$('#a_03').attr("href","https://abema.tv/channels/k-world/slots/CEfYkFjhHKGhuZ");
	 }
	 // 後
	 var bf03 = new Date("2018/12/27 23:30");
	 if (now.getTime() > bf03.getTime()) {
		$('#a_03').text('ビデオを見る');
		$('#a_03').attr("href","https://abema.tv/video/title/458-1");
	 }

	 // 04 前
	 var bf04 = new Date("2018/11/06");
	 if (now.getTime() > bf04.getTime()) {
		$('#a_04').text('視聴予約する');
		$('#a_04').attr("href","https://abema.tv/channels/ultra-games/slots/DufrvvPpXJvhsu");
	 }
	 // 後
	 var bf04 = new Date("2018/12/27 23:00");
	 if (now.getTime() > bf04.getTime()) {
		$('#a_04').text('ビデオを見る');
		$('#a_04').attr("href","https://abema.tv/video/title/392-131");
	 }
});
