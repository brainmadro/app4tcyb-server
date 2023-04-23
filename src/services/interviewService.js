const { v4: uuid } = require("uuid");
const Interview = require("../database/Interview");

const getAllInterviews = () => {
  const allInterviews = Interview.getAllInterviews();
  return allInterviews;
};

const getOneInterview = (interviewId) => {
  const interview = Interview.getOneInterview(interviewId);
  return interview;
};

const createNewInterview = (newInterview) => {
  const interviewToInsert = {
    ...newInterview,
    id: uuid(),
    createdAt: new Date().toLocaleString("es-CO", { timeZone: "America/Bogota" }),
    updatedAt: new Date().toLocaleString("es-CO", { timeZone: "America/Bogota" }),
  };
  const createdInterview = Interview.createNewInterview(interviewToInsert);
  return createdInterview;
};

const updateOneInterview = (interviewId, changes) => {
   const updateInterview = Interview.updateOneInterview(interviewId, changes);
   return updateInterview;
};

const deleteOneInterview = (interviewId) => {
  Interview.deleteOneInterview(interviewId);
};

module.exports = {
  getAllInterviews,
  getOneInterview,
  createNewInterview,
  updateOneInterview,
  deleteOneInterview,
};