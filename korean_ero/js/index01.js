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
	$(".thumb07 li:first a").addClass("active").show();//tabs内最初のliに.activeを追加
	$('.thumb07 li a').on('click',function() {
		$(".thumb07 li a").removeClass("active");//.activeを追加する
		$(this).addClass('active');
	});
});

