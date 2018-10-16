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
	// $('.header_list').hide();
	$(".header_item").on('click',function() {
		// $(this).addClass('active');
		if($(this).hasClass("active")) {
			$(this).removeClass("active");
			$('.header_list').stop().animate({height : 0}, 200);
		}
		else {
			$(this).addClass("active");
			$(this).next('.header_list').show();
			var h = $('.header_list').height();
			var H = $('.header_list').height('auto').height();
			$('.header_list').height(h);
			$('.header_list').stop().animate({height : H}, 200, function() {
				$(this).height('auto');
			});
		}
	});

});

$(window).on('load resize', function(){
	var w = $(window).width();
	var x = 768;
	if (w <= x) {
		('.header_list').hide();
	 } else {
		('.header_list').show();
	}
});


// $(window).resize(function(){
// 	$('.item').matchHeight({
// 		property: 'min-height'
// 	});

// 	$('.items-container').each(function() {
// 		$(this).children('.item-0').matchHeight({
// 			target: $(this).find('.item-1')
// 		});
// 	});
// });

