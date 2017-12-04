var Gui = function(dispatcher) {
	var elements = Immutable.Map([['loading', $('#loading')], ['activities', $('#activities')]]);

	var hideAll = function() {
		elements.map(function(x) {x.css('display', 'none');});
	};

	var hide = function(elem) {
		elements.get(elem).css('display', 'none');
	};
	
	var show = function(elem) {
		hideAll();
		elements.get(elem).show();
	};

	var initialize = function() { 
		hide('activities');
	};

	var loadBar = function(message) { $('#loadbar').attr('style', 'width:' + message.percentage + '%');	};
	var onLoadingStarted = function() {
		//$('#loading').show();
	};
	var onLoadingFinished = function () { 
		$('#loading').hide();	
		showActivities();
	};

	var showActivities = function() {
		show('activities');
	}

	dispatcher.Subscribe('Initialize', initialize);
	dispatcher.Subscribe('Loading', loadBar);
	dispatcher.Subscribe('LoadingStarted', onLoadingStarted);
	dispatcher.Subscribe('LoadingFinished', onLoadingFinished);
};