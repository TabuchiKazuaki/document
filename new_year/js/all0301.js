$(document).ready(function() {
	var now = new Date();
	// 01 遷移先 放送前
	var bf01 = new Date("2018/11/06");
	if (now.getTime() > bf01.getTime()) {
		$('#a_01').text('視聴予約する');
		$('#a_01').attr("href","https://abema.tv/channels/abema-special/slots/C42Mw9CyhF7wmZ");
	}
	// 遷移先 放送後 ビデオ
	var bf01 = new Date("2019/01/03 23:00");
	if (now.getTime() > bf01.getTime()) {
		$('#a_01').text('ビデオを見る');
		$('#a_01').attr("href","https://abema.tv/video/title/90-1120");
		// $('#a_01').css({'background':'#ccc', 'border':'#ccc' , 'color':'#777'});
		$('#a_01').attr("href","--");
	}
	 // 02 前
	 var bf02 = new Date("2018/11/06");
	 if (now.getTime() > bf02.getTime()) {
		$('#a_02').text('視聴予約する');
		$('#a_02').attr("href","https://abema.tv/channels/shogi/slots/98hy9P2cLoDNPq");
	 }
	 // 後
	 var bf02 = new Date("2019/01/03 22:24");
	 if (now.getTime() > bf02.getTime()) {
		$('#a_02').text('ビデオを見る');
		$('#a_02').attr("href","https://abema.tv/video/title/288-14_s1_p7");
	 }

	 // 03 前
	 var bf03 = new Date("2018/11/06");
	 if (now.getTime() > bf03.getTime()) {
		$('#a_03').text('視聴予約する');
		$('#a_03').attr("href","https://abema.tv/channels/fighting-sports/slots/FCAvQqoPQjzkRV");
	 }
	 // 後
	 // var bf03 = new Date("2019/01/02 0:15")
	 // if (now.getTime() > bf03.getTime()) {
		// $('#a_03').text('ビデオを見る');
		// $('#a_03').attr("href","https://abema.tv/video/title/90-1139");
	 // }

	 // 04 前
	 var bf04 = new Date("2018/11/06");
	 if (now.getTime() > bf04.getTime()) {
		$('#a_04').text('視聴予約する');
		$('#a_04').attr("href","https://abema.tv/channels/asia-drama/slots/BprzjZ6cAWYjCK");
	 }
	 // 後
	 var bf04 = new Date("2019/01/04 01:15");
	 if (now.getTime() > bf04.getTime()) {
		$('#a_04').text('ビデオを見る');
		$('#a_04').attr("href","https://abema.tv/video/title/213-20_s0_p1");
	 }

});
