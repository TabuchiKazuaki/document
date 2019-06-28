$(document).ready(function() {
	var now = new Date();

	var def = new Date("2019/05/07 00:00");
	if (now.getTime() > def.getTime()) {
		$('#bag01622').hide();
		$('#bag01623').hide();
		$('#bag01629').hide();
		$('#bag01706').hide();
		$('#bag01713').hide();
		$('#bag01720').hide();
	}

	var tt0101 = new Date("2019/06/22 00:00");
	if (now.getTime() > tt0101.getTime()) {
		$('#bag01622').show();
	}

	var tt0102 = new Date("2019/06/23 00:00");
	if (now.getTime() > tt0102.getTime()) {
		$('#bag01622').hide();
		$('#bag01623').show();
	}
	var tt0103 = new Date("2019/06/23 00:00");
	if (now.getTime() > tt0103.getTime()) {
		$('#bag01622').hide();
		$('#bag01629').show();
	}
});
