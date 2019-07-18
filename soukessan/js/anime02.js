$(document).ready(function() {
	 //初期表示
	var now = new Date();
	var def = new Date("2019/05/07 00:00");
	 if (now.getTime() > def.getTime()) {
		$('#bag0519').hide();
		$('#bag0526').hide();
		$('#bag0502').hide();
		$('#bag0509').hide();
		$('#bag0516').hide();
		$('#bag0523').hide();

		$('#bag0619').hide();

		$('#bag0726').hide();

		$('#bag0802').hide();

		$('#bag0909').hide();

		$('#bag1016').hide();

		$('#bag1123').hide();

		$('#bag1223').hide();

		$('.bag0816').hide();
		$('.bag0823').hide();

		$('.bag0802').hide();
		$('.bag0809').hide();
	 }

	 var now = new Date();
	 var tt01 = new Date("2019/07/19 00:00");
	 if (now.getTime() > tt01.getTime()) {
		$('#bag0519').show();
		$('#bag0526').hide();
		$('#bag0502').hide();
		$('#bag0509').hide();
		$('#bag0516').hide();
		$('#bag0523').hide();

		$('#bag0619').show();

	}

	var now = new Date();
	var tt01last = new Date("2019/07/21 23:59");
	if (now.getTime() > tt01last.getTime()) {
		$('#bag0519').hide();
		$('#bag0526').hide();
		$('#bag0502').hide();
		$('#bag0509').hide();
		$('#bag0516').hide();
		$('#bag0523').hide();

	}

	var now = new Date();
	var tt02 = new Date("2019/07/26 00:00");
	if (now.getTime() > tt02.getTime()) {
		$('#bag0519').hide();
		$('#bag0526').show();
		$('#bag0502').hide();
		$('#bag0509').hide();
		$('#bag0516').hide();
		$('#bag0523').hide();

		$('#bag0619').hide();

		$('#bag0726').show();
	}

	var now = new Date();
	var tt02last = new Date("2019/07/28 23:59");
	if (now.getTime() > tt02last.getTime()) {
		$('#bag0519').hide();
		$('#bag0526').hide();
		$('#bag0502').hide();
		$('#bag0509').hide();
		$('#bag0516').hide();
		$('#bag0523').hide();
	}


	var now = new Date();
	var tt03 = new Date("2019/08/02 00:00");
	if (now.getTime() > tt03.getTime()) {
		$('#bag0519').hide();
		$('#bag0526').hide();
		$('#bag0502').show();
		$('#bag0509').hide();
		$('#bag0516').hide();
		$('#bag0523').hide();

		$('#bag0726').hide();

		$('#bag0802').show();
	}

	var now = new Date();
	var tt03last = new Date("2019/08/04 23:59");
	if (now.getTime() > tt03last.getTime()) {
		$('#bag0519').hide();
		$('#bag0526').hide();
		$('#bag0502').hide();
		$('#bag0509').hide();
		$('#bag0516').hide();
		$('#bag0523').hide();
	}

	var now = new Date();
	var tt04 = new Date("2019/08/09 00:00");
	if (now.getTime() > tt04.getTime()) {
		$('#bag0519').hide();
		$('#bag0526').hide();
		$('#bag0502').hide();
		$('#bag0509').show();
		$('#bag0516').hide();
		$('#bag0523').hide();

		$('#bag0802').hide();

		$('#bag0909').show();
	}

	var now = new Date();
	var tt04last = new Date("2019/08/11 23:59");
	if (now.getTime() > tt04last.getTime()) {
		$('#bag0519').hide();
		$('#bag0526').hide();
		$('#bag0502').hide();
		$('#bag0509').hide();
		$('#bag0516').hide();
		$('#bag0523').hide();
	}

	var now = new Date();
	var tt05 = new Date("2019/08/16 00:00");
	if (now.getTime() > tt05.getTime()) {
		$('#bag0519').hide();
		$('#bag0526').hide();
		$('#bag0502').hide();
		$('#bag0509').hide();
		$('#bag0516').show();
		$('#bag0523').hide();

		$('#bag0909').hide();

		$('#bag1016').show();
	}

	var now = new Date();
	var tt05last = new Date("2019/08/18 23:59");
	if (now.getTime() > tt05last.getTime()) {
		$('#bag0519').hide();
		$('#bag0526').hide();
		$('#bag0502').hide();
		$('#bag0509').hide();
		$('#bag0516').hide();
		$('#bag0523').hide();
	}

	var now = new Date();
	var tt05 = new Date("2019/08/23 00:00");
	if (now.getTime() > tt05.getTime()) {
		$('#bag0519').hide();
		$('#bag0526').hide();
		$('#bag0502').hide();
		$('#bag0509').hide();
		$('#bag0516').hide();
		$('#bag0523').show();

		$('#bag1016').hide();

		$('#bag1123').show();

		$('#bag1223').show();
	}

	var now = new Date();
	var tt05last = new Date("2019/08/25 23:59");
	if (now.getTime() > tt05last.getTime()) {
		$('#bag0519').hide();
		$('#bag0526').hide();
		$('#bag0502').hide();
		$('#bag0509').hide();
		$('#bag0516').hide();
		$('#bag0523').hide();
	}

	var now = new Date();
	var tt06last = new Date("2019/08/25 23:59");
	if (now.getTime() > tt06last.getTime()) {
		$('#bag1123').hide();

		$('#bag1223').hide();
	}

	var tt07 = new Date("2019/08/16 00:00");
	if (now.getTime() > tt07.getTime()) {
		$('.bag0816').show();
	}

	var tt07last = new Date("2019/08/22 23:59");
	if (now.getTime() > tt07last.getTime()) {
		$('.bag0816').hide();
	}

	var tt08 = new Date("2019/08/23 00:00");
	if (now.getTime() > tt08.getTime()) {
		$('.bag0823').show();
	}

	var tt08last = new Date("2019/08/29 23:59");
	if (now.getTime() > tt08last.getTime()) {
		$('.bag0823').hide();
	}
});
