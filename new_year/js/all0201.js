$(document).ready(function() {
	var now = new Date();
	// 01 遷移先 放送前
	var bf01 = new Date("2018/11/06");
	if (now.getTime() > bf01.getTime()) {
		$('#a_01').text('視聴予約する');
		$('#a_01').attr("href","https://abema.tv/channels/abema-special/slots/B734KLH7mkfDfM");
	}
	// 遷移先 放送後 ビデオ
	var bf01 = new Date("2019/01/01 22:15");
	if (now.getTime() > bf01.getTime()) {
		$('#a_01').text('ビデオを見る');
		$('#a_01').attr("href","https://abema.tv/video/title/88-20");
	}
	 // 02 前
	 var bf02 = new Date("2018/11/06");
	 if (now.getTime() > bf02.getTime()) {
		$('#a_02').text('視聴予約する');
		$('#a_02').attr("href","https://abema.tv/channels/special-plus/slots/C42MtQgYSKjixw");
	 }
	 // 後
	 var bf02 = new Date("2019/01/01 21:00");
	 if (now.getTime() > bf02.getTime()) {
		$('#a_02').text('ビデオを見る');
		$('#a_02').attr("href","https://abema.tv/video/title/90-1147");
	 }

	 // 03 前
	 var bf03 = new Date("2018/11/06");
	 if (now.getTime() > bf03.getTime()) {
		$('#a_03').text('視聴予約する');
		$('#a_03').attr("href","https://abema.tv/channels/shogi/slots/9MiUfDnSxwrwFM");
	 }
	 // 後
	 var bf03 = new Date("2019/01/02 0:15")
	 if (now.getTime() > bf03.getTime()) {
		$('#a_03').text('ビデオを見る');
		$('#a_03').attr("href","https://abema.tv/video/title/288-14_s1_p6");
	 }

	 // 04 前
	 var bf04 = new Date("2018/11/06");
	 if (now.getTime() > bf04.getTime()) {
		$('#a_04').text('視聴予約する');
		$('#a_04').attr("href","https://abema.tv/channels/drama/slots/F9PEpjHWAGJXFd");
	 }
	 // 後
	 var bf04 = new Date("2019/01/02 22:57");
	 if (now.getTime() > bf04.getTime()) {
		$('#a_04').text('詳細を見る');
	 }
});
