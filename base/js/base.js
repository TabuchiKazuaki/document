


$(function() {

	$('.m_n').hide();
    $('.module_text').click(function(e){
    $(this).toggleClass("active");
    $(this).next(".m_n").slideToggle();
});
