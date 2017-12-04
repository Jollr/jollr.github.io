$(function() {
	var loadingPercentage = 0;
	var updateLoadingBar = function() { $('#loadbar').attr('style', 'width:' + loadingPercentage + '%');	};

	var danceCounter = 0;
	var danceImgSrc = function(n) {
		var index = n;
		if (n < 10) {
			index = '00' + n;			
		}
		else if (n < 100) {
			index = '0' + n;
		}

		return 'dance/frame_' + index + '_delay-0.04s.png';
	}

	var danceGame = function() {
		danceCounter += 5;

		if (danceCounter < 100) {
			$('#danceFrame').attr('src', danceImgSrc(danceCounter));
		} else {
			$('#dance-game').hide();
			window.confirm('Level up!');
			window.confirm('Nieuwe vaardigheid: dansen');
			$('#dance-animation').show();
		}
	};

	var load = function() {
		loadingPercentage++;
		updateLoadingBar();

		if (loadingPercentage < 100) {
			window.setTimeout(load, 30);
		} else {
			$('#loading').hide();
			$('#dance-game').show();
		}
	}

	$('#dance-game').hide();
	$('#dance-animation').hide();

	window.danceGame = danceGame;
	load();	
});