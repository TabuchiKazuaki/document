


$(document).ready(function() {
var now = new Date();
var bt01 = document.getElementById('bt_01');
var bt02 = document.getElementById('bt_02');
var bt03 = document.getElementById('bt_03');
var bt04 = document.getElementById('bt_04');
var bt05 = document.getElementById('bt_05');
var bt06 = document.getElementById('bt_06');
var bt07 = document.getElementById('bt_07');



// 01
var b001 = new Date("2016/08/25 23:59");
if (now.getTime() > b001.getTime()){
	$(bt01).text('キャンペーン募集は終了しました');
	$(bt01).css({'background':'#bbb'});
	$(bt01).attr("href","javascript:void(0)");
}






});
