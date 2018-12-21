$(document).ready(function() {
	var now = new Date();
	// 01 遷移先 放送前
	var bf01 = new Date("2018/11/06");
	if (now.getTime() > bf01.getTime()) {
		$('#a_01').text('視聴予約する');
		$('#a_01').attr("href","https://abema.tv/channels/aibo/slots/AihQPKXkeLXaRm");
	}
	// 遷移先 放送後 ビデオ
	var bf01 = new Date("2019/01/04 23:00");
	if (now.getTime() > bf01.getTime()) {
		$('#a_01').text('ビデオを見る');
		// $('#a_01').css({'background':'#ccc', 'border':'#ccc' , 'color':'#777'});
		$('#a_01').attr("href","https://abema.tv/video/title/50-44");
	}
	 // 02 前
	 var bf02 = new Date("2018/11/06");
	 if (now.getTime() > bf02.getTime()) {
		$('#a_02').text('視聴予約する');
		$('#a_02').attr("href","https://abema.tv/channels/abema-special/slots/98hy8mpPJSCYto");
	 }
	 // 後
	 var bf02 = new Date("2019/01/04 23:00");
	 if (now.getTime() > bf02.getTime()) {
		$('#a_02').text('ビデオを見る');
		$('#a_02').attr("href","https://abema.tv/video/title/90-1172");
	 }

	 // 03 前
	 var bf03 = new Date("2018/11/06");
	 if (now.getTime() > bf03.getTime()) {
		$('#a_03').text('視聴予約する');
		$('#a_03').attr("href","https://abema.tv/channels/asia-drama/slots/DMKC4FpAzwoNr3");
	 }
	 // 後
	 var bf03 = new Date("2019/01/05 01:27")
	 if (now.getTime() > bf03.getTime()) {
		$('#a_03').text('ビデオを見る');
		$('#a_03').attr("href","https://abema.tv/video/title/213-26");
	 }


});
