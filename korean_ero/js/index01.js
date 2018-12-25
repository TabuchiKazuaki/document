$(document).ready(function() {
	$(".thumb01 li:first a").addClass("active").show();//tabs内最初のliに.activeを追加
	$('.thumb01 li a').on('click',function() {
		$(".thumb01 li a").removeClass("active");//.activeを追加する
		$(this).addClass('active');
	});

	$(".thumb02 li:first a").addClass("active").show();//tabs内最初のliに.activeを追加
	$('.thumb02 li a').on('click',function() {
		$(".thumb02 li a").removeClass("active");//.activeを追加する
		$(this).addClass('active');
	});
	$(".thumb03 li:first a").addClass("active").show();//tabs内最初のliに.activeを追加
	$('.thumb03 li a').on('click',function() {
		$(".thumb03 li a").removeClass("active");//.activeを追加する
		$(this).addClass('active');
	});
	$(".thumb04 li:first a").addClass("active").show();//tabs内最初のliに.activeを追加
	$('.thumb04 li a').on('click',function() {
		$(".thumb04 li a").removeClass("active");//.activeを追加する
		$(this).addClass('active');
	});
	$(".thumb05 li:first a").addClass("active").show();//tabs内最初のliに.activeを追加
	$('.thumb05 li a').on('click',function() {
		$(".thumb05 li a").removeClass("active");//.activeを追加する
		$(this).addClass('active');
	});
	$(".thumb06 li:first a").addClass("active").show();//tabs内最初のliに.activeを追加
	$('.thumb06 li a').on('click',function() {
		$(".thumb06 li a").removeClass("active");//.activeを追加する
		$(this).addClass('active');
	});


	var now = new Date();

	// 01 無料文言削除
	// 遷移先 放送前
	var bf01 = new Date("2018/11/06");
	if (now.getTime() > bf01.getTime()) {
		$('#a_01').text('視聴予約する');
		$('#a_01').attr("href","https://abema.tv/channels/asia-drama/slots/B6fehiqnL2QiZu");
	}
	// 遷移先 放送後
	var bf01 = new Date("2018/12/24 18:00");
	if (now.getTime() > bf01.getTime()) {
		$('#a_01').text('ビデオをみる');
		$('#a_01').attr("href","https://abema.tv/video/episode/158-18_s0_p1");
	}


	// 02 遷移先 放送前
	var bf02 = new Date("2018/11/06");
	if (now.getTime() > bf02.getTime()) {
		$('#a_02').text('視聴予約する');
		$('#a_02').attr("href","https://abema.tv/channels/asia-drama/slots/B6feivHuZMVyxB");
	}
	// 遷移先 放送後
	var bf02 = new Date("2018/12/24 20:05");
	if (now.getTime() > bf02.getTime()) {
		$('#a_02').text('ビデオをみる');
		$('#a_02').attr("href","https://abema.tv/video/episode/158-20_s0_p1");
	}

	// 03 遷移先 放送前
	var bf03 = new Date("2018/11/06");
	if (now.getTime() > bf03.getTime()) {
		$('#a_03').text('視聴予約する');
		$('#a_03').attr("href","https://abema.tv/channels/asia-drama/slots/AihQQDzzCorC2K");
	}
	// 遷移先 放送後
	var bf03 = new Date("2018/12/24 22:10");
	if (now.getTime() > bf03.getTime()) {
		$('#a_03').text('ビデオをみる');
		$('#a_03').attr("href","https://abema.tv/video/episode/452-1_s0_p1");
	}

	// 04 遷移先 放送前
	var bf04 = new Date("2018/11/06");
	if (now.getTime() > bf04.getTime()) {
		$('#a_04').text('視聴予約する');
		$('#a_04').attr("href","https://abema.tv/video/episode/274-8_s0_p1");
	}
	// 遷移先 放送後
	var bf04 = new Date("2018/12/25 0:00");
	if (now.getTime() > bf04.getTime()) {
		$('#a_04').text('ビデオをみる');
		$('#a_04').attr("href","https://abema.tv/video/episode/274-8_s0_p1");
	}

	// 05 遷移先 放送前
	var bf05 = new Date("2018/11/06");
	if (now.getTime() > bf05.getTime()) {
		$('#a_05').text('視聴予約する');
		$('#a_05').attr("href","https://abema.tv/channels/asia-drama/slots/B6fehQcCjyDKMH");
	}
	// 遷移先 放送後
	var bf05 = new Date("2018/12/25 02:10");
	if (now.getTime() > bf05.getTime()) {
		$('#a_05').text('ビデオをみる');
		$('#a_05').attr("href","https://abema.tv/video/episode/68-25_s0_p1");
	}

	// 06 遷移先 放送前
	var bf06 = new Date("2018/11/06");
	if (now.getTime() > bf06.getTime()) {
		$('#a_06').text('視聴予約する');
		$('#a_06').attr("href","https://abema.tv/channels/asia-drama/slots/BprzieBYLTAjo5");
	}
	// 遷移先 放送後
	var bf06 = new Date("2019/01/01 01:12");
	if (now.getTime() > bf06.getTime()) {
		// $('#a_06').text('ビデオをみる');
		$('#a_06').attr("href","https://abema.tv/channels/asia-drama/slots/BprzieBYLTAjo5");
	}
});

