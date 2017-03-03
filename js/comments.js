$(document).ready(function() {
	var $visible = false;
	var $loaded_comments = false;
	
	$("#comment_section").click(function() {
		if(!$visible){
			$visible = true;
			if(!$loaded_comments){
				$('#comment_area').load('../html/comment_section.html');
				$loaded_comments = true;
			} else {
				$('#comment_area').show();
			}
			$('#comment_section').prop('value', 'Hide comments');
		} else {
			$visible = false;
			$('#comment_area').hide();
			$('#comment_section').prop('value', 'Show comments');
		}
	});
});