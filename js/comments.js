$(document).ready(function() {
	var $loaded_comments = false;
	
	$("#comment_section").click(function() {
		if(!($("#comment_area").is(":visible"))){
			if(!$loaded_comments){
				$('#comment_area').load('../html/comment_section.html');
				$loaded_comments = true;
			}
			$('#comment_area').show();
			$('#comment_section').prop('value', 'Hide comments');
		} else {
			$('#comment_area').hide();
			$('#comment_section').prop('value', 'Show comments');
		}
	});
});
