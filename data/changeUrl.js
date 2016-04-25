var fullUrl = window.location.href;
if (!fullUrl.includes('share=1')) {
    // Add share=1 to reveal all posts
    var urlParts = fullUrl.split('#');
    var begin = urlParts[0];
    var hash = urlParts[1] ? '#' + urlParts[1] : '';
    var delim = begin.includes('?') ? '&' : '?';
    var newUrl = begin + delim + 'share=1' + hash;
    history.replaceState({}, null, newUrl);
    window.location.reload();
} else {
    // Remove login sidebar since it's now unnecessary
    document.addEventListener('DOMContentLoaded', function() {
	var sideBar = document.getElementsByClassName('side_col')[1];
	if (sideBar && sideBar.id) {
	    sideBar.parentNode.removeChild(sideBar);
	}
    });
}
