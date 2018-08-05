const express = require("express");
const router = express.Router();

// Default GET route.
router.get("/", (req, res) => {
  res.send("You are in /vote.");
});

// Default POST route.
router.post("/", (req, res) => {
  res.send("You have POSTed to /vote.");
});

// Export the router.
module.exports = router;