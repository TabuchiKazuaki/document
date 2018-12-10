$(document).ready(function() {
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
});

