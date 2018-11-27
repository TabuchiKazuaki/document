	$( document ).ready(function( $ ) {
		$( '#ranking' ).sliderPro({
			width: 530,
			height: 800,
			visibleSize: '100%',
			forceSize: 'none',
			arrows: true,
			loop: false,
			fadeArrows: false,
			autoSlideSize: false,
			slideDistance: 30,
			aspectRatio: 1.5,
			autoplay: false,
			buttons:false,
			fadeCaption: false,
			centerImage: true,
			thumbnailArrows: true,
			autoHeight: true,
			gotoSlide: function( event ) {
				var _this = $(this).parent('.u-clr-area[data-reactid="37"]').find('iframe[data-reactid="38"]');
				var hl = _this.height();
				console.log(_this.height());
				$('hl').css('height', '-1' +'px');
			},

			breakpoints: {
				768: {
					slideDistance: 15,
					width: '70%',
					height: 300
				},
				// 480: {
				// 	slideDistance: 20,
				// 	width: 280,
				// 	height: 158
				// },
				// 420: {
				// 	slideDistance: 15,
				// 	width: 260,
				// 	height: 126
				// },
				// 375: {
				// 	slideDistance: 10,
				// 	width: '60%',
				// 	height: 110
				// }
			}

		});
	});


$(function(){
    var $setElm = $('.txt_area');
    var cutFigure = '18'; // カットする文字数
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