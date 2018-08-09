
$(document).ready(function() {
var now = new Date();
var ch19 = document.getElementById('dh_19');
var ct19 = document.getElementById('dt_19');
var bt19 = document.getElementById('bt_19');

var ch20 = document.getElementById('dh_20');
var ct20 = document.getElementById('dt_20');
var bt20 = document.getElementById('bt_20');

// 19
var tt19 = new Date("2016/08/31 23:59");
if (now.getTime() > tt19.getTime()){
	$(ch19).show();$(ct19).show();
}
var b019 = new Date("2016/08/31 23:59");
if (now.getTime() > b019.getTime()){
	$(bt19).text('キャンペーン募集は終了しました');
	$(bt19).css({'background':'#bbb'});
	$(bt19).attr("href","javascript:void(0)");
}
// 20
var tt20 = new Date("2016/09/01 00:00");
if (now.getTime() > tt20.getTime()){
	$(ch20).show();$(ct20).show();
}
var b020 = new Date("2016/09/17 23:59");
if (now.getTime() > b020.getTime()){
	$(bt20).text('キャンペーン募集は終了しました');
	$(bt20).css({'background':'#bbb'});
	$(bt20).attr("href","javascript:void(0)");
}



});
