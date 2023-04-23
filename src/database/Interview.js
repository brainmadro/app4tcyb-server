const DB = require("./db.json");
const { saveToDatabase } = require("./utils");

const getAllInterviews = () => {
  return DB.interviews;
};

const getOneInterview = (interviewId) => {
  const interview = DB.interviews.find((interview) => interview.id === interviewId);
  if (!interview) {
    return;
  }
  return interview;
};

const createNewInterview = (newInterview) => {
  const isAlreadyAdded =
    DB.interviews.findIndex((interview) => interview.member + interview.commisioned + interview.type + interview.date === newInterview.member + newInterview.commisioned + newInterview.type + newInterview.date) > -1;
  if (isAlreadyAdded) {
    return;
  }
  DB.interviews.push(newInterview);
  saveToDatabase(DB);
  return newInterview;
};

const updateOneInterview = (interviewId, changes) => {
  const indexForUpdate = DB.interviews.findIndex(
    (interview) => interview.id === interviewId
  );
  if (indexForUpdate === -1) {
    return;
  }
  const updatedInterview = {
    ...DB.interviews[indexForUpdate],
    ...changes,
    updatedAt: new Date().toLocaleString("es-CO", { timeZone: "America/Bogota" }),
  };
  DB.interviews[indexForUpdate] = updatedInterview;
  saveToDatabase(DB);
  return updatedInterview;
};

const deleteOneInterview = (interviewId) => {
  const indexForDeletion = DB.interviews.findIndex(
    (interview) => interview.id === interviewId
  );
  if (indexForDeletion === -1) {
    return;
  }
  DB.interviews.splice(indexForDeletion, 1);
  saveToDatabase(DB);
};

module.exports = {
  getAllInterviews,
  createNewInterview,
  getOneInterview,
  updateOneInterview,
  deleteOneInterview,
};