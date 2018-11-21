
$(document).ready(function() {
	var now = new Date();
	var at01 = document.getElementById('at_01');

	var out00 = new Date("2018/09/29 23:59");
	if (now.getTime() > out00.getTime()) {
		$(at01).text('初回登録なら1ヶ月間の¥0トライアル');
	}

	var a001 = new Date("2018/11/27 00:00");
	if (now.getTime() > a001.getTime()){
		$(at01).text('初回登録なら14日間¥0トライアル');
	}
	var out01 = new Date("2018/11/29 23:59");
	if (now.getTime() > out01.getTime()) {
		$(at01).text('初回登録なら1ヶ月間の¥0トライアル');
	}
});
