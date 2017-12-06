$(function() {
	var loadingPercentage = 0;
	var updateLoadingBar = function() { $('#loadbar').attr('style', 'width:' + loadingPercentage + '%');	};

	var load = function() {
		loadingPercentage++;
		updateLoadingBar();

		if (loadingPercentage < 100) {
			window.setTimeout(load, 30);
		} else {
			$('#loading').hide();
			$('#book-game').show();
		}
	}

	var bookCounter = 0;
	var readBook = function(book) {
		bookCounter++;
		$(book.target).hide();

		if (bookCounter == 6) {
			$('#book-game').hide();
			window.confirm('Level up!');
			window.confirm('Vaardigheid +1: lezen!');
			$('#read-animation').show();
		}
	};

	$('img').click(readBook);
	$('#book-game').hide();
	$('#read-animation').hide();
	load();	
});