$(document).ready(function () {
	$("#voteForm").submit(function (e) {
		e.preventDefault();
		var house = $(".form-check-input:checked").val();
		var data = {
			"house": house
		};
		$.post("/vote", data, function (res) {
			console.log(res);
		});
	});
});