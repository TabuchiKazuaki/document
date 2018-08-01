// $(function(){
//     var $setElm = $('.title');
//     var cutFigure = '36'; // カットする文字数
//     var afterTxt = ' …'; // 文字カット後に表示するテキスト

//     $setElm.each(function(){
//         var textLength = $(this).text().length;
//         var textTrim = $(this).text().substr(0,(cutFigure))

//         if(cutFigure < textLength) {
//             $(this).html(textTrim + afterTxt).css({visibility:'visible'});
//         } else if(cutFigure >= textLength) {
//             $(this).css({visibility:'visible'});
//         }
//     });
// });



// 1st
$(document).ready(function() {
var now = new Date();

var ele13 = document.getElementById('s_13');
var ele14 = document.getElementById('s_14');
var ele15 = document.getElementById('s_15');
var ele16 = document.getElementById('s_16');
var ele17 = document.getElementById('s_17');
var ele18 = document.getElementById('s_18');
var ele19 = document.getElementById('s_19');
var ele20 = document.getElementById('s_20');
var ele21 = document.getElementById('s_21');
var ele22 = document.getElementById('s_22');
var ele23 = document.getElementById('s_23');




var tt_13 = new Date("2018/07/16 23:00");
var out13 = new Date("2018/07/17 00:00");
if (now.getTime() > tt_13.getTime()){
	ele13.innerText = '今すぐ視聴する';
} if (now.getTime() > out13.getTime()) {
	ele13.innerText = '視聴予約する';
	ele13.href = "https://abema.tv/channels/special-plus/slots/DWLco1kiv9TudR";
}
var hosi = new Date("2018/07/23 23:00");
var hosi_out = new Date("2018/07/23 23:30");
if (now.getTime() > hosi.getTime()){
	ele13.innerText = '今すぐ視聴する';
	ele13.href = "https://abema.tv/channels/special-plus/slots/DWLco1kiv9TudR";
	$('#img_02').show();
	$('#img_01').hide();
} if (now.getTime() > hosi_out.getTime()) {
	ele13.innerText = 'ビデオを視聴する';
}

var tt_14 = new Date("2018/07/28 10:00");
var out14 = new Date("2018/07/28 10:30");
if (now.getTime() > tt_14.getTime()){
	ele14.innerText = '今すぐ視聴する';
} if (now.getTime() > out14.getTime()) {
	ele14.innerText = 'ビデオを視聴する';
	ele14.href = "https://abema.tv/video/title/90-1081";
}
var tt_15 = new Date("2018/07/29 22:00");
var out15 = new Date("2018/07/29 22:59");
if (now.getTime() > tt_15.getTime()){
	ele15.innerText = '今すぐ視聴する';
} if (now.getTime() > out15.getTime()) {
	ele15.innerText = 'ビデオを視聴する';
	ele15.href = "https://abema.tv/video/title/90-1053";
}
var tt_16 = new Date("2018/07/25 22:10");
var out16 = new Date("2018/07/25 23:20");
if (now.getTime() > tt_16.getTime()){
	ele16.innerText = '今すぐ視聴する';
} if (now.getTime() > out16.getTime()) {
	ele16.innerText = 'ビデオを視聴する';
	ele16.href = "https://abema.tv/video/episode/193-3_s1_p1";
}
var tt_17 = new Date("2018/07/26 23:20");
var out17 = new Date("2018/07/27 00:35");
if (now.getTime() > tt_17.getTime()){
	ele17.innerText = '今すぐ視聴する';
} if (now.getTime() > out17.getTime()) {
	ele17.innerText = 'ビデオを視聴する';
	ele17.href = "https://abema.tv/video/episode/193-35_s0_p1";
}
var tt_18 = new Date("2018/07/18 22:20");
var out18 = new Date("2018/07/18 23:30");
if (now.getTime() > tt_18.getTime()){
	ele18.innerText = '今すぐ視聴する';
} if (now.getTime() > out18.getTime()) {
	ele18.innerText = 'ビデオを視聴する';
	ele18.href = "https://abema.tv/video/episode/193-53_s1_p1";
}
var tt_19 = new Date("2018/07/19 22:20");
var out19 = new Date("2018/07/19 23:30");
if (now.getTime() > tt_19.getTime()){
	ele19.innerText = '今すぐ視聴する';
} if (now.getTime() > out19.getTime()) {
	ele19.innerText = 'ビデオを視聴する';
	ele19.href = "https://abema.tv/video/episode/193-22_s0_p1";
}
var tt_20 = new Date("2018/07/24 22:25");
var out20 = new Date("2018/07/24 23:30");
if (now.getTime() > tt_20.getTime()){
	ele20.innerText = '今すぐ視聴する';
} if (now.getTime() > out20.getTime()) {
	ele20.innerText = 'ビデオを視聴する';
	ele20.href = "https://abema.tv/video/episode/188-22_s1_p1";
}

var tt_21 = new Date("2018/07/19 22:00");
var out21 = new Date("2018/07/19 23:00");
if (now.getTime() > tt_21.getTime()){
	ele21.innerText = '今すぐ視聴する';
} if (now.getTime() > out21.getTime()) {
	ele21.innerText = 'ビデオを視聴する';
	ele21.href = "https://abema.tv/video/title/50-4";
}

var tt_22 = new Date("2018/07/24 22:00");
var out22 = new Date("2018/07/24 23:00");
if (now.getTime() > tt_22.getTime()){
	ele22.innerText = '今すぐ視聴する';
} if (now.getTime() > out22.getTime()) {
	ele22.innerText = 'ビデオを視聴する';
	ele22.href = "https://abema.tv/video/title/50-40";
}

var tt_23 = new Date("2018/07/30 23:00");
var out23 = new Date("2018/07/30 23:30");
if (now.getTime() > tt_23.getTime()){
	ele23.innerText = '今すぐ視聴する';
} if (now.getTime() > out23.getTime()) {
	ele23.innerText = 'ビデオを視聴する';
	ele23.href = "https://abema.tv/video/title/134-24";
}

// var tt_24 = new Date("2018/07/16 18:00");
// var out24 = new Date("2018/07/16 18:55");
// if (now.getTime() > tt_24.getTime()){
// 	ele24.innerText = '今すぐ視聴する';
// } if (now.getTime() > out24.getTime()) {
// 	ele24.innerText = 'ビデオを視聴する';
// 	ele24.href = "";
// }

// var tt_25 = new Date("2018/07/16 18:00");
// var out25 = new Date("2018/07/16 18:55");
// if (now.getTime() > tt_25.getTime()){
// 	ele25.innerText = '今すぐ視聴する';
// } if (now.getTime() > out25.getTime()) {
// 	ele25.innerText = 'ビデオを視聴する';
// 	ele25.href = "";
// }






});
