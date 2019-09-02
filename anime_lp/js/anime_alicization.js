
$(document).ready(function() {
	 //初期表示
	$(".tab_content01").hide();//全ての.tab_contentを非表示
	$("ul.thumb01 li:first a").addClass("active flipInX").show();//tabs内最初のliに.activeを追加
	$(".tab_content01:first").show();//最初の.tab_contentを表示
	//タブクリック時
	$("ul.thumb01 li").click(function() {
		$("ul.thumb01 li a").removeClass("active flipInX");//.activeを外す
		$(this).children('a').addClass("active flipInX");//クリックタブに.activeを追加
		$(".tab_content01").hide();
		var activeTab = $(this).parents(".c_c_i").next('.tab_content01').find("a").attr("href");
		$(activeTab).fadeIn();
		return false;
	});


	$(".tab_content02").hide();//全ての.tab_contentを非表示
	$("ul.thumb02 li:first a").addClass("active ").show();//tabs内最初のliに.activeを追加
	$(".tab_content02:first").show();//最初の.tab_contentを表示
	//タブクリック時
	$("ul.thumb02 li").click(function() {
		$("ul.thumb02 li a").removeClass("active flipInX");//.activeを外す
		$(this).children('a').addClass("active flipInX");//クリックタブに.activeを追加
		$(".tab_content02").hide();
		var activeTab = $(this).parents(".c_c_i").next('.tab_content02').find("a").attr("href");
		$(activeTab).fadeIn();
		return false;
	});

	$(".tab_content03").hide();//全ての.tab_contentを非表示
	$("ul.thumb03 li:first a").addClass("active").show();//tabs内最初のliに.activeを追加
	$(".tab_content03:first").show();//最初の.tab_contentを表示
	//タブクリック時
	$("ul.thumb03 li").click(function() {
		$("ul.thumb03 li a").removeClass("active flipInX");//.activeを外す
		$(this).children('a').addClass("active flipInX");//クリックタブに.activeを追加
		$(".tab_content03").hide();
		var activeTab = $(this).parents(".c_c_i").next('.tab_content03').find("a").attr("href");
		$(activeTab).fadeIn();
		return false;
	});
});