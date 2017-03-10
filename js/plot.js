$(document).ready(function()
{
		var label;		
		$.getJSON('https://raw.githubusercontent.com/wzwietering/lionwebsite/master/data/lionspopulation.json' , function(jsondata){
        plot(jsondata);
		label = jsondata.label;
		});		


		function openInfo(x, y, text) {
			$('<div id="info">' + text + '</div>').css({
				position: 'absolute',
				top: y + 5,
				left: x + 5,
				border: '1px solid #fdd',
				padding: '2px',
				'background-color': '#fee',
				opacity: 0.75
				}).appendTo("body").fadeIn(200);
		};

		$("#placeholder").bind("plothover", function(event, pos, item) {
				if (item) {
					var year = item.datapoint[0];
						lionamount = item.datapoint[1];
						if (y>50000){
						str = "In " + year + " there were " + lionamount + " " + label + "!";
						} else {
						str = "In " + year + " there were ONLY " + lionamount + " " + label + "!";
						}
						openInfo(item.pageX, item.pageY, str); 
				} else {
					$("#info").remove();
				}
		});
})

function onclick(){
}
function plot(data){
	var options = {
					xaxis: 
						{ min:1950,max:2020}, 
					yaxis:
						{min:0, max: 200000},
					series: {
						lines: { show: true},
						points: { show: true },
						color: ["#000"],
						},
					grid: {
						hoverable: true,
						clickable: true,
						backgroundColor: { colors: ["#66ff33", "#ff3333"] }
					},
					legend: {
						position: "ne",
						backgroundOpacity: 0.5,
						}
		};
		
	$.plot($("#placeholder") ,[data], options);
}
