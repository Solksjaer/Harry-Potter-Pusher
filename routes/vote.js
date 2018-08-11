const express = require("express");
const router = express.Router();

const Pusher = require('pusher');

const pusher = new Pusher({
  appId: 'appId',
  key: 'key',
  secret: 'secret',
  cluster: 'eu',
  encrypted: true
});

// Default GET route.
router.get("/", (req, res) => {
  res.send("You are in /vote.");
});

// Default POST route.
router.post("/", (req, res) => {
  pusher.trigger('hp-voting', 'hp-house', {
    "points": 1,
    "house": req.body.house
  });
});

// Export the router.
module.exports = router;