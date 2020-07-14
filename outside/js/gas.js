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



	var timer02 = false;
	$(window).resize(function() {
		if (timer02 !== false) {
			clearTimeout(timer02);
		}
		timer02 = setTimeout(function() {
			if(window.matchMedia("(max-width:768px)").matches){
				$('.a02').attr("href","https://home.osakagas.co.jp/sp/electricity/cp/2020summer.html");
			}else{
				$('.a02').attr("href","https://home.osakagas.co.jp/electricity/cp/2020summer.html");
			}
		}, 200);
	});
})




$(function(){
  var close = $('.close');

  close.on('click', function(){ //
      window.open('about:blank','_self').close();
  });
});