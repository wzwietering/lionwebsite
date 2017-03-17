$(document).ready(function() {
	$("#body").css("font-family", getCookie('font'));
	//Check to prevent white color if no cookies exist
	if(getCookie('accents') != 'undefined'){
		changeStyle(getCookie('accents'), getCookie('details'), getCookie('background'));
	}

	$("input[name=font]:radio").change(function () {
		$font = $(this).val();
		$("#body").css("font-family", $font);

		//Store selected font
		createCookie('font', $font);
	});

	$("input[name=color]:radio").change(function () {
		$color = $(this).val();
		var bodyStyles = window.getComputedStyle(document.body);
		switch($color) {
			case 'green':
				changeStyle('#1DD600','#26BC70','#c1f9bd');
				break;
			case 'blue':
				changeStyle('#1539B2','#0874A8','#c9d4f9');
				break;
			default:
				changeStyle('#DB9200','#DB6300','#FFFDBC');
				break;
		}
	});
});

// Create a cookie which lasts a year
function createCookie($name, $value){
	var $date = new Date();
	$date.setTime($date.getTime() + (365*24*60*60*1000));
	var $expires = "expires="+ $date.toUTCString();
	document.cookie = $name + "=" + encodeURIComponent($value) + ";" + $expires + ";path=/";
}

// Get a cookie by it's name
function getCookie($name) {
	var $value = "; " + document.cookie;
	if(typeof $value !== 'undefined'){
		var $parts = $value.split("; " + $name + "=");
		if ($parts.length == 2) return decodeURIComponent($parts.pop().split(";").shift());
	}
}

// Change the style of the webpage
function changeStyle($accents, $details, $background){
	document.body.style.setProperty('--accents', $accents);
	document.body.style.setProperty('--details', $details);
	document.body.style.setProperty('--background', $background);
	createCookie('accents', $accents);
	createCookie('details', $details);
	createCookie('background', $background);
}
