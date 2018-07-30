
// 2nd
$(document).ready(function() {
var now = new Date();
var ele12 = document.getElementById('e_12');
var ele12th = document.getElementById('e_12th');
var ele13 = document.getElementById('e_13');
var ele14 = document.getElementById('e_14');
var ele15 = document.getElementById('e_15');
var ele16 = document.getElementById('e_16');
var ele17 = document.getElementById('e_17');
var ele18 = document.getElementById('e_18');
var ele19 = document.getElementById('e_19');
var ele20 = document.getElementById('e_20');
var ele21 = document.getElementById('e_21');
var ele22 = document.getElementById('e_22');
var ele23 = document.getElementById('e_23');
var ele24 = document.getElementById('e_24');
var ele25 = document.getElementById('e_25');
var ele26 = document.getElementById('e_26');

var tt_12a = new Date("2018/07/28 22:00");
var out12b = new Date("2018/08/04 22:00");
var out12 = new Date("2018/08/04 23:00");
if (now.getTime() > tt_12a.getTime()){
	ele12.innerText = '今すぐ視聴する';
} if (now.getTime() > tt_12a.getTime()){
	ele12th.innerText = '#2：8/4(土)22時';
} if (now.getTime() > out12b.getTime()){
	ele12th.innerText = '#3：8/11(土)22時';
}
if (now.getTime() > out12.getTime()) {
	ele12.innerText = 'ビデオを視聴する';
	ele12.href = "https://abema.tv/video/title/50-42";
}

var tt_13 = new Date("2018/08/01 20:55");
var out13 = new Date("2018/08/01 22:00");
if (now.getTime() > tt_13.getTime()){
	ele13.innerText = '今すぐ視聴する';
} if (now.getTime() > out13.getTime()) {
	ele13.innerText = 'ビデオを視聴する';
	ele13.href = "https://abema.tv/video/title/134-1ytnhidgwiw";
}

var tt_14 = new Date("2018/08/02 12:00");
var out14 = new Date("2018/08/02 12:35");
if (now.getTime() > tt_14.getTime()){
	ele14.innerText = '今すぐ視聴する';
} if (now.getTime() > out14.getTime()) {
	ele14.innerText = 'ビデオを視聴する';
	ele14.href = "https://abema.tv/video/title/134-1ytnhidgwiw";
}
var tt_15 = new Date("2018/08/03 21:00");
var out15 = new Date("2018/08/03 22:00");
if (now.getTime() > tt_15.getTime()){
	ele15.innerText = '今すぐ視聴する';
} if (now.getTime() > out15.getTime()) {
	ele15.innerText = 'ビデオを視聴する';
	ele15.href = "https://abema.tv/video/title/134-25";
}
var tt_16 = new Date("2018/08/04 18:00");
var out16 = new Date("2018/08/04 19:05");
if (now.getTime() > tt_16.getTime()){
	ele16.innerText = '今すぐ視聴する';
} if (now.getTime() > out16.getTime()) {
	ele16.innerText = 'ビデオを視聴する';
	ele16.href = "https://abema.tv/video/title/134-25";
}
var tt_17 = new Date("2018/08/04 19:05");
var out17 = new Date("2018/08/04 20:57");
if (now.getTime() > tt_17.getTime()){
	ele17.innerText = '今すぐ視聴する';
} if (now.getTime() > out17.getTime()) {
	ele17.innerText = 'ビデオを視聴する';
	ele17.href = "https://abema.tv/video/title/50-8cgnpnnain-";
}
var tt_18 = new Date("2018/08/04 12:00");
var out18 = new Date("2018/08/04 12:53");
if (now.getTime() > tt_18.getTime()){
	ele18.innerText = '今すぐ視聴する';
} if (now.getTime() > out18.getTime()) {
	ele18.innerText = 'ビデオを視聴する';
	ele18.href = "https://abema.tv/video/title/134-24";
}
var tt_19 = new Date("2018/08/04 13:00");
var out19 = new Date("2018/08/04 14:58");
if (now.getTime() > tt_19.getTime()){
	ele19.innerText = '今すぐ視聴する';
} if (now.getTime() > out19.getTime()) {
	ele19.innerText = 'ビデオを視聴する';
	ele19.href = "https://abema.tv/video/title/50-39";
}
var tt_20 = new Date("2018/08/05 13:50");
var out20 = new Date("2018/08/05 14:57");
if (now.getTime() > tt_20.getTime()){
	ele20.innerText = '今すぐ視聴する';
} if (now.getTime() > out20.getTime()) {
	ele20.innerText = 'ビデオを視聴する';
	ele20.href = "https://abema.tv/video/title/50-19";
}
var tt_21 = new Date("2018/08/05 19:30");
var out21 = new Date("2018/08/05 20:30");
if (now.getTime() > tt_21.getTime()){
	ele21.innerText = '今すぐ視聴する';
} if (now.getTime() > out21.getTime()) {
	ele21.innerText = '放送終了しました';
	ele21.style.backgroundColor = "#bbb";
	ele21.href = "javascript:void(0)";
}
var tt_22 = new Date("2018/08/06 23:30");
var out22 = new Date("2018/08/07 00:30");
if (now.getTime() > tt_22.getTime()){
	ele22.innerText = '今すぐ視聴する';
} if (now.getTime() > out22.getTime()) {
	ele22.innerText = 'ビデオを視聴する';
	ele22.href = "https://abema.tv/video/title/50-20";
}
var tt_23 = new Date("2018/08/08 23:30");
var out23 = new Date("2018/08/09 00:30");
if (now.getTime() > tt_23.getTime()){
	ele23.innerText = '今すぐ視聴する';
} if (now.getTime() > out23.getTime()) {
	ele23.innerText = 'ビデオを視聴する';
	ele23.href = "https://abema.tv/video/title/50-1eszgkffpku";
}
var tt_24 = new Date("2018/08/10 23:30");
var out24 = new Date("2018/08/10 23:57");
if (now.getTime() > tt_24.getTime()){
	ele24.innerText = '今すぐ視聴する';
} if (now.getTime() > out24.getTime()) {
	ele24.innerText = 'ビデオを視聴する';
	ele24.href = "https://abema.tv/video/title/273-20";
}

var tt_25 = new Date("2018/08/12 19:00");
var out25 = new Date("2018/08/12 20:43");
if (now.getTime() > tt_25.getTime()){
	ele25.innerText = '今すぐ視聴する';
} if (now.getTime() > out25.getTime()) {
	ele25.innerText = 'ビデオを視聴する';
	ele25.href = "https://abema.tv/video/title/50-40";
}

var tt_26 = new Date("2018/08/04 23:00");
var out26 = new Date("2018/08/05 00:00");
if (now.getTime() > tt_26.getTime()){
	ele26.innerText = '今すぐ視聴する';
} if (now.getTime() > out26.getTime()) {
	ele26.innerText = 'ビデオを視聴する';
	ele26.href = "";
}



});
