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
	$('.header_list').hide();
	$(".header_item").on('click',function() {
		$(this).next('.header_list').fadeIn();
		var h = $('.header_list').height();
		var H = $('.header_list').height('auto').height();
		$('.header_list').height(h);
		$('.header_list').stop().animate({height : H}, 200, function() {
			$(this).height('auto');
		});
	});
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

