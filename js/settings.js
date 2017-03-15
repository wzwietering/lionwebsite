$(document).ready(function() {
	$("#body").css("font-family", getCookie('font'));
	//Check to prevent white color if no cookies exist
	if(getCookie('dark') != 'undefined'){
		changeStyle(getCookie('dark'), getCookie('darkest'), getCookie('light'));
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
				changeStyle('#1539B2','#0874A8','#ccccff');
				break;
			default:
				changeStyle('#DB9200','#DB6300','#FFFDBC');
				break;
		}
	});
});
	
function createCookie($name, $value){
	var $date = new Date();
	$date.setTime($date.getTime() + (365*24*60*60*1000));
	var $expires = "expires="+ $date.toUTCString();
	document.cookie = $name + "=" + encodeURIComponent($value) + ";" + $expires + ";path=/";
}

function getCookie($name) {
	var $value = "; " + document.cookie;
	var $parts = $value.split("; " + $name + "=");
	if ($parts.length == 2) return decodeURIComponent($parts.pop().split(";").shift());
}

function changeStyle($dark, $darkest, $light){
	document.body.style.setProperty('--dark', $dark);
	document.body.style.setProperty('--darkest', $darkest);
	document.body.style.setProperty('--light', $light);
	createCookie('dark', $dark);
	createCookie('darkest', $darkest);
	createCookie('light', $light);
}
