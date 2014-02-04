var fullUrl = window.location.href;
if (!fullUrl.contains('share=1')) {
    var urlParts = fullUrl.split('#');
    var begin = urlParts[0];
    var hash = urlParts[1] ? '#' + urlParts[1] : '';
    var delim = begin.contains('?') ? '&' : '?';
    var newUrl = begin + delim + 'share=1' + hash;
    history.replaceState({}, null, window.location.href + '?share=1');
    window.location.reload();
} else {
    var sideBar = document.getElementsByClassName('side_col')[1];
    if (sideBar && sideBar.id) {
	sideBar.parentNode.removeChild(sideBar);
    }
}
