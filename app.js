$(function() {
	var dispatcher = new Dispatcher();
	var gui = new Gui(dispatcher);
	
	dispatcher.Publish('Initialize');
	dispatcher.Publish('LoadingStarted');

	var loadingPercentage = 0;
	var load = function() {
		dispatcher.Publish('Loading', { percentage: loadingPercentage});
		loadingPercentage++;
		if (loadingPercentage < 100) {
			window.setTimeout(load, 30);
		} else {
			dispatcher.Publish('LoadingFinished');
			dispatcher.Publish('GameStarted');
		}
	}

	load();
	
});