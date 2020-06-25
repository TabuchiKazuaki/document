$(function() {
     countDown();
});
function countDown() {
     var now = new Date();
     var time = new Date();
     var end = new Date("2020/06/30 23:56:59");
     var left = end - time;
     var a_day = 24 * 60 * 60 * 1000;
     var d = Math.floor(left / a_day)
     var h = Math.floor((left % a_day) / (60 * 60 * 1000))
     var m = Math.floor((left % a_day) / (60 * 1000)) % 60
     var s = Math.floor((left % a_day) / 1000) % 60 % 60

     $("#day").text(d);
     $("#hour").text(h);
     $("#min").text(m);
     $("#sec").text(s);
     setTimeout('countDown()', 1000);
}



$(document).ready(function() {
     var now = new Date();
     var t01 = new Date("2020/07/01 00:00");
     if (now.getTime() > t01.getTime()) {
          $('.t_box').hide();
     }
});