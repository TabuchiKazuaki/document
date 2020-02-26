
$(function(){
	var d1 = new Date("2018/03/01 00:00");
	if (now.getTime() > d1.getTime()) {
		$('t1').show();
	}
	var d2 = new Date("2018/03/02 00:00");
	if (now.getTime() > d2.getTime()) {
		$('t1').hide();
		$('t2').show();
	}
	var d3 = new Date("2018/03/03 00:00");
	if (now.getTime() > d3.getTime()) {
		$('t2').hide();
		$('t3').show();
	}
	var end = new Date("2018/03/03 00:00");
	if (now.getTime() > end.getTime()) {
		$('t_box').hide();
		$('ch_h').text('キャンペーンは終了しました');
	}
});

$(function(){
	var now = new Date();
	var time = new Date();
	var end1 = new Date("2020/03/01 23:59");
	var left = end1 - time;
	var a_day = 60 * 60 * 60 * 1000;
	// var d = Math.floor(left / a_day)
	var h = Math.floor((left % a_day) / (60 * 60 * 1000))
	var m = Math.floor((left % a_day) / (60 * 1000)) % 60
	var s = Math.floor((left % a_day) / 1000) % 60 % 60

	// $("#day").text(d);
	$("#hour1").text(h);
	$("#min1").text(m);
	$("#sec1").text(s);
	setTimeout('countDown()', 1000);
});

$(function(){
	var now = new Date();
	var time = new Date();
	var end2 = new Date("2020/03/02 23:59");
	var left = end2 - time;
	var a_day = 60 * 60 * 60 * 1000;
	// var d = Math.floor(left / a_day)
	var h = Math.floor((left % a_day) / (60 * 60 * 1000))
	var m = Math.floor((left % a_day) / (60 * 1000)) % 60
	var s = Math.floor((left % a_day) / 1000) % 60 % 60

	$("#hour2").text(h);
	$("#min2").text(m);
	$("#sec2").text(s);
	setTimeout('countDown()', 1000);
});

$(function(){
	var now = new Date();
	var time = new Date();
	var end3 = new Date("2020/03/03 23:59");
	var left = end3 - time;
	var a_day = 60 * 60 * 60 * 1000;
	// var d = Math.floor(left / a_day)
	var h = Math.floor((left % a_day) / (60 * 60 * 1000))
	var m = Math.floor((left % a_day) / (60 * 1000)) % 60
	var s = Math.floor((left % a_day) / 1000) % 60 % 60

	$("#hour3").text(h);
	$("#min3").text(m);
	$("#sec3").text(s);
	setTimeout('countDown()', 1000);
});
















