(function() {

	$(window).on('load resize', function(){
		$('.item').matchHeight({
			property: 'min-height'
		});

		$('.items-container').each(function() {
			$(this).children('.item-0').matchHeight({
				target: $(this).find('.item-1')
			});
		});
	});

})();


$(document).ready(function() {
	$('.header_list_sp').hide();
	$(".header_item_sp").on('click',function() {
		if($(this).hasClass("active")) {
			$(this).removeClass("active");
			$('.header_list_sp').stop().animate({height : 0}, 200);
			$('.header_list_sp').css('opacity','0')
		}
		else {
			$(this).addClass("active");
			$(this).next('.header_list_sp').show();
			var h = $('.header_list_sp').height();
			var H = $('.header_list_sp').height('auto').height();
			$('.header_list_sp').height(h);
			$('.header_list_sp').stop().animate({height : H}, 200, function() {
				$(this).height('auto');
			});
			$('.header_list_sp').css('opacity','1').animate(200);
		}
	});
});
