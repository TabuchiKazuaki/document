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
});


// テスト01
// $(window).bind("load", function(){
// 	// 01
// 	if(document.URL.match(/2583752/) ) {
// 		var menuHeight = $(".choice_fix").height();
// 		var startPos = 0;
// 		$(window).scroll(function(){
// 		  var currentPos = $(this).scrollTop();
// 		  if (currentPos > startPos) {
// 			if($(window).scrollTop() >= 200) {
// 			  // $(".choice_fix").css("bottom", "-" + menuHeight + "px");
// 			}
// 		  } else {
// 			$(".choice_fix").css("bottom", 0 + "px");
// 		  }
// 		  startPos = currentPos;
// 		});
// 	}
// 	// 02
// 	if(document.URL.match(/2583633/) ) {
// 		var menuHeight = $(".choice_fix").height();
// 		var startPos = 0;
// 		$(window).scroll(function(){
// 		  var currentPos = $(this).scrollTop();
// 		  if (currentPos > startPos) {
// 			if($(window).scrollTop() >= 200) {
// 			  // $(".choice_fix").css("bottom", "-" + menuHeight + "px");
// 			}
// 		  } else {
// 			$(".choice_fix").css("bottom", 0 + "px");
// 		  }
// 		  startPos = currentPos;
// 		});
// 	}

// 	// 03
// 	if(document.URL.match(/2559385/) ) {
// 		var menuHeight = $(".choice_fix").height();
// 		var startPos = 0;
// 		$(window).scroll(function(){
// 		  var currentPos = $(this).scrollTop();
// 		  if (currentPos > startPos) {
// 			if($(window).scrollTop() >= 200) {
// 			  // $(".choice_fix").css("bottom", "-" + menuHeight + "px");
// 			}
// 		  } else {
// 			$(".choice_fix").css("bottom", 0 + "px");
// 		  }
// 		  startPos = currentPos;
// 		});
// 	}

// 	// 04
// 	if(document.URL.match(/2585226/) ) {
// 		var menuHeight = $(".choice_fix").height();
// 		var startPos = 0;
// 		$(window).scroll(function(){
// 		  var currentPos = $(this).scrollTop();
// 		  if (currentPos > startPos) {
// 			if($(window).scrollTop() >= 200) {
// 			  // $(".choice_fix").css("bottom", "-" + menuHeight + "px");
// 			}
// 		  } else {
// 			$(".choice_fix").css("bottom", 0 + "px");
// 		  }
// 		  startPos = currentPos;
// 		});
// 	}
// });


// // テスト02
// $(window).bind("load", function(){
// 	if(document.URL.match(/2583633/) ) {
// 		var menuHeight = $(".choice_fix").height();
// 		var startPos = 0;
// 		$(window).scroll(function(){
// 		  var currentPos = $(this).scrollTop();
// 		  if (currentPos > startPos) {
// 			if($(window).scrollTop() >= 200) {
// 			  // $(".choice_fix").css("bottom", "-" + menuHeight + "px");
// 			}
// 		  } else {
// 			$(".choice_fix").css("bottom", 0 + "px");
// 		  }
// 		  startPos = currentPos;
// 		});
// 	}
// });

