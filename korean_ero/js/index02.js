$(document).ready(function() {

	$(".thumb07 li:first a").addClass("active").show();//tabs内最初のliに.activeを追加
	$('.thumb07 li a').on('click',function() {
		$(".thumb07 li a").removeClass("active");//.activeを追加する
		$(this).addClass('active');
	});
	$(".thumb08 li:first a").addClass("active").show();//tabs内最初のliに.activeを追加
	$('.thumb08 li a').on('click',function() {
		$(".thumb08 li a").removeClass("active");//.activeを追加する
		$(this).addClass('active');
	});
	$(".thumb09 li:first a").addClass("active").show();//tabs内最初のliに.activeを追加
	$('.thumb09 li a').on('click',function() {
		$(".thumb09 li a").removeClass("active");//.activeを追加する
		$(this).addClass('active');
	});
	$(".thumb10 li:first a").addClass("active").show();//tabs内最初のliに.activeを追加
	$('.thumb10 li a').on('click',function() {
		$(".thumb10 li a").removeClass("active");//.activeを追加する
		$(this).addClass('active');
	});

	var now = new Date();

	// 07 遷移先 放送前
	var bf07 = new Date("2018/11/06");
	if (now.getTime() > bf07.getTime()) {
		$('#a_07').text('視聴予約する');
		$('#a_07').attr("href","https://abema.tv/channels/asia-drama/slots/DMKC5UbNKhL7rP");
	}
	// 遷移先 放送後
	var bf07 = new Date("2019/01/2 01:15");
	if (now.getTime() > bf07.getTime()) {
		// $('#a_07').text('ビデオをみる');
		// $('#a_07').attr("href","https://abema.tv/video/episode/158-20_s0_p1");
	}


	// 08 遷移先 放送前
	var bf08 = new Date("2018/11/06");
	if (now.getTime() > bf08.getTime()) {
		$('#a_08').text('視聴予約する');
		$('#a_08').attr("href","https://abema.tv/channels/asia-drama/slots/B6feivHuZMVyxB");
	}
	// 遷移先 放送後
	var bf08 = new Date("2019/01/03 01:15");
	if (now.getTime() > bf08.getTime()) {
		$('#a_08').text('ビデオをみる');
		$('#a_08').attr("href","https://abema.tv/video/episode/158-20_s0_p1");
	}

	// 09 遷移先 放送前
	var bf09 = new Date("2018/11/06");
	if (now.getTime() > bf09.getTime()) {
		$('#a_09').text('視聴予約する');
		$('#a_09').attr("href","https://abema.tv/channels/asia-drama/slots/AihQQDzzCorC2K");
	}
	// 遷移先 放送後
	var bf09 = new Date("2019/01/04 01:15");
	if (now.getTime() > bf09.getTime()) {
		$('#a_09').text('ビデオをみる');
		$('#a_09').attr("href","https://abema.tv/video/episode/452-1_s0_p1");
	}
});

