$(function(){
    var $setElm = $('.title');
    var cutFigure = '30'; // カットする文字数
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
var tt01 = new Date("2018/04/15 21:59");
var outs1 = new Date("2018/04/14 22:59");
var tt02 = new Date("2018/04/14 22:59");
var tt03 = new Date("2018/04/14 22:59");
var tt04 = new Date("2018/04/14 22:59");
var tt05 = new Date("2018/04/14 22:59");
var tt06 = new Date("2018/04/14 22:59");
var tt07 = new Date("2018/04/14 22:59");
var tt08 = new Date("2018/04/14 22:59");
var tt09 = new Date("2018/04/14 22:59");
var tt10 = new Date("2018/04/14 22:59");
var tt11 = new Date("2018/04/14 22:59");
var tt12 = new Date("2018/04/14 22:59");
var tt13 = new Date("2018/04/14 22:59");
var tt14 = new Date("2018/04/14 22:59");
var tt15 = new Date("2018/04/14 22:59");
var tt16 = new Date("2018/04/14 22:59");
var tt17 = new Date("2018/04/14 22:59");
var tt18 = new Date("2018/04/14 22:59");
var tt19 = new Date("2018/04/14 22:59");
var tt20 = new Date("2018/04/14 22:59");
var tt21 = new Date("2018/04/14 22:59");
var el01 = document.getElementById('e_01');
var el02 = document.getElementById('e_02');
var el03 = document.getElementById('e_03');
var el04 = document.getElementById('e_04');
var el05 = document.getElementById('e_05');
var el06 = document.getElementById('e_06');
var el07 = document.getElementById('e_07');
var el08 = document.getElementById('e_08');
var el09 = document.getElementById('e_09');
var el10 = document.getElementById('e_10');
var el11 = document.getElementById('e_11');
var el12 = document.getElementById('e_12');
var el13 = document.getElementById('e_13');
var el14 = document.getElementById('e_14');
var el15 = document.getElementById('e_15');
var el16 = document.getElementById('e_16');
var el17 = document.getElementById('e_17');
var el18 = document.getElementById('e_18');
var el19 = document.getElementById('e_19');
var el20 = document.getElementById('e_20');
var el21 = document.getElementById('e_21');
if (now.getTime() > tt01.getTime()){
	el1.innerText = '今すぐ視聴する';
} if (now.getTime() > outs1.getTime()) {
	el1.innerText = 'ビデオを視聴';
	el1.href = "https://abema.tv/video/title/90-977";
} if (now.getTime() > outs1.getTime()) {
	texp1.innerText = '放送後いつでも無料で視聴可能！';
}
if (now.getTime() > ss2.getTime()){
	el2.innerText = '今すぐ視聴する';
} if (now.getTime() > outs2.getTime()) {
	el2.innerText = 'ビデオを視聴';
	el2.href = "https://abema.tv/video/title/90-964";
} if (now.getTime() > outs2.getTime()) {
	texp2.innerText = 'いつでも無料で視聴可能！';
}

if (now.getTime() > ss22.getTime()){
	el22.innerText = '今すぐ視聴する';
} if (now.getTime() > outs22.getTime()) {
	el22.innerText = 'ビデオを視聴';
	el22.href = "https://abema.tv/channels/abema-special/slots/F9KYYWmorf2znb";
} if (now.getTime() > outs22.getTime()) {
	texp22.innerText = 'いつでも無料で視聴可能！';
}

});



// 2nd
$(document).ready(function() {
var now = new Date();
// s_01
var ss01 = new Date("2018/02/16 01:59");
var out1 = new Date("2018/02/18 02:59");
// s_02
var ss02 = new Date("2018/02/16 11:29");
var out2 = new Date("2018/02/16 13:40");
// s_03
var ss03 = new Date("2018/04/14 22:59");
var ss04 = new Date("2018/04/14 22:59");
var ss05 = new Date("2018/04/14 22:59");
var ss06 = new Date("2018/04/14 22:59");
var ss07 = new Date("2018/04/14 22:59");
var ss08 = new Date("2018/04/14 22:59");
var ss09 = new Date("2018/04/14 22:59");
var ss10 = new Date("2018/04/14 22:59");
var ss11 = new Date("2018/04/14 22:59");
var ss12 = new Date("2018/04/14 22:59");
var ss13 = new Date("2018/04/14 22:59");
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

if (now.getTime() > ss01.getTime()){
	el1.innerText = '今すぐ視聴する';
} if (now.getTime() > out1.getTime()) {
	el1.innerText = '放送終了しました';
	el1.style.backgroundColor = "#bbb";
	el1.href = "javascript:void(0)";
}
if (now.getTime() > ss02.getTime()){
	el2.innerText = '今すぐ視聴する';
} if (now.getTime() > out2.getTime()) {
	el2.innerText = '放送終了しました';
	el2.style.backgroundColor = "#bbb";
	el2.href = "javascript:void(0)";
}
if (now.getTime() > ss3.getTime()){
	el3.innerText = '今すぐ視聴する';
} if (now.getTime() > out3.getTime()) {
	el3.innerText = '放送終了しました';
	el3.style.backgroundColor = "#bbb";
	el3.href = "javascript:void(0)";
}
});
