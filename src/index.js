const express = require("express");

const bodyParser = require("body-parser");
const v1InterviewRouter = require("./v1/routes/interviewRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

// *** ADD ***
app.use(bodyParser.json());
app.use("/api/v1/interviews", v1InterviewRouter);

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
});