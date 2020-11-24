
$(function() {
	countDown();
});

function countDown() {
	var now = new Date();

	var ts01 = new Date("2020/10/09 23:59");
	if (now.getTime() > ts01.getTime()) {
		var time = new Date();
		var end = new Date("2020/11/28 23:59");
		var left = end - time;
		var a_day = 24 * 60 * 60 * 1000;
		var d = Math.floor(left / a_day)
		var h = Math.floor((left % a_day) / (60 * 60 * 1000))
		var m = Math.floor((left % a_day) / (60 * 1000)) % 60
		var s = Math.floor((left % a_day) / 1000) % 60 % 60

		$("#day").text(d);
		$("#hour").text(h);
		$("#min").text(m);
		$("#sec").text(s);
		setTimeout('countDown()', 1000);
	}

	var bef = new Date("2020/08/02 00:00");
	if (now.getTime() > bef.getTime()) {
		$('.t_box').show();
		$('.timer').show();
	}
	var bef = new Date("2020/11/28 00:00");
	if (now.getTime() > bef.getTime()) {
		$("#day").hide();
		$(".tdd").hide();
	}
	var aft = new Date("2020/11/28 23:59");
	if (now.getTime() > aft.getTime()) {
		$('.timer').hide();
	}
}



















