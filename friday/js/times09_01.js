$(document).ready(function() {

	$(".tab_content01").hide();
	$("ul.thumb01 li:first a").addClass("active").show();
	$(".tab_content01:first").show();
	//タブクリック
	$("ul.thumb01 li").click(function() {
		$("ul.thumb01 li a").removeClass("active");
		$(this).children('a').addClass("active");
		$(".tab_content01").hide();
		var activeTab = $(this).find("a").attr("href");
		$(activeTab).fadeIn();
		return false;
	});


	var now = new Date();
	var tl02 = new Date("2019/06/22 00:00");
	if (now.getTime() > tl02.getTime()) {
		$('.th_now').hide();
	}

	var now = new Date();
	var ts00 = new Date("2019/08/09 00:00");
	if (now.getTime() > ts00.getTime()) {
		$('.th_now').show();
	}

	var now = new Date();
	var tl00 = new Date("2019/08/10 00:00");
	if (now.getTime() > tl00.getTime()) {
		$('.th_now').hide();
	}


});
