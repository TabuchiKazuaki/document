


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
	$(".tab_content02").hide();
	$("ul.thumb02 li:first a").addClass("active").show();
	$(".tab_content02:first").show();
	//タブクリック
	$("ul.thumb02 li").click(function() {
		$("ul.thumb02 li a").removeClass("active");
		$(this).children('a').addClass("active");
		$(".tab_content02").hide();
		var activeTab = $(this).find("a").attr("href");
		$(activeTab).fadeIn();
		return false;
	});
	$(".tab_content03").hide();
	$("ul.thumb03 li:first a").addClass("active").show();
	$(".tab_content03:first").show();
	//タブクリック
	$("ul.thumb03 li").click(function() {
		$("ul.thumb03 li a").removeClass("active");
		$(this).children('a').addClass("active");
		$(".tab_content03").hide();
		var activeTab = $(this).find("a").attr("href");
		$(activeTab).fadeIn();
		return false;
	});
	$(".tab_content04").hide();
	$("ul.thumb04 li:first a").addClass("active").show();
	$(".tab_content04:first").show();
	//タブクリック
	$("ul.thumb04 li").click(function() {
		$("ul.thumb04 li a").removeClass("active");
		$(this).children('a').addClass("active");
		$(".tab_content04").hide();
		var activeTab = $(this).find("a").attr("href");
		$(activeTab).fadeIn();
		return false;
	});
	$(".tab_content05").hide();
	$("ul.thumb05 li:first a").addClass("active").show();
	$(".tab_content05:first").show();
	//タブクリック
	$("ul.thumb05 li").click(function() {
		$("ul.thumb05 li a").removeClass("active");
		$(this).children('a').addClass("active");
		$(".tab_content05").hide();
		var activeTab = $(this).find("a").attr("href");
		$(activeTab).fadeIn();
		return false;
	});
	$(".tab_content06").hide();
	$("ul.thumb06 li:first a").addClass("active").show();
	$(".tab_content06:first").show();
	//タブクリック
	$("ul.thumb06 li").click(function() {
		$("ul.thumb06 li a").removeClass("active");
		$(this).children('a').addClass("active");
		$(".tab_content06").hide();
		var activeTab = $(this).find("a").attr("href");
		$(activeTab).fadeIn();
		return false;
	});
	$(".tab_content07").hide();
	$("ul.thumb07 li:first a").addClass("active").show();
	$(".tab_content07:first").show();
	//タブクリック
	$("ul.thumb07 li").click(function() {
		$("ul.thumb07 li a").removeClass("active");
		$(this).children('a').addClass("active");
		$(".tab_content07").hide();
		var activeTab = $(this).find("a").attr("href");
		$(activeTab).fadeIn();
		return false;
	});
	$(".tab_content07").hide();
	$("ul.thumb07 li:first a").addClass("active").show();
	$(".tab_content07:first").show();
	//タブクリック
	$("ul.thumb07 li").click(function() {
		$("ul.thumb07 li a").removeClass("active");
		$(this).children('a').addClass("active");
		$(".tab_content07").hide();
		var activeTab = $(this).find("a").attr("href");
		$(activeTab).fadeIn();
		return false;
	});
});
