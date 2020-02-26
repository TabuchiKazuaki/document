$(function() {
	countDown();
});

function countDown() {
	var now = new Date();
	var time = new Date();
	var end = new Date("2020/03/01 23:59");
	var left = end - time;
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

	var tt1 = new Date("2018/5/01 00:00");
	if (now.getTime() > tt1.getTime()) {

	}
}















