const express = require("express");
const router = express.Router();
const PusherServerConfig = require("../config/config");

const Pusher = require('pusher');

const pusher = new Pusher({
  appId: PusherServerConfig.appId,
  key: PusherServerConfig.key,
  secret: PusherServerConfig.secret,
  cluster: PusherServerConfig.cluster,
  forceTLS: PusherServerConfig.encrypted
});

//Create the base data points.
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

// Default GET route.
router.get("/", (req, res) => {
  res.send("You are in /vote.");
});

//Data GET route.
router.get("/data", (req, res) => {
	console.log("Sending data");
	console.log(dataPoints);
	res.send(dataPoints);
});

// Default POST route.
router.post("/", (req, res) => {
	// Use a higher order Array map.
	dataPoints = dataPoints.map(function (d) {
		console.log("Vote for House: " + req.body.house)
		// Check if the current label is the updated value.
		if (d.label == req.body.house) {
			// Increment the house's value by the number of new points.
			d.y ++;
		}
		// Return the original value as this is a map function.
		return d;
	});

  pusher.trigger('hp-voting', 'hp-house', dataPoints);

  return res.json({
    "success": true,
    "message": "Thanks for voting."
  });
});

// Export the router.
module.exports = router;