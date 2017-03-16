$(document).ready(function() {
	$(document).bind("contextmenu", function (event) {
		event.preventDefault();
		 $(".context-menu").finish().toggle(200).

		// Set location to mouse
		css({
			top: event.pageY + "px",
			left: event.pageX + "px"
		});
	});

	$(document).bind("mousedown", function (e) {
		if (!$(e.target).parents(".context-menu").length > 0) {
			$(".context-menu").hide(200);
		}
	});

	$bold = false;
	$italic = false;
	$smallCaps = false;

	$(".context-menu li").click(function(){
		switch($(this).attr("data-action")) {
			case "bold":
				if($bold){
					$("#body").css("font-weight", 'normal');
					$bold = false;
				} else {
					$("#body").css("font-weight", 'bold');
					$bold = true;
				}
				break;
			case "italic":
				if($italic){
					$("#body").css("font-style", 'normal');
					$italic = false;
				} else {
					$("#body").css("font-style", 'italic');
					$italic = true;
				}
				break;
			case "smallCaps":
				if($smallCaps){
					$("#body").css("font-variant", 'normal');
					$smallCaps = false;
				} else {
					$("#body").css("font-variant", 'small-caps');
					$smallCaps = true;
				}
				break;
		}
		$(".context-menu").hide(100);
	});
});
