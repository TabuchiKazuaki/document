$(function(){
	var timer = false;
	$(window).resize(function() {
		if (timer !== false) {
			clearTimeout(timer);
		}
		timer = setTimeout(function() {
			if(window.matchMedia("(max-width:768px)").matches){
				$('.a01').attr("href","https://services.osakagas.co.jp/portalc/contents-2/sp/electricity/switching/index.html?disp_plantype=onlyplan_a&utm_source=abema-hp&utm_medium=link&utm_campaign=electric-abema&utm_content=sp");
			}else{
				$('.a01').attr("href","https://services.osakagas.co.jp/portalc/contents-2/pc/electricity/switching/index.php?disp_plantype=onlyplan_a&utm_source=abema-hp&utm_medium=link&utm_campaign=electric-abema&utm_content=pc");
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

	// シミュレーション
	var timer03 = false;
	$(window).resize(function() {
		if (timer03 !== false) {
			clearTimeout(timer03);
		}
		timer03 = setTimeout(function() {
			if(window.matchMedia("(max-width:768px)").matches){
				$('.a03').attr("href","https://wwwe7.osakagas.co.jp/rkninsim/electricity/c2/sp?disp_plantype=onlyplan_abema");
			}else{
				$('.a03').attr("href","https://wwwe7.osakagas.co.jp/rkninsim/electricity/c2/pc?disp_plantype=onlyplan_abema");
			}
		}, 200);
	});
})


