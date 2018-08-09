

// 1st
$(document).ready(function() {
var now = new Date();
var ele01 = document.getElementById('e_01');
var ele02 = document.getElementById('e_02');
var ele03 = document.getElementById('e_03');
var ele04 = document.getElementById('e_04');
var ele05 = document.getElementById('e_05');
var ele06 = document.getElementById('e_06');
var ele07 = document.getElementById('e_07');
var ele08 = document.getElementById('e_08');
var ele09 = document.getElementById('e_09');
var ele10 = document.getElementById('e_10');
var ele11 = document.getElementById('e_11');

var tt_01 = new Date("2018/08/06 21:30");
var out01 = new Date("2018/08/06 22:55");
if (now.getTime() > tt_01.getTime()){
	ele01.innerText = '今すぐ視聴する';
}
var ttb_02 = new Date("2018/08/07 17:30");
var out02 = new Date("2018/08/07 18:00");
if (now.getTime() > ttb_02.getTime()){
	ele02.innerText = '今すぐ視聴する';
}
if (now.getTime() > out02.getTime()){
	ele02.innerText = 'ビデオを視聴する';
	ele02.href = "https://abema.tv/video/title/409-1";
}

var tt_03 = new Date("2018/08/09 00:00");
var out03 = new Date("2018/08/09 00:55");
if (now.getTime() > tt_03.getTime()){
	ele03.innerText = '今すぐ視聴する';
} if (now.getTime() > out03.getTime()) {
	ele03.innerText = 'ビデオを視聴する';
	ele03.href = "https://abema.tv/video/title/13-6";
}
var tt_04 = new Date("2018/08/09 19:30");
var out04 = new Date("2018/08/09 20:45");
if (now.getTime() > tt_04.getTime()){
	ele04.innerText = '今すぐ視聴する';
} if (now.getTime() > out04.getTime()) {
	ele04.innerText = 'ビデオを視聴する';
	ele04.href = "https://abema.tv/video/title/13-47";
}
var tt_05 = new Date("2018/08/09 21:30");
var out05 = new Date("2018/08/09 23:00");
if (now.getTime() > tt_05.getTime()){
	ele05.innerText = '今すぐ視聴する';
} if (now.getTime() > out05.getTime()) {
	ele05.innerText = 'ビデオを視聴する';
	ele05.href = "https://abema.tv/video/title/26-7";
}
var tt_06 = new Date("2018/08/02 21:00");
var out06 = new Date("2018/08/02 22:15");
if (now.getTime() > tt_06.getTime()){
	ele06.innerText = '今すぐ視聴する';
} if (now.getTime() > out06.getTime()) {
	ele06.innerText = 'ビデオを視聴する';
	ele06.href = "https://abema.tv/video/title/193-27";
}
var tt_07 = new Date("2018/08/08 23:30");
var out07 = new Date("2018/08/09 00:45");
if (now.getTime() > tt_07.getTime()){
	ele07.innerText = '今すぐ視聴する';
} if (now.getTime() > out07.getTime()) {
	ele07.innerText = 'ビデオを視聴する';
	ele07.href = "https://abema.tv/video/title/193-13";
}
var tt_08 = new Date("2018/08/06 12:00");
var out08 = new Date("2018/08/06 13:20");
if (now.getTime() > tt_08.getTime()){
	ele08.innerText = '今すぐ視聴する';
} if (now.getTime() > out08.getTime()) {
	ele08.innerText = 'ビデオを視聴する';
	ele08.href = "https://abema.tv/video/episode/193-34_s1_p1";
}
var tt_09 = new Date("2018/08/08 03:45");
var out09 = new Date("2018/08/08 04:50");
if (now.getTime() > tt_09.getTime()){
	ele09.innerText = '今すぐ視聴する';
} if (now.getTime() > out09.getTime()) {
	ele09.innerText = 'ビデオを視聴する';
	ele09.href = "https://abema.tv/video/episode/176-14_s0_p1";
}
var tt_10 = new Date("2018/08/08 09:55");
var out10 = new Date("2018/08/08 12:00");
if (now.getTime() > tt_10.getTime()){
	ele10.innerText = '今すぐ視聴する';
} if (now.getTime() > out10.getTime()) {
	ele10.innerText = 'ビデオを視聴する';
	ele10.href = "https://abema.tv/video/episode/307-3_s1_p1";
}
var tt_11 = new Date("2018/07/28 00:00");
var out11 = new Date("2018/07/29 00:52");
if (now.getTime() > tt_11.getTime()){
	ele11.innerText = '今すぐ視聴する';
} if (now.getTime() > out11.getTime()) {
	ele11.innerText = 'ビデオを視聴する';
	ele11.href = "https://abema.tv/video/episode/176-12_s1_p1";
}





});
