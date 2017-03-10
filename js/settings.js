$(document).ready(function() {
	$("#body").css("font-family", getCookie('font'));
	
	$("input[name=font]:radio").change(function () {
		$font = $(this).val();
		$("#body").css("font-family", $font);
		
		//Store selected font
		createCookie('font', $font);
	});
});
	
function createCookie($name, $value){
	var $date = new Date();
	$date.setTime($date.getTime() + (365*24*60*60*1000));
	var $expires = "expires="+ $date.toUTCString();
	document.cookie = $name + "=" + encodeURIComponent($value) + ";" + $expires + ";path=/";
}

function getCookie($name) {
	var value = "; " + document.cookie;
	var parts = value.split("; " + $name + "=");
	if (parts.length == 2) return decodeURIComponent(parts.pop().split(";").shift());
}
