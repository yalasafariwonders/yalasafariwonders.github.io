//Hook up the tweet display

$(document).ready(function() {
						   
	$(".countdown").countdown({
				date: "6 December 2023 00:00:00",
				format: "on"
			},
			
			function() {
				// callback function
			});

});	