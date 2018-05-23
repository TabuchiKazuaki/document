$(document).ready(function() {
     //初期表示
     $(".tab_content").hide();//全ての.tab_contentを非表示
     $("ul.tabs li:eq(3)").addClass("active").show();//tabs内最初のliに.activeを追加
     $(".tab_content:eq(3)").show();//最初の.tab_contentを表示
     //タブクリック時
     $("ul.tabs li").click(function() {
          $("ul.tabs li").removeClass("active");//.activeを外す
          $(this).addClass("active");//クリックタブに.activeを追加
          $(".tab_content").hide();//全ての.tab_contentを非表示
          var activeTab = $(this).find("a").attr("href");//アクティブタブコンテンツ
          $(activeTab).fadeIn();//アクティブタブコンテンツをフェードイン
          return false;
     });
});
$(function(){
    var $setElm = $('.rank_area');
    var cutFigure = '25'; // カットする文字数
    var afterTxt = ' …'; // 文字カット後に表示するテキスト

    $setElm.each(function(){
        var textLength = $(this).text().length;
        var textTrim = $(this).text().substr(0,(cutFigure))

        if(cutFigure < textLength) {
            $(this).html(textTrim + afterTxt).css({visibility:'visible'});
        } else if(cutFigure >= textLength) {
            $(this).css({visibility:'visible'});
        }
    });
});


