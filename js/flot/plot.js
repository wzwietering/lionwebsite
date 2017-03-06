$(document).ready(function()
{  
  $.plot($("#placeholder") ,[[[1950,200000],[1990,100000],[2002,45000],[2004,36000],[2014,22000],[2017,16000]]],{
				xaxis: 
					{ min:1950,max:2020}, 
				yaxis:
					{min:0, max: 200000},
				series: {
					lines: { show: true },
					points: { show: true }
					}
				});
});