$(document).ready(function() {
	var $loaded = false;
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
		alert($comment);
		$("#comment_input").val("");
	});
	
	function load(){
		$.get("/html/comment_section.html", function(response) {
			for (var i = 0; i < 3; i++) {
				$("#comment_area").prepend(response);
			}
		});
		$loaded = true;
	}
});
