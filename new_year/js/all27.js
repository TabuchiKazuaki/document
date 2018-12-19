<script>
$(document).ready(function() {
     var now = new Date();
     // 01 遷移先 放送前
     var bf01 = new Date("2018/11/06");
     if (now.getTime() > bf01.getTime()) {
          $('#a_01').text('視聴予約する');
          $('#a_01').attr("href","https://abema.tv/channels/shogi/slots/CgjWh6BQ6fzcNj");
     }
     // 遷移先 放送後 ビデオ
     var bf01 = new Date("2019/01/01 20:00");
     if (now.getTime() > bf01.getTime()) {
          $('#a_01').text('放送終了しました');
          $('#a_01').css("background","#bbb");
          $('#a_01').attr("href","javascript:void(0)");
     }
      // 02 前
      var bf02 = new Date("2018/11/06");
      if (now.getTime() > bf02.getTime()) {
          $('#a_02').text('視聴予約する');
          $('#a_02').attr("href","https://abema.tv/video/episode/288-14_s1_p5");
      }
      // 後
      var bf02 = new Date("2019/1/3 23:30");
      if (now.getTime() > bf02.getTime()) {
          $('#a_02').text('ビデオをみる');
          $('#a_02').attr("href","https://abema.tv/video/episode/288-14_s1_p5");
      }

      // 03 前
      var bf03 = new Date("2018/11/06");
      if (now.getTime() > bf03.getTime()) {
          $('#a_03').text('視聴予約する');
          $('#a_03').attr("href","https://abema.tv/video/episode/288-14_s1_p6");
      }
      // 後
      var bf03 = new Date("2019/1/3 23:30");
      if (now.getTime() > bf03.getTime()) {
          $('#a_03').text('ビデオをみる');
          $('#a_03').attr("href","https://abema.tv/video/episode/288-14_s1_p6");
      }

      // 04 前
      var bf04 = new Date("2018/11/06");
      if (now.getTime() > bf04.getTime()) {
          $('#a_04').text('視聴予約する');
          $('#a_04').attr("href","https://abema.tv/video/episode/288-14_s1_p7");
      }
      // 後
      var bf04 = new Date("2019/1/3 23:30");
      if (now.getTime() > bf04.getTime()) {
          $('#a_04').text('ビデオをみる');
          $('#a_04').attr("href","https://abema.tv/video/episode/288-14_s1_p7");
      }

      // 05 前
      // var bf05 = new Date("2018/11/06");
      // if (now.getTime() > bf05.getTime()) {
          // $('#a_05').text('視聴予約する');
          // $('#a_05').attr("href","https://abema.tv/channels/asia-drama/slots/B6fehQcCjyDKMH");
      // }
      // 後
      // var bf05 = new Date("2018/11/25 02:10");
      // if (now.getTime() > bf05.getTime()) {
          // $('#a_05').text('ビデオをみる');
          // $('#a_05').attr("href","https://abema.tv/video/episode/68-25_s0_p1");
      // }

      // // 06 前
      // var bf06 = new Date("2018/11/06");
      // if (now.getTime() > bf06.getTime()) {
          // $('#a_06').text('視聴予約する');
          // $('#a_06').attr("href","https://abema.tv/channels/asia-drama/slots/B6feivHuZMVyxB");
      // }
      // // 後
      // var bf06 = new Date("2019/01/01 01:12");
      // if (now.getTime() > bf06.getTime()) {
          // $('#a_06').text('ビデオをみる');
          // $('#a_06').attr("href","https://abema.tv/video/episode/158-20_s0_p1");
      // }
});
</script>