$(document).ready(function() {
	 //初期表示
	$(".tab_content").hide();//全ての.tab_contentを非表示
	$("ul.tb li:first,ul.i_i li:first").addClass("active").show();//tabs内最初のliに.activeを追加
	$(".tab_content:first").show();//最初の.tab_contentを表示
	//タブクリック時
	$("ul.tb li,ul.i_i li").click(function() {
	     $("ul.tb li,ul.i_i li").removeClass("active");//.activeを外す
	     $('#wa01').on('click',function() {
			$(this).addClass('active');
			$('.wp').find("#ta01").addClass("active");
		});
		$('#wa02').on('click',function() {
			$(this).addClass('active');
			$('.wp').find("#ta02").addClass("active");
		});
		$('#wa03').on('click',function() {
			$(this).addClass('active');
			$('.wp').find("#ta03").addClass("active");
		});
		$('#wa04').on('click',function() {
			$(this).addClass('active');
			$('.wp').find("#ta04").addClass("active");
		});
	     // $(this).addClass("active");//クリックタブに.activeを追加
	     $(".tab_content").hide();//全ての.tab_contentを非表示
	     var activeTab = $(this).find("a").attr("href");//アクティブタブコンテンツ
	     $(activeTab).fadeIn();//アクティブタブコンテンツをフェードイン
	     return false;
	});


	// $(".tab_content").hide();//全ての.tab_contentを非表示
	// $("ul.tb li:first,ul.i_i li:first").addClass("active").show();//tabs内最初のliに.activeを追加
	// $(".tab_content:first").show();//最初の.tab_contentを表示
	// //タブクリック時
	// $("ul.tb li,ul.i_i li").click(function() {
	// 	$("ul.tb li,ul.i_i li").removeClass("active");//.activeを外す
	// 	$(".tab_content").hide();//全ての.tab_contentを非表示
	// 	var activeTab = $(this).find("a").attr("href");//アクティブタブコンテンツ
	// 	$(activeTab).fadeIn();//アクティブタブコンテンツをフェードイン
	// 	return false;
	// });

});
