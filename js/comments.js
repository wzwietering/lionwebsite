$(document).ready(function() {
	var $loaded = false;
	var $comments = [];
	
	$("#comment_section").click(function() {
		if(!($("#comment_area").is(":visible"))){
			if(!$loaded){
				load();
			}
			$("#comment_area").show();
			$("#comment_section").prop("value", "Hide comments");
		} else {
			$("#comment_area").hide();
			$("#comment_section").prop("value", "Show comments");
		}
	});
	
	$("#submit").click(function() {
		var $comment = $("#comment_input").val();
		var $username = $("#username_input").val();
		createComment($username, $comment);
		storeComment($username, $comment);
		$("#comment_input").val("");
		$("#username_input").val("");
	});
	
	function load(){
		if (document.cookie.length > 0){
			$comments.push(extractCookie(document.cookie));
			var $data = extractCookie(document.cookie).split(",");
			for (i = 0; i < $data.length; i+=2) {
				createComment($data[i], $data[i+1]);
			}
			$loaded = true;
		}
	}
	
	function extractCookie($cookie){
		return decodeURIComponent($cookie.split("=")[1]);
	}
	
	function createComment($username, $comment) {
		$.get("/html/comment_section.html", function(response) {
			$("#comment_area").prepend(response);
			$("#comment").text($comment);
			$("#username").text("~" + $username);
		});
	}
	
	//Create cookie to store comment
	function storeComment($username, $comment) {
		$comments.push([$username, $comment]);
		var $date = new Date();
		$date.setTime($date.getTime() + (365*24*60*60*1000));
		var $expires = "expires="+ $date.toUTCString();
		document.cookie = "comments=" + encodeURIComponent($comments) + ";" + $expires + ";path=/";
	}
});
