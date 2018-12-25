$(document).ready(function() {
	var now = new Date();
	// 12 遷移先 放送前
	var bf12 = new Date("2018/11/11");
	if (now.getTime() > bf12.getTime()) {
		$('#a_12').text('視聴予約する');
		$('#a_12').attr("href","https://abema.tv/channels/asia-drama/slots/DMKC4FpAzwoNr3");
	}
	// 遷移先 放送後 ビデオ
	var bf12 = new Date("2019/01/05 01:27");
	if (now.getTime() > bf12.getTime()) {
		$('#a_12').text('ビデオを見る');
		$('#a_12').attr("href","https://abema.tv/video/title/213-26");
	}
	 // 13 前
	 var bf13 = new Date("2018/11/06");
	 if (now.getTime() > bf13.getTime()) {
		$('#a_13').text('視聴予約する');
		$('#a_13').attr("href","https://abema.tv/channels/asia-drama/slots/DMKC1XSU5wWPhq");
	 }
	 // 後
	 var bf13 = new Date("2019/01/06 01:22");
	 if (now.getTime() > bf13.getTime()) {
		$('#a_13').text('ビデオを見る');
		$('#a_13').attr("href","https://abema.tv/video/title/158-19_s0_p1");
	 }

	 // 14 前
	 var bf14 = new Date("2018/11/06");
	 if (now.getTime() > bf14.getTime()) {
		$('#a_14').text('視聴予約する');
		$('#a_14').attr("href","https://abema.tv/channels/asia-drama/slots/BprzixBQ5bK1DR");
	 }
	 // 後
	 var bf14 = new Date("2018/12/30 22:57");
	 if (now.getTime() > bf14.getTime()) {
		$('#a_14').text('ビデオを見る');
		$('#a_14').attr("href","https://abema.tv/video/title/308-4");
	 }

	 // 15 前
	 var bf15 = new Date("2018/11/06");
	 if (now.getTime() > bf15.getTime()) {
		$('#a_15').text('視聴予約する');
		$('#a_15').attr("href","https://abema.tv/channels/asia-drama/slots/CWxXRggTHm4DmZ");
	 }
	 // 後
	 var bf15 = new Date("2018/12/30 15:08");
	 if (now.getTime() > bf15.getTime()) {
		$('#a_15').text('ビデオを見る');
		$('#a_15').attr("href","https://abema.tv/video/title/193-49");
	 }

	 // 16 前
	 var bf16 = new Date("2018/11/06");
	 if (now.getTime() > bf16.getTime()) {
		$('#a_16').text('視聴予約する');
		$('#a_16').attr("href","https://abema.tv/channels/asia-drama/slots/DMKC5nDjPQQSAj");
	 }
	 // 後
	 var bf16 = new Date("2018/12/29 20:47");
	 if (now.getTime() > bf16.getTime()) {
		$('#a_16').text('ビデオを見る');
		$('#a_16').attr("href","https://abema.tv/video/title/193-54");
	 }

		// 17 前
		var bf17 = new Date("2018/11/06");
		if (now.getTime() > bf17.getTime()) {
			$('#a_17').text('視聴予約する');
			$('#a_17').attr("href","https://abema.tv/channels/asia-drama/slots/CWxXRzVZhGrU87");
		 }
	 // 後
		var bf17 = new Date("2018/12/29 10:42");
		if (now.getTime() > bf17.getTime()) {
			$('#a_17').text('ビデオを見る');
			$('#a_17').attr("href","https://abema.tv/video/title/308-6");
		}

	// 18 前
	var bf18 = new Date("2018/11/06");
	if (now.getTime() > bf18.getTime()) {
		$('#a_18').text('視聴予約する');
		$('#a_18').attr("href","https://abema.tv/channels/asia-drama/slots/DMKC5BGcQEYhcj");
	}
	// 後
	var bf18 = new Date("2018/12/31 03:58");
	if (now.getTime() > bf18.getTime()) {
		$('#a_18').text('ビデオを見る');
		$('#a_18').attr("href","https://abema.tv/video/title/340-4");
	}
	// 19 前
	var bf19 = new Date("2018/11/06");
	if (now.getTime() > bf19.getTime()) {
		$('#a_19').text('視聴予約する');
		$('#a_19').attr("href","https://abema.tv/channels/asia-drama/slots/BprzjZQaQYenNK");
	}
	// 後
	var bf19 = new Date("2018/12/29 07:31");
	if (now.getTime() > bf19.getTime()) {
		$('#a_19').text('ビデオを見る');
		$('#a_19').attr("href","https://abema.tv/video/title/85-20");
	}
	// 20 前
	var bf20 = new Date("2018/11/06");
	if (now.getTime() > bf20.getTime()) {
		$('#a_20').text('視聴予約する');
		$('#a_20').attr("href","https://abema.tv/channels/asia-drama/slots/CWxXSb16dJfmmR");
	}
	// 後
	var bf20 = new Date("2018/12/30 17:00");
	if (now.getTime() > bf20.getTime()) {
		$('#a_20').text('ビデオを見る');
		$('#a_20').attr("href","https://abema.tv/video/title/188-11_s0_p1");
	}
	// 21 前
	var bf21 = new Date("2018/11/06");
	if (now.getTime() > bf21.getTime()) {
		$('#a_21').text('視聴予約する');
		$('#a_21').attr("href","https://abema.tv/channels/asia-drama/slots/CWxXRzVA17EAAB");
	}
	// 後
	var bf21 = new Date("2018/12/29 23:00");
	if (now.getTime() > bf21.getTime()) {
		$('#a_21').text('ビデオを見る');
		$('#a_21').attr("href","https://abema.tv/video/title/188-8_s0_p1");
	}
	// 22 前
	var bf22 = new Date("2018/11/06");
	if (now.getTime() > bf22.getTime()) {
		$('#a_22').text('視聴予約する');
		$('#a_22').attr("href","https://abema.tv/channels/asia-drama/slots/BprzkmLNdraGBh");
	}
	// 後
	var bf22 = new Date("2018/12/31 17:13");
	if (now.getTime() > bf22.getTime()) {
		$('#a_22').text('ビデオを見る');
		$('#a_22').attr("href","https://abema.tv/video/title/85-6_s0_p1");
	}
	// 23 前
	var bf23 = new Date("2018/11/06");
	if (now.getTime() > bf23.getTime()) {
		$('#a_23').text('視聴予約する');
		$('#a_23').attr("href","https://abema.tv/channels/asia-drama/slots/BprziLGFwvGmQs");
	}
	// 後
	var bf23 = new Date("2018/12/30 03:13");
	if (now.getTime() > bf23.getTime()) {
		$('#a_23').text('ビデオを見る');
		$('#a_23').attr("href","https://abema.tv/video/episode/158-42_s0_p1");
	}

});
