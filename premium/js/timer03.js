$(function() {
	countDown();
	countDowntwo();
	countDownthr();
});

function countDown() {
	var time1 = new Date();
	var end1 = new Date("2020/03/01 23:59");
	var left1 = end1 - time1;
	var a_day1 = 60 * 60 * 60 * 1000;
	// var d = Math.floor(left / a_day)
	var h1 = Math.floor((left1 % a_day1) / (60 * 60 * 1000))
	var m1 = Math.floor((left1 % a_day1) / (60 * 1000)) % 60
	var s1 = Math.floor((left1 % a_day1) / 1000) % 60 % 60

	// $("#day").text(d);
	$("#hour1").text(h1);
	$("#min1").text(m1);
	$("#sec1").text(s1);
	setTimeout('countDown()', 1000);
}
function countDowntwo() {
	var time2 = new Date();
	var end2 = new Date("2020/03/02 23:59");
	var left2 = end2 - time2;
	var a_day2 = 60 * 60 * 60 * 1000;
	// var d = Math.floor(left / a_day)
	var h2 = Math.floor((left2 % a_day2) / (60 * 60 * 1000))
	var m2 = Math.floor((left2 % a_day2) / (60 * 1000)) % 60
	var s2 = Math.floor((left2 % a_day2) / 1000) % 60 % 60

	// $("#day").text(d);
	$("#hour2").text(h2);
	$("#min2").text(m2);
	$("#sec2").text(s2);
	setTimeout('countDowntwo()', 1000);
}
function countDownthr() {
	var time3 = new Date();
	var end3 = new Date("2020/03/03 23:59");
	var left3 = end3 - time3;
	var a_day3 = 60 * 60 * 60 * 1000;
	// var d = Math.floor(left / a_day)
	var h3 = Math.floor((left3 % a_day3) / (60 * 60 * 1000))
	var m3 = Math.floor((left3 % a_day3) / (60 * 1000)) % 60
	var s3 = Math.floor((left3 % a_day3) / 1000) % 60 % 60

	$("#hour3").text(h3);
	$("#min3").text(m3);
	$("#sec3").text(s3);
	setTimeout('countDownthr()', 1000);
}
$(function(){
	var now = new Date();
	var def = new Date("2018/03/01 00:00");
	if (now.getTime() > def.getTime()) {
		// $('.t01').hide();
		$('.t02').hide();
		$('.t03').hide();
	}
	var dd1 = new Date("2020/03/01 00:00");
	if (now.getTime() > dd1.getTime()) {
		$('.t01').show();
	}
	var dd2 = new Date("2020/03/02 00:00");
	if (now.getTime() > dd2.getTime()) {
		$('.t01').hide();
		$('.t02').show();
	}
	var dd3 = new Date("2020/03/03 00:00");
	if (now.getTime() > dd3.getTime()) {
		$('.t02').hide();
		$('.t03').show();
	}
	var end = new Date("2020/03/04 00:00");
	if (now.getTime() > end.getTime()) {
		$('.t_box').hide();
		$('.ch_h').text('キャンペーンは終了しました');
	}
});