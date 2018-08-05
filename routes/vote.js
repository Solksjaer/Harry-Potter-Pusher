const express = require("express");
const router = express.Router();

// Default GET route.
router.get("/", (req, res) => {
  res.send("You are in /vote");
});

// Export the router.
module.exports = router;