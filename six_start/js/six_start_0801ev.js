

// 1st
$(document).ready(function() {
var now = new Date();
var ev01 = document.getElementById('ev_01');
var ev02 = document.getElementById('ev_02');
var ev03 = document.getElementById('ev_03');
var ev04 = document.getElementById('ev_04');
var ev05 = document.getElementById('ev_05');
var ev06 = document.getElementById('ev_06');


var tv_01 = new Date("2018/08/02 21:00");
var ouv01 = new Date("2018/08/02 22:15");
if (now.getTime() > tv_01.getTime()){
	ev01.innerText = '今すぐ視聴する';
} if (now.getTime() > ouv01.getTime()) {
	ev01.innerText = 'ビデオを視聴する';
	ev01.href = "https://abema.tv/video/title/193-27";
}
var tv_02 = new Date("2018/08/08 23:30");
var ouv02 = new Date("2018/08/09 00:45");
if (now.getTime() > tv_02.getTime()){
	ev02.innerText = '今すぐ視聴する';
} if (now.getTime() > ouv02.getTime()) {
	ev02.innerText = 'ビデオを視聴する';
	ev02.href = "https://abema.tv/video/title/193-13";
}
var tv_03 = new Date("2018/08/06 12:00");
var ouv03 = new Date("2018/08/06 13:20");
if (now.getTime() > tv_03.getTime()){
	ev03.innerText = '今すぐ視聴する';
} if (now.getTime() > ouv03.getTime()) {
	ev03.innerText = 'ビデオを視聴する';
	ev03.href = "https://abema.tv/video/episode/193-34_s1_p1";
}
var tv_04 = new Date("2018/08/08 03:45");
var ouv04 = new Date("2018/08/08 04:50");
if (now.getTime() > tv_04.getTime()){
	ev04.innerText = '今すぐ視聴する';
} if (now.getTime() > ouv04.getTime()) {
	ev04.innerText = 'ビデオを視聴する';
	ev04.href = "https://abema.tv/video/episode/176-14_s0_p1";
}
var tv_05 = new Date("2018/08/08 09:55");
var ouv05 = new Date("2018/08/08 12:00");
if (now.getTime() > tv_05.getTime()){
	ev05.innerText = '今すぐ視聴する';
} if (now.getTime() > ouv05.getTime()) {
	ev05.innerText = 'ビデオを視聴する';
	ev05.href = "https://abema.tv/video/episode/307-3_s1_p1";
}
var tv_06 = new Date("2018/07/28 00:00");
var ouv06 = new Date("2018/07/29 00:52");
if (now.getTime() > tv_06.getTime()){
	ev06.innerText = '今すぐ視聴する';
} if (now.getTime() > ouv06.getTime()) {
	ev06.innerText = 'ビデオを視聴する';
	ev06.href = "https://abema.tv/video/episode/176-12_s1_p1";
}





});
