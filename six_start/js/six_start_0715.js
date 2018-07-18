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
var ele01 = document.getElementById('s_01');
var ele02 = document.getElementById('s_02');
var ele03 = document.getElementById('s_03');
var ele04 = document.getElementById('s_04');
var ele05 = document.getElementById('s_05');
var ele06 = document.getElementById('s_06');
var ele07 = document.getElementById('s_07');
var ele08 = document.getElementById('s_08');
var ele09 = document.getElementById('s_09');
var ele10 = document.getElementById('s_10');
var ele11 = document.getElementById('s_11');
var ele12 = document.getElementById('s_12');

var tt_01 = new Date("2018/07/16 18:00");
var out01 = new Date("2018/07/16 18:55");
if (now.getTime() > tt_01.getTime()){
	ele01.innerText = '今すぐ視聴する';
} if (now.getTime() > out01.getTime()) {
	ele01.innerText = 'ビデオを視聴する';
	// ele01.style.backgroundColor = "#bbb";
	ele01.href = "https://abema.tv/video/episode/26-45_s1_p1";
}
var ttb_02 = new Date("2018/07/16 23:00");
var tt_02 = new Date("2018/07/19 00:50");
var out02 = new Date("2018/07/20 00:50");
if (now.getTime() > ttb_02.getTime()){
	ele02.innerText = '今すぐ視聴する';
}
if (now.getTime() > tt_02.getTime()){
	ele02.innerText = 'ビデオを視聴する';
	ele02.href = "https://abema.tv/video/episode/26-42_s0_p1";
} if (now.getTime() > out02.getTime()) {
	ele02.innerText = '放送終了しました';
	ele02.style.backgroundColor = "#bbb";
	ele02.href = "javascript:void(0)";
}

var tt_03 = new Date("2018/07/18 17:00");
var out03 = new Date("2018/07/19 17:55");
if (now.getTime() > tt_03.getTime()){
	ele03.innerText = '今すぐ視聴する';
} if (now.getTime() > out03.getTime()) {
	ele03.innerText = 'ビデオを視聴する';
	// ele03.style.backgroundColor = "#bbb";
	ele03.href = "https://abema.tv/video/episode/106-1_s0_p1";
}
var tt_04 = new Date("2018/07/19 21:00");
var out04 = new Date("2018/07/19 22:50");
if (now.getTime() > tt_04.getTime()){
	ele04.innerText = '今すぐ視聴する';
} if (now.getTime() > out04.getTime()) {
	ele04.innerText = 'ビデオを視聴する';
	ele04.href = "https://abema.tv/video/episode/26-6_s2_p1";
}
// var tt_05 = new Date("2018/07/16 18:00");
// var out05 = new Date("2018/07/16 18:55");
// if (now.getTime() > tt_05.getTime()){
// 	ele05.innerText = '今すぐ視聴する';
// } if (now.getTime() > out05.getTime()) {
// 	ele05.innerText = 'ビデオを視聴する';
// 	ele05.href = "";
// }
var tt_06 = new Date("2018/07/20 01:30");
var out06 = new Date("2018/07/20 02:30");
if (now.getTime() > tt_06.getTime()){
	ele06.innerText = '今すぐ視聴する';
} if (now.getTime() > out06.getTime()) {
	ele06.innerText = 'ビデオを視聴する';
	ele06.href = "https://abema.tv/video/episode/248-2_s0_p1";
}
// var tt_07 = new Date("2018/07/16 18:00");
// var out07 = new Date("2018/07/16 18:55");
// if (now.getTime() > tt_07.getTime()){
// 	ele07.innerText = '今すぐ視聴する';
// } if (now.getTime() > out07.getTime()) {
// 	ele07.innerText = 'ビデオを視聴する';
// 	ele07.href = "";
// }
var tt_08 = new Date("2018/07/21 22:00");
var out08 = new Date("2018/07/21 23:25");
if (now.getTime() > tt_08.getTime()){
	ele08.innerText = '今すぐ視聴する';
} if (now.getTime() > out08.getTime()) {
	ele08.innerText = 'ビデオを視聴する';
	ele08.href = "https://abema.tv/video/episode/25-92_s1_p1";
}
var tt_09 = new Date("2018/07/23 19:55");
var out09 = new Date("2018/07/23 20:50");
if (now.getTime() > tt_09.getTime()){
	ele09.innerText = '今すぐ視聴する';
} if (now.getTime() > out09.getTime()) {
	ele09.innerText = 'ビデオを視聴する';
	ele09.href = "https://abema.tv/video/episode/13-20xc-mkyminy_s0_p1";
}
var tt_10 = new Date("2018/07/28 01:30");
var out10 = new Date("2018/07/28 02:30");
if (now.getTime() > tt_10.getTime()){
	ele10.innerText = '今すぐ視聴する';
} if (now.getTime() > out10.getTime()) {
	ele10.innerText = 'ビデオを視聴する';
	ele10.href = "https://abema.tv/video/episode/248-3_s0_p1";
}
var tt_11 = new Date("2018/07/28 00:00");
var out11 = new Date("2018/07/29 00:52");
if (now.getTime() > tt_11.getTime()){
	ele11.innerText = '今すぐ視聴する';
} if (now.getTime() > out11.getTime()) {
	ele11.innerText = 'ビデオを視聴する';
	ele11.href = "https://abema.tv/video/episode/26-28_s1_p1";
}
var tt_12 = new Date("2018/07/30 17:00");
var out12 = new Date("2018/07/30 18:00");
if (now.getTime() > tt_12.getTime()){
	ele12.innerText = '今すぐ視聴する';
} if (now.getTime() > out12.getTime()) {
	ele12.innerText = 'ビデオを視聴する';
	ele12.href = "https://abema.tv/video/episode/54-11_s1_p1";
}





});
