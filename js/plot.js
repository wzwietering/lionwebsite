$(document).ready(function()
{
		var label;
		var flotplot;
		$.getJSON('https://raw.githubusercontent.com/wzwietering/lionwebsite/master/data/lionspopulation.json' , function(jsondata){
		
		var i = 0;
		$.each(jsondata, function(key, val) {
			val.color = i;
			++i;
		});
		
		var choiceContainer = $("#choices");
		$.each(datasets, function(key, val) {
			choiceContainer.append("<br/><input type='checkbox' name='" + key +
				"' checked='checked' id='id" + key + "'></input>" +
				"<label for='id" + key + "'>"
				+ val.label + "</label>");
		});
		
        plot([{data: jsondata.liondata,  label : jsondata.lionlabel}]);
		label = jsondata.lionlabel;
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
						if (lionamount>50000){
						text = "In " + year + " there were " + lionamount + " " + label + "!";
						} else {
						text = "In " + year + " there were ONLY " + lionamount + " " + label + "!";
						}
						openInfo(item.pageX, item.pageY, text); 
				} else {
					$("#info").remove();
				}
		});
})

function replot(){
	$.getJSON('https://raw.githubusercontent.com/wzwietering/lionwebsite/master/data/lionspopulation.json' , function(jsondata){
	plot([jsondata]);
	});
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
						color: ["#293133"],
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
		
	flotplot = $.plot($("#placeholder"), data, options);
}
