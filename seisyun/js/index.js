$(function() {
	$('#t01').hide();
	$('#t02').hide();
	$('#t03').hide();

	var $allMsg = $('#t01');
	var $wordList = $('#t01').html().split("");
	$('#t01').html("");
	$.each($wordList, function(idx, elem) {
		$('#t01').fadeIn();
		var newEL = $("<span/>").text(elem).css({ opacity: 0 });
		newEL.appendTo($allMsg);
		newEL.delay(idx * 70);
		newEL.animate({ opacity: 1 }, 1100);
	});

	setTimeout(function(){
		var $allMsg = $('#t02');
		var $wordList = $('#t02').html().split("");
		$('#t02').html("");
		$.each($wordList, function(idx, elem) {
			$('#t02').fadeIn();
			var newEL = $("<span/>").text(elem).css({ opacity: 0 });
			newEL.appendTo($allMsg);
			newEL.delay(idx * 70);
			newEL.animate({ opacity: 1 }, 1100);
		});
	},1500);

	setTimeout(function(){
		var $allMsg = $('#t03');
		var $wordList = $('#t03').html().split("");
		$('#t03').html("");
		$.each($wordList, function(idx, elem) {
			$('#t03').fadeIn();
			var newEL = $("<span/>").text(elem).css({ opacity: 0 });
			newEL.appendTo($allMsg);
			newEL.delay(idx * 70);
			newEL.animate({ opacity: 1 }, 1100);
		});
	},3000);
});
