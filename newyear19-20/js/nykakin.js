

$(document).ready(function() {
	var now = new Date();
	var ani0301 = new Date("2020/01/01 00:00");
	if (now.getTime() > ani0301.getTime()) {
		$('#a01').attr("href", "https://abema.tv/video/title/172-13");
	}
	var ani0302 = new Date("2020/01/01 00:00");
	if (now.getTime() > ani0302.getTime()) {
		$('#a02').attr("href", "https://abema.tv/video/title/172-16");
	}
	var ani0303 = new Date("2020/01/01 00:00");
	if (now.getTime() > ani0303.getTime()) {
		$('#a03').attr("href", "https://abema.tv/video/title/172-16");
	}
	var ani0304 = new Date("2020/01/01 00:00");
	if (now.getTime() > ani0304.getTime()) {
		$('#a04').attr("href", "");
	}
	var ani0305 = new Date("2020/01/01 00:00");
	if (now.getTime() > ani0305.getTime()) {
		$('#a05').attr("href", "https://abema.tv/video/title/13-62");
	}

});