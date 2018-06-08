

$(document).ready(function() {
     //初期表示
     $(".tab_content_four").hide();//全ての.tab_contentを非表示
     $("ul.tabs_four li:first").addClass("active").show();//tabs内最初のliに.activeを追加
     $(".tab_content_four:first").show();//最初の.tab_contentを表示
     //タブクリック時
     $("ul.tabs_four li").click(function() {
          $("ul.tabs_four li").removeClass("active");//.activeを外す
          $(this).addClass("active");//クリックタブに.activeを追加
          $(".tab_content_four").hide();//全ての.tab_contentを非表示
          var activeTab = $(this).find("a").attr("href");//アクティブタブコンテンツ
          $(activeTab).fadeIn();//アクティブタブコンテンツをフェードイン
          return false;
     });
});
