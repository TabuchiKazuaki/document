(function() {

    $(function() {
        var byRow = $('body').hasClass('test-rows');

        $('.items-container').each(function() {
            $(this).children('.item').matchHeight({
                byRow: byRow
            });
        });

        $('.item').matchHeight({
            property: 'min-height'
        });

        $('.target-items').each(function() {
            $(this).children('.item-0').matchHeight({
                target: $(this).find('.item-1')
            });
        });

        $('.btn-remove').click(function() {
            $('.item').matchHeight({
                remove: true
            });
        });
    });

})();