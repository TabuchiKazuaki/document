

// 1st
$(document).ready(function() {
var now = new Date();
var ev01 = document.getElementById('ev_01');
var ev02 = document.getElementById('ev_02');
var ev03 = document.getElementById('ev_03');
var ev04 = document.getElementById('ev_04');
var ev05 = document.getElementById('ev_05');
var ev06 = document.getElementById('ev_06');

var tv_01 = new Date("2018/08/06 21:30");
var ouv01 = new Date("2018/08/06 22:55");
if (now.getTime() > tv_01.getTime()){
	ev01.innerText = '今すぐ視聴する';
}
var ttb_02 = new Date("2018/08/07 17:30");
var ouv02 = new Date("2018/08/07 18:00");
if (now.getTime() > ttb_02.getTime()){
	ev02.innerText = '今すぐ視聴する';
}
if (now.getTime() > ouv02.getTime()){
	ev02.innerText = 'ビデオを視聴する';
	ev02.href = "https://abema.tv/video/title/409-1";
}

var tv_03 = new Date("2018/08/09 00:00");
var ouv03 = new Date("2018/08/09 00:55");
if (now.getTime() > tv_03.getTime()){
	ev03.innerText = '今すぐ視聴する';
} if (now.getTime() > ouv03.getTime()) {
	ev03.innerText = 'ビデオを視聴する';
	ev03.href = "https://abema.tv/video/title/13-6";
}
var tv_04 = new Date("2018/08/09 19:30");
var ouv04 = new Date("2018/08/09 20:45");
if (now.getTime() > tv_04.getTime()){
	ev04.innerText = '今すぐ視聴する';
} if (now.getTime() > ouv04.getTime()) {
	ev04.innerText = 'ビデオを視聴する';
	ev04.href = "https://abema.tv/video/title/13-47";
}
var tv_05 = new Date("2018/08/09 21:30");
var ouv05 = new Date("2018/08/09 23:00");
if (now.getTime() > tv_05.getTime()){
	ev05.innerText = '今すぐ視聴する';
} if (now.getTime() > ouv05.getTime()) {
	ev05.innerText = 'ビデオを視聴する';
	ev05.href = "https://abema.tv/video/title/26-7";
}
var tv_06 = new Date("2018/08/02 21:00");
var ouv06 = new Date("2018/08/02 22:15");
if (now.getTime() > tv_06.getTime()){
	ev06.innerText = '今すぐ視聴する';
} if (now.getTime() > ouv06.getTime()) {
	ev06.innerText = 'ビデオを視聴する';
	ev06.href = "https://abema.tv/video/title/193-27";
}





});
