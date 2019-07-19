$(document).ready(function() {
	 //初期表示
	var now = new Date();
	var def = new Date("2019/05/07 00:00");
	 if (now.getTime() > def.getTime()) {
		$('#bag0019').hide();
		$('#bag0026').hide();

		$('#bag0102').hide();
		$('#bag0109').hide();

		$('#bag0202').hide();
		$('#bag0209').hide();

		$('#bag0302').hide();
		$('#bag0309').hide();

		$('#bag0419').hide();
		$('#bag0426').hide();

		$('.bag0816').hide();
		$('.bag0823').hide();

		$('.bag0802').hide();
		$('.bag0809').hide();

		$('.bag0316').hide();
		$('.bag0323').hide();

	 }

	 var now = new Date();
	 var tt01 = new Date("2019/07/19 00:00");
	 if (now.getTime() > tt01.getTime()) {
		$('#bag0019').show();
		$('#bag0026').hide();

		$('#bag0419').show();
		$('#bag0426').hide();
	}

	var now = new Date();
	var tt02 = new Date("2019/07/26 00:00");
	if (now.getTime() > tt02.getTime()) {
		$('#bag0019').hide();
		$('#bag0026').show();

		$('#bag0419').hide();
		$('#bag0426').show();
	}
	var tt03last = new Date("2019/08/01 23:59");
	if (now.getTime() > tt03last.getTime()) {
		$('#bag0019').hide();
		$('#bag0026').hide();

		$('#bag0419').hide();
		$('#bag0426').hide();
	}



	var tt04 = new Date("2019/08/02 00:00");
	if (now.getTime() > tt04.getTime()) {
		$('#bag0102').show();
		$('#bag0109').hide();

		$('#bag0202').show();
		$('#bag0209').hide();

		$('#bag0302').show();
		$('#bag0309').hide();

		$('.bag0802').show();

	}

	var tt05 = new Date("2019/08/09 00:00");
	if (now.getTime() > tt05.getTime()) {
		$('#bag0102').hide();
		$('#bag0109').show();

		$('#bag0202').hide();
		$('#bag0209').show();

		$('#bag0302').hide();
		$('#bag0309').show();

		$('.bag0802').hide();

		$('.bag0809').show();
	}

	var tt06last = new Date("2019/08/15 23:59");
	if (now.getTime() > tt06last.getTime()) {
		$('#bag0102').hide();
		$('#bag0109').hide();

		$('#bag0202').hide();
		$('#bag0209').hide();

		$('#bag0302').hide();
		$('#bag0309').hide();

		$('.bag0809').hide();
	}

	var tt07 = new Date("2019/08/16 00:00");
	if (now.getTime() > tt07.getTime()) {
		$('.bag0816').show();
		$('.bag0316').show();

	}

	var tt07last = new Date("2019/08/22 23:59");
	if (now.getTime() > tt07last.getTime()) {
		$('.bag0816').hide();
	}

	var tt08 = new Date("2019/08/23 00:00");
	if (now.getTime() > tt08.getTime()) {
		$('.bag0823').show();
		$('.bag0323').show();
	}

	var tt08last = new Date("2019/08/29 23:59");
	if (now.getTime() > tt08last.getTime()) {
		$('.bag0823').hide();
		$('.bag0323').hide();
	}

});
