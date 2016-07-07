chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);
		document.getElementById('partial-discussion-sidebar').appendChild(document.getElementsByName('comment_and_close')[0]);
	}
	}, 10);
});
