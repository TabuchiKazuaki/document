$(document).ready(function() {
	 //初期表示
	 $(".tab_content01").hide();//全ての.tab_contentを非表示
	 $("ul.thumb01 li:first a").addClass("active").show();//tabs内最初のliに.activeを追加
	 $(".tab_content01:first").show();//最初の.tab_contentを表示
	 //タブクリック時
	 $("ul.thumb01 li").click(function() {
		  $("ul.thumb01 li a").removeClass("active");//.activeを外す
		  $(this).children('a').addClass("active");//クリックタブに.activeを追加
		  $(".tab_content01").hide();
		  var activeTab = $(this).find("a").attr("href");
		  $(activeTab).fadeIn();
		  return false;
	 });


	 $(".tab_content02").hide();//全ての.tab_contentを非表示
	 $("ul.thumb02 li:first a").addClass("active").show();//tabs内最初のliに.activeを追加
	 $(".tab_content02:first").show();//最初の.tab_contentを表示
	 //タブクリック時
	 $("ul.thumb02 li").click(function() {
		  $("ul.thumb02 li a").removeClass("active");//.activeを外す
		  $(this).children('a').addClass("active");//クリックタブに.activeを追加
		  $(".tab_content02").hide();
		  var activeTab = $(this).find("a").attr("href");
		  $(activeTab).fadeIn();
		  return false;
	 });

	  $(".tab_content03").hide();//全ての.tab_contentを非表示
	 $("ul.thumb03 li:first a").addClass("active").show();//tabs内最初のliに.activeを追加
	 $(".tab_content03:first").show();//最初の.tab_contentを表示
	 //タブクリック時
	 $("ul.thumb03 li").click(function() {
		  $("ul.thumb03 li a").removeClass("active");//.activeを外す
		  $(this).children('a').addClass("active");//クリックタブに.activeを追加
		  $(".tab_content03").hide();
		  var activeTab = $(this).find("a").attr("href");
		  $(activeTab).fadeIn();
		  return false;
	 });
	  $(".tab_content04").hide();//全ての.tab_contentを非表示
	 $("ul.thumb04 li:first a").addClass("active").show();//tabs内最初のliに.activeを追加
	 $(".tab_content04:first").show();//最初の.tab_contentを表示
	 //タブクリック時
	 $("ul.thumb04 li").click(function() {
		  $("ul.thumb04 li a").removeClass("active");//.activeを外す
		  $(this).children('a').addClass("active");//クリックタブに.activeを追加
		  $(".tab_content04").hide();
		  var activeTab = $(this).find("a").attr("href");
		  $(activeTab).fadeIn();
		  return false;
	 });
	  $(".tab_content05").hide();//全ての.tab_contentを非表示
	 $("ul.thumb05 li:first a").addClass("active").show();//tabs内最初のliに.activeを追加
	 $(".tab_content05:first").show();//最初の.tab_contentを表示
	 //タブクリック時
	 $("ul.thumb05 li").click(function() {
		  $("ul.thumb05 li a").removeClass("active");//.activeを外す
		  $(this).children('a').addClass("active");//クリックタブに.activeを追加
		  $(".tab_content05").hide();
		  var activeTab = $(this).find("a").attr("href");
		  $(activeTab).fadeIn();
		  return false;
	 });
});



