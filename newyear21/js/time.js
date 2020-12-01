
$(function() {
	countDown();
});

function countDown() {
	var now = new Date();
	var bef02 = new Date("2020/10/01 23:59");
	if (now.getTime() > bef02.getTime()) {
		$(".h_be").show();
		$(".h_a").hide();
	}
	var aft = new Date("2020/12/31 23:59");
	if (now.getTime() > aft.getTime()) {
		$(".h_be").hide();
		$(".h_a").show();
	}
}



















