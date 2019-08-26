


$(function() {

	tog = {

		init : function() {
			this.toggleAction();
		},

		// toggle アクション
		toggleAction :function(){
			$('.m_n').hide();

			$('.m_t').click(function(){
				$(this).next('.m_n').slideToggle();

				if($(this).hasClass('active')) {
					$(this).removeClass("active");
				}
				else {
					$(this).addClass("active");
				}
			});
			$('.release').click(function(){
				$(this).css('background','#ce8d79');
				$(this).text('全モジュールの表示 済み');
				$(".m_n").css('display','block');
			});
		}
	}

	tog.init();
});



$(window).bind("load", function(){
	$('.scrollTo').click(function() {
		var speed = 300; // ミリ秒
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$('body,html').animate({scrollTop:position}, speed, 'linear');
		return false;
	});
});
$(function(){
  $('.btnHamburger').on('click', function(){
    $(this).toggleClass('is-active');
    $(this).next('.module_num').fadeToggle();
    return false;
  });
});



$(function(){
    var topBtn = $('.w_right');
    $(window).scroll(function () {
        if ($(this).scrollTop() > 350) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
});