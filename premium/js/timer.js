$(function() {
	countDown();
});
function countDown() {
	var time = new Date();
	var end = new Date("January 01,2020 00:00:00");
	var left = end - time;
	var a_day = 24 * 60 * 60 * 1000;

	var d = Math.floor(left / a_day)
	var h = Math.floor((left % a_day) / (60 * 60 * 1000))
	var m = Math.floor((left % a_day) / (60 * 1000)) % 60
	var s = Math.floor((left % a_day) / 1000) % 60 % 60

	$("#TimeLeft").text(d + '日' + h + '時間' + m + '分' + s + '秒');
	$("#Timeday").text(d);
	$("#Timehour").text(h);
	$("#Timeminute").text(m);
	$("#Timesecond").text(s);
	setTimeout('countDown()', 1000);
}