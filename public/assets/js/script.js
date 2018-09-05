// Execute only after the whole document is fetched and assets are loaded.
$(document).ready(function () {
	// Form submission event listener (event handler)
	$("#voteForm").submit(function (e) {
		// Prevent the default event.
		e.preventDefault();
		// Get the checked input element's value.
		var house = $(".form-check-input:checked").val();
		// Construct the data to be sent as a payload to the AJAX call.
		var data = {
			"house": house
		};
		// Fire the POST request AJAX call to our /vote end point.
		$.post("/vote", data, function (res) {
			// Log the output in the console.
			console.log(res);
		});
	});
	// Create the base data points.
	var dataPoints = [
		{
			label: "Gryffindor",
			y: 0
		}, {
			label: "Hufflepuff",
			y: 0
		}, {
			label: "Ravenclaw",
			y: 0
		}, {
			label: "Slytherin",
			y: 0
		}
	];
	// Initialise Chart using jQuery selector.
	// Get the chart container element.
	var chartContainer = $("#chartContainer");
	// Check if the element exists in the DOM.
	if (chartContainer.length === 1) {
		// Now initialise the chart.
	}
});