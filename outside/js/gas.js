$(function(){
  var timer = false;
  $(window).resize(function() {
    if (timer !== false) {
      clearTimeout(timer);
    }
    timer = setTimeout(function() {
      if(window.matchMedia("(max-width:768px)").matches){
		$('.a01').attr("href","https://home.osakagas.co.jp/sp/electricity/lp/with_abema/index.html?utm_source=abema-hp&utm_medium=link&utm_campaign=electric-abema&utm_content=sp");
      }else{
		$('.a01').attr("href","https://home.osakagas.co.jp/electricity/lp/with_abema/index.html?utm_source=abema-hp&utm_medium=link&utm_campaign=electric-abema&utm_content=pc");
      }
    }, 200);
  });
})

