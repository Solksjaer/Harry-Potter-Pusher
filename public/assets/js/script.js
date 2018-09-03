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
});