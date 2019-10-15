$(function() {
	countDown();
});
function countDown() {
	var time = new Date();
	var end = new Date("2019/11/30");
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