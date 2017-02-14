$(function() {
	var getRandomInt = function(min, max) {
    	return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	var keys = [ 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B']
	var randomKey = keys[getRandomInt(0, 11)];

	$('#main').html(randomKey);
});