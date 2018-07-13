$(function(){
    var $setElm = $('.title');
    var cutFigure = '36'; // カットする文字数
    var afterTxt = ' …'; // 文字カット後に表示するテキスト

    $setElm.each(function(){
        var textLength = $(this).text().length;
        var textTrim = $(this).text().substr(0,(cutFigure))

        if(cutFigure < textLength) {
            $(this).html(textTrim + afterTxt).css({visibility:'visible'});
        } else if(cutFigure >= textLength) {
            $(this).css({visibility:'visible'});
        }
    });
});



// 1st
$(document).ready(function() {
var now = new Date();
var ele01 = document.getElementById('e_01');
var ele02 = document.getElementById('e_02');
var ele03 = document.getElementById('e_03');
var ele03 = document.getElementById('e_04');
var ele04 = document.getElementById('e_05');
var ele06 = document.getElementById('e_06');
var ele07 = document.getElementById('e_07');
var ele08 = document.getElementById('e_08');
var ele09 = document.getElementById('e_09');
var ele10 = document.getElementById('e_10');
var ele11 = document.getElementById('e_11');
var ele12 = document.getElementById('e_12');
var ele13 = document.getElementById('e_13');
var ele14 = document.getElementById('e_14');
var ele15 = document.getElementById('e_15');
var ele16 = document.getElementById('e_16');
var ele17 = document.getElementById('e_17');
var ele18 = document.getElementById('e_18');
var ele19 = document.getElementById('e_19');
var ele20 = document.getElementById('e_20');
var ele21 = document.getElementById('e_21');

var tt02 = new Date("2018/07/02 22:59");
var outs2 = new Date("2018/07/10 00:50");
if (now.getTime() > tt02.getTime()){
	ele02.innerText = '今すぐ視聴する';
} if (now.getTime() > outs2.getTime()) {
	ele02.innerText = '放送終了しました';
	ele02.style.backgroundColor = "#bbb";
	ele02.href = "javascript:void(0)";
}

var tt07 = new Date("2018/07/05 22:59");
var outs7 = new Date("2018/07/13 00:50");
if (now.getTime() > tt07.getTime()){
	ele07.innerText = '今すぐ視聴する';
} if (now.getTime() > outs7.getTime()) {
	ele07.innerText = '放送終了しました';
	ele07.style.backgroundColor = "#bbb";
	ele07.href = "javascript:void(0)";
}

var tt17 = new Date("2018/07/11 22:59");
var outs17 = new Date("2018/07/15 00:51");
if (now.getTime() > tt17.getTime()){
	ele17.innerText = '今すぐ視聴する';
} if (now.getTime() > outs17.getTime()) {
	ele17.innerText = '放送終了しました';
	ele17.style.backgroundColor = "#bbb";
	ele17.href = "javascript:void(0)";
}

// if (now.getTime() > ss2.getTime()){
// 	el2.innerText = '今すぐ視聴する';
// } if (now.getTime() > outs2.getTime()) {
// 	el2.innerText = 'ビデオを視聴';
// 	el2.href = "https://abema.tv/video/title/90-964";
// } if (now.getTime() > outs2.getTime()) {
// 	texp2.innerText = 'いつでも無料で視聴可能！';
// }

// if (now.getTime() > ss22.getTime()){
// 	el22.innerText = '今すぐ視聴する';
// } if (now.getTime() > outs22.getTime()) {
// 	el22.innerText = 'ビデオを視聴';
// 	el22.href = "https://abema.tv/channels/abema-special/slots/F9KYYWmorf2znb";
// } if (now.getTime() > outs22.getTime()) {
// 	texp22.innerText = 'いつでも無料で視聴可能！';
// }

});



// 2nd
$(document).ready(function() {
	var now = new Date();

	var el01 = document.getElementById('s_01');
	var el02 = document.getElementById('s_02');
	var el03 = document.getElementById('s_03');
	var el04 = document.getElementById('s_04');
	var el05 = document.getElementById('s_05');
	var el06 = document.getElementById('s_06');
	var el07 = document.getElementById('s_07');
	var el08 = document.getElementById('s_08');
	var el09 = document.getElementById('s_09');
	var el10 = document.getElementById('s_10');
	var el11 = document.getElementById('s_11');
	var el12 = document.getElementById('s_12');
	var el13 = document.getElementById('s_13');
	var el14 = document.getElementById('s_14');
	var el15 = document.getElementById('s_15');
	var el16 = document.getElementById('s_16');
	var el17 = document.getElementById('s_17');
	var el18 = document.getElementById('s_18');
	var el19 = document.getElementById('s_19');
	var el20 = document.getElementById('s_20');
	var el21 = document.getElementById('s_21');


	// s_01
	// var ss01 = new Date("2018/02/16 01:59");
	// var out1 = new Date("2018/02/18 02:59");
	// if (now.getTime() > ss01.getTime()){
	// 	el01.innerText = '今すぐ視聴する';
	// } if (now.getTime() > out1.getTime()) {
	// 	el01.innerText = '放送終了しました';
	// 	el01.style.backgroundColor = "#bbb";
	// 	el01.href = "javascript:void(0)";
	// }
	// s_02
	// var ss02 = new Date("2018/06/14 11:29");
	// var out2 = new Date("2018/06/16 13:40");
	// if (now.getTime() > ss02.getTime()){
	// 	el02.innerText = '今すぐ視聴する';
	// } if (now.getTime() > out2.getTime()) {
	// 	el02.innerText = '放送終了しました';
	// 	el02.style.backgroundColor = "#bbb";
	// 	el02.href = "javascript:void(0)";
	// }

	// s_03
	// var ss03 = new Date("2018/06/16 15:29");
	// var out3 = new Date("2018/06/17 21:30");
	// if (now.getTime() > ss03.getTime()){
	// 	el03.innerText = '今すぐ視聴する';
	// } if (now.getTime() > out3.getTime()) {
	// 	el03.innerText = '放送終了しました';
	// 	el03.style.backgroundColor = "#bbb";
	// 	el03.href = "javascript:void(0)";
	// }

	// s_04
	// var ss04 = new Date("2018/06/17 21:29");
	// var out4= new Date("2018/06/20 23:49");
	// if (now.getTime() > ss04.getTime()){
	// 	el04.innerText = '今すぐ視聴する';
	// } if (now.getTime() > out4.getTime()) {
	// 	el04.innerText = '放送終了しました';
	// 	el04.style.backgroundColor = "#bbb";
	// 	el04.href = "javascript:void(0)";
	// }

	// s_05
	// var ss05 = new Date("2018/04/14 22:59");
	// var out5= new Date("2018/06/20 23:49");
	// if (now.getTime() > ss05.getTime()){
	// 	el05.innerText = '今すぐ視聴する';
	// } if (now.getTime() > out5.getTime()) {
	// 	el05.innerText = '放送終了しました';
	// 	el05.style.backgroundColor = "#bbb";
	// 	el05.href = "javascript:void(0)";
	// }


	// s_06
	// var ss06 = new Date("2018/06/14 22:59");
	// var out6= new Date("2018/06/20 23:49");
	// if (now.getTime() > ss06.getTime()){
	// 	el06.innerText = '今すぐ視聴する';
	// } if (now.getTime() > out6.getTime()) {
	// 	el06.innerText = '放送終了しました';
	// 	el06.style.backgroundColor = "#bbb";
	// 	el06.href = "javascript:void(0)";
	// }

	// var ss07 = new Date("2018/06/23 12:29");
	// var out7= new Date("2018/06/23 14:00");
	// if (now.getTime() > ss07.getTime()){
	// 	el07.innerText = '今すぐ視聴する';
	// } if (now.getTime() > out7.getTime()) {
	// 	el07.innerText = '放送終了しました';
	// 	el07.style.backgroundColor = "#bbb";
	// 	el07.href = "javascript:void(0)";
	// }

	// var ss08 = new Date("2018/06/26 22:59");
	// var out8= new Date("2018/06/30 01:00");
	// if (now.getTime() > ss08.getTime()){
	// 	el08.innerText = '今すぐ視聴する';
	// } if (now.getTime() > out8.getTime()) {
	// 	el08.innerText = '放送終了しました';
	// 	el08.style.backgroundColor = "#bbb";
	// 	el08.href = "javascript:void(0)";
	// }

	// // 09
	// var ss09 = new Date("2018/06/25 22:59");
	// var out9= new Date("2018/06/30 00:40");
	// if (now.getTime() > ss09.getTime()){
	// 	el09.innerText = '今すぐ視聴する';
	// } if (now.getTime() > out9.getTime()) {
	// 	el09.innerText = '放送終了しました';
	// 	el09.style.backgroundColor = "#bbb";
	// 	el09.href = "javascript:void(0)";
	// }

	// // 10
	// var ss10 = new Date("2018/06/27 21:29");
	// var out10= new Date("2018/06/30 22:40");
	// if (now.getTime() > ss10.getTime()){
	// 	el10.innerText = '今すぐ視聴する';
	// } if (now.getTime() > out10.getTime()) {
	// 	el10.innerText = '放送終了しました';
	// 	el10.style.backgroundColor = "#bbb";
	// 	el10.href = "javascript:void(0)";
	// }

	// // 11
	// var ss11 = new Date("2018/06/27 22:39");
	// var out11= new Date("2018/06/30 23:30");
	// if (now.getTime() > ss11.getTime()){
	// 	el11.innerText = '今すぐ視聴する';
	// } if (now.getTime() > out11.getTime()) {
	// 	el11.innerText = '放送終了しました';
	// 	el11.style.backgroundColor = "#bbb";
	// 	el11.href = "javascript:void(0)";
	// }

	// // 12
	// var ss12 = new Date("2018/06/28 22:59");
	// var out12= new Date("2018/06/30 01:00");
	// if (now.getTime() > ss12.getTime()){
	// 	el12.innerText = '今すぐ視聴する';
	// } if (now.getTime() > out12.getTime()) {
	// 	el12.innerText = '放送終了しました';
	// 	el12.style.backgroundColor = "#bbb";
	// 	el12.href = "javascript:void(0)";
	// }

	// // 13 anime
	// var ss13 = new Date("2018/06/29 22:59");
	// var out13= new Date("2018/07/01 01:15");
	// if (now.getTime() > ss13.getTime()){
	// 	el13.innerText = '今すぐ視聴する';
	// } if (now.getTime() > out13.getTime()) {
	// 	el13.innerText = '放送終了しました';
	// 	el13.style.backgroundColor = "#bbb";
	// 	el13.href = "javascript:void(0)";
	// }

	// var ss14 = new Date("2018/06/30 11:29");
	// var out14= new Date("2018/06/30 14:00");
	// if (now.getTime() > ss14.getTime()){
	// 	el14.innerText = '今すぐ視聴する';
	// } if (now.getTime() > out14.getTime()) {
	// 	el14.innerText = '放送終了しました';
	// 	el14.style.backgroundColor = "#bbb";
	// 	el14.href = "javascript:void(0)";
	// }

	// var ss15 = new Date("2018/06/30 11:29");
	// var out15= new Date("2018/06/20 23:49");
	// if (now.getTime() > ss15.getTime()){
	// 	el15.innerText = '今すぐ視聴する';
	// } if (now.getTime() > out15.getTime()) {
	// 	el15.innerText = '放送終了しました';
	// 	el15.style.backgroundColor = "#bbb";
	// 	el15.href = "javascript:void(0)";
	// }

	// var ss17 = new Date("2018/06/17 19:59");
	// var out17= new Date("2018/06/25 01:00");
	// if (now.getTime() > ss17.getTime()){
	// 	el17.innerText = '今すぐ視聴する';
	// } if (now.getTime() > out17.getTime()) {
	// 	el17.innerText = '放送終了しました';
	// 	el17.style.backgroundColor = "#bbb";
	// 	el17.href = "javascript:void(0)";
	// }




});
