const express = require("express");
const interviewController = require("../../controllers/interviewController");

const router = express.Router();

router.get("/", interviewController.getAllInterviews);

router.get("/:interviewId", interviewController.getOneInterview);

router.post("/", interviewController.createNewInterview);

router.patch("/:interviewId", interviewController.updateOneInterview);

router.delete("/:interviewId", interviewController.deleteOneInterview);

module.exports = router;