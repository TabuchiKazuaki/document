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
var ele03 = document.getElementById('s_04');
var ele04 = document.getElementById('s_05');
var ele06 = document.getElementById('s_06');
var ele07 = document.getElementById('s_07');
var ele08 = document.getElementById('s_08');
var ele09 = document.getElementById('s_09');
var ele10 = document.getElementById('s_10');
var ele11 = document.getElementById('s_11');
var ele12 = document.getElementById('s_12');
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

var tt_01 = new Date("2018/06/16 18:00");
var out01 = new Date("2018/06/16 18:55");
if (now.getTime() > tt_01.getTime()){
	ele01.innerText = '今すぐ視聴する';
} if (now.getTime() > out01.getTime()) {
	ele01.innerText = 'ビデオを視聴する';
	// ele01.style.backgroundColor = "#bbb";
	ele01.href = "https://abema.tv/video/episode/26-45_s1_p1";
}
var tt_02 = new Date("2018/06/16 23:00");
var out02 = new Date("2018/06/20 00:50");
if (now.getTime() > tt_02.getTime()){
	ele02.innerText = '今すぐ視聴する';
} if (now.getTime() > out02.getTime()) {
	ele02.innerText = '放送終了しました';
	ele02.style.backgroundColor = "#bbb";
	ele02.href = "https://abema.tv/video/episode/26-42_s0_p1";
}

var tt_03 = new Date("2018/06/18 17:00");
var out03 = new Date("2018/06/19 17:55");
if (now.getTime() > tt_03.getTime()){
	ele03.innerText = '今すぐ視聴する';
} if (now.getTime() > out03.getTime()) {
	ele03.innerText = 'ビデオを視聴する';
	// ele03.style.backgroundColor = "#bbb";
	ele03.href = "https://abema.tv/video/episode/106-1_s0_p1";
}
var tt_04 = new Date("2018/06/19 21:00");
var out04 = new Date("2018/06/19 22:50");
if (now.getTime() > tt_04.getTime()){
	ele04.innerText = '今すぐ視聴する';
} if (now.getTime() > out04.getTime()) {
	ele04.innerText = 'ビデオを視聴する';
	ele04.href = "https://abema.tv/video/episode/26-6_s2_p1";
}
// var tt_05 = new Date("2018/06/16 18:00");
// var out05 = new Date("2018/06/16 18:55");
// if (now.getTime() > tt_05.getTime()){
// 	ele05.innerText = '今すぐ視聴する';
// } if (now.getTime() > out05.getTime()) {
// 	ele05.innerText = 'ビデオを視聴する';
// 	ele05.href = "";
// }
var tt_06 = new Date("2018/06/20 01:30");
var out06 = new Date("2018/06/20 02:30");
if (now.getTime() > tt_06.getTime()){
	ele06.innerText = '今すぐ視聴する';
} if (now.getTime() > out06.getTime()) {
	ele06.innerText = 'ビデオを視聴する';
	ele06.href = "https://abema.tv/video/episode/248-2_s0_p1";
}
// var tt_07 = new Date("2018/06/16 18:00");
// var out07 = new Date("2018/06/16 18:55");
// if (now.getTime() > tt_07.getTime()){
// 	ele07.innerText = '今すぐ視聴する';
// } if (now.getTime() > out07.getTime()) {
// 	ele07.innerText = 'ビデオを視聴する';
// 	ele07.href = "";
// }
var tt_08 = new Date("2018/06/21 22:00");
var out08 = new Date("2018/06/21 23:25");
if (now.getTime() > tt_08.getTime()){
	ele08.innerText = '今すぐ視聴する';
} if (now.getTime() > out08.getTime()) {
	ele08.innerText = 'ビデオを視聴する';
	ele08.href = "https://abema.tv/video/episode/25-92_s1_p1";
}
var tt_09 = new Date("2018/06/23 19:55");
var out09 = new Date("2018/06/23 20:50");
if (now.getTime() > tt_09.getTime()){
	ele09.innerText = '今すぐ視聴する';
} if (now.getTime() > out09.getTime()) {
	ele09.innerText = 'ビデオを視聴する';
	ele09.href = "https://abema.tv/video/episode/13-20xc-mkyminy_s0_p1";
}
var tt_10 = new Date("2018/06/28 01:30");
var out10 = new Date("2018/06/28 02:30");
if (now.getTime() > tt_10.getTime()){
	ele10.innerText = '今すぐ視聴する';
} if (now.getTime() > out10.getTime()) {
	ele10.innerText = 'ビデオを視聴する';
	ele10.href = "https://abema.tv/video/episode/248-3_s0_p1";
}
var tt_11 = new Date("2018/06/28 00:00");
var out11 = new Date("2018/06/29 00:52");
if (now.getTime() > tt_11.getTime()){
	ele11.innerText = '今すぐ視聴する';
} if (now.getTime() > out11.getTime()) {
	ele11.innerText = 'ビデオを視聴する';
	ele11.href = "https://abema.tv/video/episode/26-28_s1_p1";
}
var tt_12 = new Date("2018/06/30 17:00");
var out12 = new Date("2018/06/30 18:00");
if (now.getTime() > tt_12.getTime()){
	ele12.innerText = '今すぐ視聴する';
} if (now.getTime() > out12.getTime()) {
	ele12.innerText = 'ビデオを視聴する';
	ele12.href = "https://abema.tv/video/episode/54-11_s1_p1";
}
var tt_13 = new Date("2018/06/16 23:00");
var out13 = new Date("2018/06/17 00:00");
if (now.getTime() > tt_13.getTime()){
	ele13.innerText = '今すぐ視聴する';
} if (now.getTime() > out13.getTime()) {
	ele13.innerText = 'ビデオを視聴する';
	ele13.href = "https://abema.tv/video/episode/90-1061";
}
var tt_14 = new Date("2018/06/28 10:00");
var out14 = new Date("2018/06/28 10:30");
if (now.getTime() > tt_14.getTime()){
	ele14.innerText = '今すぐ視聴する';
} if (now.getTime() > out14.getTime()) {
	ele14.innerText = 'ビデオを視聴する';
	ele14.href = "https://abema.tv/video/episode/90-1081";
}
var tt_15 = new Date("2018/06/29 22:00");
var out15 = new Date("2018/06/29 23:00");
if (now.getTime() > tt_15.getTime()){
	ele15.innerText = '今すぐ視聴する';
} if (now.getTime() > out15.getTime()) {
	ele15.innerText = 'ビデオを視聴する';
	ele15.href = "";
}
var tt_16 = new Date("2018/06/25 22:10");
var out16 = new Date("2018/06/25 23:20");
if (now.getTime() > tt_16.getTime()){
	ele16.innerText = '今すぐ視聴する';
} if (now.getTime() > out16.getTime()) {
	ele16.innerText = 'ビデオを視聴する';
	ele16.href = "https://abema.tv/video/episode/193-3_s1_p1";
}
var tt_17 = new Date("2018/06/26 23:20");
var out17 = new Date("2018/06/27 00:35");
if (now.getTime() > tt_17.getTime()){
	ele17.innerText = '今すぐ視聴する';
} if (now.getTime() > out17.getTime()) {
	ele17.innerText = 'ビデオを視聴する';
	ele17.href = "https://abema.tv/video/episode/193-35_s0_p1";
}
var tt_18 = new Date("2018/06/18 22:20");
var out18 = new Date("2018/06/18 23:30");
if (now.getTime() > tt_18.getTime()){
	ele18.innerText = '今すぐ視聴する';
} if (now.getTime() > out18.getTime()) {
	ele18.innerText = 'ビデオを視聴する';
	ele18.href = "https://abema.tv/video/episode/193-53_s1_p1";
}
var tt_19 = new Date("2018/06/19 22:20");
var out19 = new Date("2018/06/19 23:30");
if (now.getTime() > tt_19.getTime()){
	ele19.innerText = '今すぐ視聴する';
} if (now.getTime() > out19.getTime()) {
	ele19.innerText = 'ビデオを視聴する';
	ele19.href = "https://abema.tv/video/episode/193-22_s0_p1";
}
var tt_20 = new Date("2018/06/24 22:25");
var out20 = new Date("2018/06/24 23:30");
if (now.getTime() > tt_20.getTime()){
	ele20.innerText = '今すぐ視聴する';
} if (now.getTime() > out20.getTime()) {
	ele20.innerText = 'ビデオを視聴する';
	ele20.href = "https://abema.tv/video/episode/188-22_s1_p1";
}

var tt_21 = new Date("2018/06/19 22:00");
var out21 = new Date("2018/06/19 23:00");
if (now.getTime() > tt_21.getTime()){
	ele21.innerText = '今すぐ視聴する';
} if (now.getTime() > out21.getTime()) {
	ele21.innerText = 'ビデオを視聴する';
	ele21.href = "https://abema.tv/video/title/50-4";
}

var tt_22 = new Date("2018/06/24 22:00");
var out22 = new Date("2018/06/24 23:00");
if (now.getTime() > tt_22.getTime()){
	ele22.innerText = '今すぐ視聴する';
} if (now.getTime() > out22.getTime()) {
	ele22.innerText = 'ビデオを視聴する';
	ele22.href = "https://abema.tv/video/title/50-40";
}

var tt_23 = new Date("2018/06/30 23:00");
var out23 = new Date("2018/06/30 23:30");
if (now.getTime() > tt_23.getTime()){
	ele23.innerText = '今すぐ視聴する';
} if (now.getTime() > out23.getTime()) {
	ele23.innerText = 'ビデオを視聴する';
	ele23.href = "https://abema.tv/video/title/134-24";
}

// var tt_24 = new Date("2018/06/16 18:00");
// var out24 = new Date("2018/06/16 18:55");
// if (now.getTime() > tt_24.getTime()){
// 	ele24.innerText = '今すぐ視聴する';
// } if (now.getTime() > out24.getTime()) {
// 	ele24.innerText = 'ビデオを視聴する';
// 	ele24.href = "";
// }

// var tt_25 = new Date("2018/06/16 18:00");
// var out25 = new Date("2018/06/16 18:55");
// if (now.getTime() > tt_25.getTime()){
// 	ele25.innerText = '今すぐ視聴する';
// } if (now.getTime() > out25.getTime()) {
// 	ele25.innerText = 'ビデオを視聴する';
// 	ele25.href = "";
// }






});
