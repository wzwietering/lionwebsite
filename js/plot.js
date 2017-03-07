$(document).ready(function()
{
		var data1 = [[1950,200000],[1990,100000],[2002,45000],[2004,36000],[2014,22000],[2017,16000]];
		var label1 = "Amount of lions in the wild";
		
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
						clickable: true
					},
					legend: {
						position: "ne",
						backgroundOpacity: 0.5,
						}
		};
		
		$.getJSON("../data/lionspopulation.json", function(json) {

		$.plot($("#placeholder") ,[json], options);
		});
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
    }

$("#placeholder").bind("plothover", function(event, pos, item) {
				if (item) {
					var x = item.datapoint[0].toFixed(2),
						y = item.datapoint[1].toFixed(2);
						str = "er waren in "
						
						showTooltip(item.pageX, item.pageY, str); 
				} else {
					$("#tooltip").remove();
				}
		});
		
$("#placeholder").bind("plotclick", function (event, pos, item) {
			if (item) {
				$("#clickdata").text(" - click point " + item.dataIndex + " in " + item.series.label);
				plot.highlight(item.series, item.datapoint);
			}
		});


