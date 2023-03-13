const express = require("express");
const interviewControllers = require("../controllers/interviewControllers");
const router = express.Router();

router.get("/", interviewControllers.getAllInterviews);

router.get("/:commissioned", interviewControllers.getInterviewByCommissioned);

router.post("/", (req, res) => {
  res.send("Create a new workout");
});

router.patch("/:workoutId", (req, res) => {
  res.send("Update an existing workout");
});

router.delete("/:workoutId", (req, res) => {
  res.send("Delete an existing workout");
});

module.exports = router;
