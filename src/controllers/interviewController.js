const interviewService = require("../services/interviewService");

const getAllInterviews = (req, res) => {
  const allInterviews = interviewService.getAllInterviews();
  res.send({ status: "OK", data: allInterviews });
};

const getOneInterview = (req, res) => {
  const {
    params: { interviewId },
  } = req;
  if (!interviewId) {
    return;
  }
  const interview = interviewService.getOneInterview(interviewId);
  res.send({ status: "OK", data: interview });
};

const createNewInterview = (req, res) => {
  const { body } = req;  
  if (
    !body.member ||
    !body.commissioned ||
    !body.type ||
    !body.date || 
    !body.status
  ) {
    return;
  }
  const newInterview = {
    member: body.member,
    commissioned: body.commissioned,
    type: body.type,
    date: body.date,
    status: body.status,
    comments: body.comments ? body.comments : ''
  };
  const createdInterview = interviewService.createNewInterview(newInterview);
  res.status(201).send({ status: "OK", data: createdInterview });
};

const updateOneInterview = (req, res) => {
  const {
    body,
    params: { interviewId },
  } = req;
  if (!interviewId) {
    return;
  }
  const updatedInterview = interviewService.updateOneInterview(interviewId, body);
  res.send({ status: "OK", data: updatedInterview });
};

const deleteOneInterview = (req, res) => {
  const {
    params: { interviewId },
  } = req;
  if (!interviewId) {
    return;
  }
  interviewService.deleteOneInterview(interviewId);
  res.status(204).send({ status: "OK" });
};

module.exports = {
  getAllInterviews,
  getOneInterview,
  createNewInterview,
  updateOneInterview,
  deleteOneInterview,
};