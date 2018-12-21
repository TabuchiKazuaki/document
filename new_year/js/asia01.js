$(document).ready(function() {
	var now = new Date();
	// 01 遷移先 放送前
	var bf01 = new Date("2018/11/11");
	if (now.getTime() > bf01.getTime()) {
		$('#a_01').text('視聴予約する');
		$('#a_01').attr("href","https://abema.tv/channels/k-world/slots/Eo3VhUB7H87k5m");
	}
	// 遷移先 放送後 ビデオ
	var bf01 = new Date("2019/01/06 01:30");
	if (now.getTime() > bf01.getTime()) {
		$('#a_01').text('詳細を見る');
		// $('#a_01').attr("href","");
	}
	 // 02 前
	 var bf02 = new Date("2018/11/06");
	 if (now.getTime() > bf02.getTime()) {
		$('#a_02').text('視聴予約する');
		$('#a_02').attr("href","https://abema.tv/channels/asia-drama/slots/BprzieBYLTAjo5");
	 }
	 // 後
	 var bf02 = new Date("2019/01/01 01:12");
	 if (now.getTime() > bf02.getTime()) {
		$('#a_02').text('ビデオを見る');
		$('#a_02').attr("href","https://abema.tv/channels/everybody-anime/slots/B6fegofvWSwnB9");
	 }

	 // 03 前
	 var bf03 = new Date("2018/11/06");
	 if (now.getTime() > bf03.getTime()) {
		$('#a_03').text('視聴予約する');
		$('#a_03').attr("href","https://abema.tv/channels/k-world/slots/Eo3ViNv8cCgGP1");
	 }
	 // 後
	 var bf03 = new Date("2019/01/01 03:15");
	 if (now.getTime() > bf03.getTime()) {
		$('#a_03').text('詳細を見る');
		// $('#a_03').attr("href","https://abema.tv/video/title/25-2xrwzkrsieb");
	 }

	 // 04 前
	 var bf04 = new Date("2018/11/06");
	 if (now.getTime() > bf04.getTime()) {
		$('#a_04').text('視聴予約する');
		$('#a_04').attr("href","https://abema.tv/channels/asia-drama/slots/DMKC5UbNKhL7rP");
	 }
	 // 後
	 var bf04 = new Date("2019/01/02 01:15");
	 if (now.getTime() > bf04.getTime()) {
		$('#a_04').text('ビデオを見る');
		$('#a_04').attr("href","https://abema.tv/video/title/12-17");
	 }

	 // 05 前
	 var bf05 = new Date("2018/11/06");
	 if (now.getTime() > bf05.getTime()) {
		$('#a_05').text('視聴予約する');
		$('#a_05').attr("href","https://abema.tv/channels/asia-drama/slots/BprziLt2BVSsUs");
	 }
	 // 後
	 var bf05 = new Date("2019/01/05 23:27");
	 if (now.getTime() > bf05.getTime()) {
		$('#a_05').text('ビデオを見る');
		$('#a_05').attr("href","https://abema.tv/video/title/26-40");
	 }

	  // 06 前
	 var bf06 = new Date("2018/11/06");
	 if (now.getTime() > bf06.getTime()) {
		$('#a_06').text('視聴予約する');
		$('#a_06').attr("href","https://abema.tv/channels/asia-drama/slots/CWxXQU1ZHX55ks");
	 }
	 // 後
	 var bf06 = new Date("2019/01/06 20:25");
	 if (now.getTime() > bf06.getTime()) {
		$('#a_06').text('ビデオを見る');
		$('#a_06').attr("href","https://abema.tv/video/title/26-40");
	 }

	  // 07 前
	 var bf07 = new Date("2018/11/06");
	 if (now.getTime() > bf07.getTime()) {
		$('#a_07').text('視聴予約する');
		$('#a_07').attr("href","https://abema.tv/channels/k-world/slots/Bprzm4qpMcRWD5");
	 }
	 // 後
	 var bf07 = new Date("2019/01/06 22:00");
	 if (now.getTime() > bf07.getTime()) {
		$('#a_07').text('詳細を見る');
		// $('#a_07').attr("href","https://abema.tv/video/title/25-101");
	 }

	  // 08 前
	 var bf08 = new Date("2018/11/06");
	 if (now.getTime() > bf08.getTime()) {
		$('#a_08').text('視聴予約する');
		$('#a_08').attr("href","https://abema.tv/channels/k-world/slots/FFtVVBSdWXxutB");
	 }
	 // 後
	 var bf08 = new Date("2019/01/06 22:30");
	 if (now.getTime() > bf08.getTime()) {
		$('#a_08').text('詳細を見る');
		// $('#a_08').attr("href","https://abema.tv/video/title/25-101");
	 }

	   // 9 前
	 var bf09 = new Date("2018/11/06");
	 if (now.getTime() > bf09.getTime()) {
		$('#a_09').text('視聴予約する');
		$('#a_09').attr("href","https://abema.tv/channels/k-world/slots/CEfYkFjhHKGhuZ");
	 }
	 // 後
	 var bf09 = new Date("2019/12/27 23:30");
	 if (now.getTime() > bf09.getTime()) {
		$('#a_09').text('ビデオを見る');
		$('#a_09').attr("href","https://abema.tv/video/title/25-101");
	 }

	   //10 前
	 var bf10 = new Date("2018/11/06");
	 if (now.getTime() > bf10.getTime()) {
		$('#a_10').text('視聴予約する');
		$('#a_10').attr("href","https://abema.tv/channels/asia-drama/slots/DMKC2jzx1PKxpo");
	 }
	 // 後
	 var bf10 = new Date("2019/01/03 01:13");
	 if (now.getTime() > bf10.getTime()) {
		$('#a_10').text('ビデオを見る');
		$('#a_10').attr("href","https://abema.tv/video/title/25-101");
	 }

	   //11前
	 var bf11 = new Date("2018/11/06");
	 if (now.getTime() > bf11.getTime()) {
		$('#a_11').text('視聴予約する');
		$('#a_11').attr("href","https://abema.tv/channels/asia-drama/slots/BprzjZ6cAWYjCK");
	 }
	 // 後1/4 1:15
	 var bf11 = new Date("2019/01/04 01:15");
	 if (now.getTime() > bf11.getTime()) {
		$('#a_11').text('ビデオを見る');
		$('#a_11').attr("href","https://abema.tv/video/title/25-101");
	 }

});
