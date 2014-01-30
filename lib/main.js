var tabs = require("sdk/tabs");
tabs.on('ready', function(tab) {
    var tUrl = tab.url;
    if (tUrl.contains('quora.com') && !tUrl.contains('share=1')) {
	var urlParts = tUrl.split('#');
	var begin = urlParts[0];
	var hash = urlParts[1] ? '#' + urlParts[1] : '';
    	var delim = tUrl.contains('?') ? '&' : '?';
    	tab.url = begin + delim + 'share=1' + hash;
    }
});
