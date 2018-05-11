// コンテンツ要素内の高さをそろえる
$(function(){
	//囲っているul要素
    var $imgLists = $('.wrap_item');
    $imgLists.each(function(){
        var $self = $(this);

        var maxHeight = Math.max.apply(null, $self.find('li').map(function(i , v){
            return $(v).outerHeight();
        }));
        $self.css('height', maxHeight);
        $self.find('li').each(function(){
        	// 揃えたい要素
            $(this).find('.wrap_date').css('position', 'absolute');
        })
    });
})
