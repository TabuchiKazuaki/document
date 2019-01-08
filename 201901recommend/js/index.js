$(document).ready(function() {
	var now = new Date();

	var tt01 = new Date("2018/11/10 00:00");
	if (now.getTime() > tt01.getTime()) {
		$('#a_1').attr("href","https://abema.tv/channels/abema-special/slots/Eo3VjbP1pSbFN7");
		$('#a_2').text("視聴予約する")
	}
	var tt02 = new Date("2019/01/13 23:00");
	if (now.getTime() > tt02.getTime()) {
		$('#a_1').attr("href","https://abema.tv/video/title/90-1198");
		$('#a_2').text("ビデオを見る")
	}


	var tt03 = new Date("2018/12/29 00:00");
	if (now.getTime() > tt03.getTime()) {
		$('#b_1').attr("href","https://abema.tv/channels/abema-special/slots/F25UjgESEJYcdd");
		$('#b_2').text("視聴予約する")
	}
	var tt04 = new Date("2019/01/08 23:00");
	if (now.getTime() > tt04.getTime()) {
		$('#b_1').attr("href","https://abema.tv/video/title/90-1203");
		$('#b_2').text("ビデオを見る")
	}



	var tt05 = new Date("2018/12/31 00:00");
	if (now.getTime() > tt05.getTime()) {
		$('#c_1').attr("href","https://abema.tv/channels/abema-special/slots/CEfYkF8Q2oNSLf");
		$('#c_2').text("視聴予約する")
	}
	var tt06 = new Date("2019/01/15 01:00");
	if (now.getTime() > tt06.getTime()) {
		$('#c_1').attr("href","https://abema.tv/video/title/90-1220");
		$('#c_2').text("ビデオを見る")
	}



	var tt07 = new Date("2019/01/16 00:00");
	if (now.getTime() > tt07.getTime()) {
		$('#d_1').text("詳細を見る")
	}



	var tt08 = new Date("2019/01/15 00:00");
	if (now.getTime() > tt08.getTime()) {
		$('#e_1').text("詳細を見る")
	}



});
