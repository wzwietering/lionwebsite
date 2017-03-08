$(document).ready(function()
{
		var options = {
					xaxis: 
						{ min:1950,max:2020}, 
					yaxis:
						{min:0, max: 200000},
					series: {
						lines: { show: true },
						points: { show: true }
						},
					grid: {
						hoverable: true,
						clickable: true,
						backgroundColor: { colors: ["#333", "#999"] }
					},
					legend: {
						position: "ne",
						backgroundOpacity: 0.5,
						noColumns: 0,
						labelBoxBorderColor: "transparent"
						}
		};
				
		$.getJSON('https://raw.githubusercontent.com/wzwietering/lionwebsite/master/data/lionspopulation.json' , function(data){
        $.plot($("#placeholder") ,[data], options);
		});		

		function showTooltip(x, y, contents) {
			$('<div id="tooltip">' + contents + '</div>').css({
				position: 'absolute',
				display: 'none',
				top: y + 5,
				left: x + 5,
				border: '1px solid #fdd',
				padding: '2px',
				'background-color': '#fee',
				opacity: 0.80
				}).appendTo("body").fadeIn(200);
		};

		$("#placeholder").bind("plothover", function(event, pos, item) {
				if (item) {
					var x = item.datapoint[0];
						y = item.datapoint[1];
						str = "In " + x + " there were " + y + " " + label1 + "!";
						showTooltip(item.pageX, item.pageY, str); 
				} else {
					$("#tooltip").remove();
				}
		});
})