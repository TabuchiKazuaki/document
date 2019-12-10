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
	$(".tab_content06").hide();//全ての.tab_contentを非表示
	 $("ul.thumb06 li:first a").addClass("active").show();//tabs内最初のliに.activeを追加
	 $(".tab_content06:first").show();//最初の.tab_contentを表示
	 //タブクリック時
	 $("ul.thumb06 li").click(function() {
		  $("ul.thumb06 li a").removeClass("active");//.activeを外す
		  $(this).children('a').addClass("active");//クリックタブに.activeを追加
		  $(".tab_content06").hide();
		  var activeTab = $(this).find("a").attr("href");
		  $(activeTab).fadeIn();
		  return false;
	});
	$(".tab_content07").hide();//全ての.tab_contentを非表示
	$("ul.thumb07 li:first a").addClass("active").show();//tabs内最初のliに.activeを追加
	$(".tab_content07:first").show();//最初の.tab_contentを表示
	//タブクリック時
	$("ul.thumb07 li").click(function() {
		  $("ul.thumb07 li a").removeClass("active");//.activeを外す
		  $(this).children('a').addClass("active");//クリックタブに.activeを追加
		  $(".tab_content07").hide();
		  var activeTab = $(this).find("a").attr("href");
		  $(activeTab).fadeIn();
		  return false;
	});
	$(".tab_content08").hide();//全ての.tab_contentを非表示
	$("ul.thumb08 li:first a").addClass("active").show();//tabs内最初のliに.activeを追加
	$(".tab_content08:first").show();//最初の.tab_contentを表示
	//タブクリック時
	$("ul.thumb08 li").click(function() {
		  $("ul.thumb08 li a").removeClass("active");//.activeを外す
		  $(this).children('a').addClass("active");//クリックタブに.activeを追加
		  $(".tab_content08").hide();
		  var activeTab = $(this).find("a").attr("href");
		  $(activeTab).fadeIn();
		  return false;
	});


	var now = new Date();
	var tl01 = new Date("2019/06/21 00:00");
	if (now.getTime() > tl01.getTime()) {

		$('#t01').show();
		$('#t02').show();
		$('#t03').show();
		$('#t04').show();
		$('#t05').show();
		$('#bag14').show();
		$('#bag14_new').hide();
	}

	var now = new Date();
	var tt02 = new Date("2019/07/14 22:00");
	if (now.getTime() > tt02.getTime()) {
		$('#t01').hide();
		$('#t02').hide();
		$('#t03').hide();
		$('#t04').hide();
		$('#t05').hide();
	}

	var now = new Date();
	var tt03 = new Date("2019/07/14 23:00");
	if (now.getTime() > tt03.getTime()) {
		$('#bag14').hide();
		$('#bag14_new').show();
		$('#bag01').text('今すぐ見る');
	}
});




