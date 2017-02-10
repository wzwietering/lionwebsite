function menu(){
	//Old browsers don't suppoert XMLHttpRequest, so use ActiveXObject if they don't have it.
	if (window.XMLHttpRequest) {
		var xmlHttpRequest = new XMLHttpRequest();
	} else {
		var xmlHttpRequest = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlHttpRequest.onreadystatechange = function() {
		//Only execute code when the request is loaded and they status is 'OK'
		if (xmlHttpRequest.readyState == 4 && xmlHttpRequest.status == 200) {
			document.getElementById("menu").innerHTML = xmlHttpRequest.responseText;
		}
	}
	xmlHttpRequest.open('GET', '../menu.html');
	xmlHttpRequest.send();
}
