
// $(document).ready(function() {
// 	 //初期表示
// 	$(".tab_content01").hide();//全ての.tab_contentを非表示
// 	$("ul.thumb01 li:first a").addClass("active flipInX").show();//tabs内最初のliに.activeを追加
// 	$(".tab_content01:first").show();//最初の.tab_contentを表示
// 	//タブクリック時
// 	$("ul.thumb01 li").click(function() {
// 		$("ul.thumb01 li a").removeClass("active flipInX");//.activeを外す
// 		$(this).children('a').addClass("active flipInX");//クリックタブに.activeを追加
// 		$(".tab_content01").hide();
// 		var activeTab = $(this).parents(".cc_item").next('.tab_content01').find("a").attr("href");
// 		$(activeTab).fadeIn();
// 		return false;
// 	});


// 	$(".tab_content02").hide();//全ての.tab_contentを非表示
// 	$("ul.thumb02 li:first a").addClass("active ").show();//tabs内最初のliに.activeを追加
// 	$(".tab_content02:first").show();//最初の.tab_contentを表示
// 	//タブクリック時
// 	$("ul.thumb02 li").click(function() {
// 		$("ul.thumb02 li a").removeClass("active flipInX");//.activeを外す
// 		$(this).children('a').addClass("active flipInX");//クリックタブに.activeを追加
// 		$(".tab_content02").hide();
// 		var activeTab = $(this).parents(".c_c_list").next('.tab_content02').find("a").attr("href");
// 		$(activeTab).fadeIn();
// 		return false;
// 	});

// 	$(".tab_content03").hide();//全ての.tab_contentを非表示
// 	$("ul.thumb03 li:first a").addClass("active").show();//tabs内最初のliに.activeを追加
// 	$(".tab_content03:first").show();//最初の.tab_contentを表示
// 	//タブクリック時
// 	$("ul.thumb03 li").click(function() {
// 		$("ul.thumb03 li a").removeClass("active flipInX");//.activeを外す
// 		$(this).children('a').addClass("active flipInX");//クリックタブに.activeを追加
// 		$(".tab_content03").hide();
// 		var activeTab = $(this).parents(".c_c_list").next('.tab_content03').find("a").attr("href");
// 		$(activeTab).fadeIn();
// 		return false;
// 	});
// });

$(document).ready(function() {
	//初期表示
	$(".tab_content01").hide();//全ての.tab_contentを非表示
	$("ul.thumb01 li:first a").addClass("active").show();//tabs内最初のliに.activeを追加
	$(".tab_content01:first").show();//最初の.tab_contentを表示

	//タブクリック時
	$("ul.thumb01 li").click(function() {
		$("ul.thumb01 li a").removeClass("active flipInX");//.activeを外す
		$(this).children('a').addClass("active flipInX");//クリックタブに.activeを追加
		$(".tab_content01").hide();
		var activeTab = $(this).find("a").attr("href");
		$(activeTab).fadeIn();
		return false;
	});

	$('.tex').hide();
	$('.tex:first').show();
	$('.ta1').click(function() {
		$('.tex').hide();
		$('.tt01').fadeIn();
	});
	$('.ta2').click(function() {
		$('.tex').hide();
		$('.tt02').fadeIn();
	});


	$('.tsx').hide();
	$('.tsx:first').show();
	$('.ta20').click(function() {
		$('.tsx').hide();
		$('.ts01').fadeIn();
	});
	$('.ta21').click(function() {
		$('.tsx').hide();
		$('.ts02').fadeIn();
	});
	$('.ta22').click(function() {
		$('.tsx').hide();
		$('.ts03').fadeIn();
	});

	$('.tmx').hide();
	$('.tmx:first').show();
	$('.tm20').click(function() {
		$('.tmx').hide();
		$('.tm01').fadeIn();
	});
	$('.tm21').click(function() {
		$('.tmx').hide();
		$('.tm02').fadeIn();
	});

	$(".tab_content02").hide();//全ての.tab_contentを非表示
	$("ul.thumb02 li:first a").addClass("active").show();//tabs内最初のliに.activeを追加
	$(".tab_content02:first").show();//最初の.tab_contentを表示

	$('.tex').hide();
	$('.tex:first').show();

	$("ul.thumb02 li").click(function() {
		$("ul.thumb02 li a").removeClass("active flipInX");//.activeを外す
		$(this).children('a').addClass("active flipInX");//クリックタブに.activeを追加
		$(".tab_content02").hide();
		$(".tex").hide();
		 var textTab = $(this).find("a").attr("href");
		$(textTab).fadeIn();
		var activeTab = $(this).find("a").attr("href");
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
		var activeTab = $(this).find("a").attr("href");
		$(activeTab).fadeIn();
		return false;
	});
	 $(".tab_content04").hide();//全ての.tab_contentを非表示
	$("ul.thumb04 li:first a").addClass("active").show();//tabs内最初のliに.activeを追加
	$(".tab_content04:first").show();//最初の.tab_contentを表示
	//タブクリック時
	$("ul.thumb04 li").click(function() {
		$("ul.thumb04 li a").removeClass("active flipInX");//.activeを外す
		$(this).children('a').addClass("active flipInX");//クリックタブに.activeを追加
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
		$("ul.thumb05 li a").removeClass("active flipInX");//.activeを外す
		$(this).children('a').addClass("active flipInX");//クリックタブに.activeを追加
		$(".tab_content05").hide();
		var activeTab = $(this).find("a").attr("href");
		$(activeTab).fadeIn();
		return false;
	});
});
