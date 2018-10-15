
$(window).resize(function(){
	$('.item').matchHeight({
		property: 'min-height'
	});

	$('.items-container').each(function() {
		$(this).children('.item-0').matchHeight({
			target: $(this).find('.item-1')
		});
	});
});

