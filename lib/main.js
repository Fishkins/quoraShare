var tabs = require("sdk/tabs");
tabs.on('ready', function(tab) {
    var tUrl = tab.url;
    if (tUrl.contains('quora.com') && !tUrl.contains('share=1')) {
	tab.attach({
	    contentScript:
	    "var urlParts = window.location.href.split('#');" +
	    "var begin = urlParts[0];" +
	    "var hash = urlParts[1] ? '#' + urlParts[1] : '';" +
    	    "var delim = begin.contains('?') ? '&' : '?';" +
    	    "var newUrl = begin + delim + 'share=1' + hash;" +
	    "history.replaceState({}, null, window.location.href + '?share=1');" +
	    "window.location.reload();"
	});
    }
});
