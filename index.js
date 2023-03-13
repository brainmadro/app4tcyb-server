const express = require("express")
const path = require('path')
const PORT = process.env.PORT || 5000
const v1InterviewRouter = require("./src/v1/routes/interviewRoutes");


const app = express()
app.use("/api/v1/interviews", v1InterviewRouter);


app.listen(PORT, () => console.log(`Listening on PORT: ${ PORT }`))


console.log(process.env.OBISPADO);
  