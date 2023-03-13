const interview = {
  id: "1sdf7wetgeahgdfgsi3usdhg",
  member: "Brian Madroñero",
  commissioned: {
    id: "fdsfsdfdsfd",
    name: "Vairon Forero",
  },
  type: "Renovación de recomendación",
  date: 1678659970587,
  status: "pending",
  comments: "",
};

const getAllInterviews = (req, res) => {
  res.send("Get all Interviews");
};

const getInterviewByCommissioned = (req, res) => {
    console.log(req.params.commissioned);
  res.send(interview);
};

const createNewInterview = (req, res) => {
  res.send("Create a new Interview");
};

const updateOneInterview = (req, res) => {
  res.send("Update an existing Interview");
};

const deleteOneInterview = (req, res) => {
  res.send("Delete an existing Interview");
};

module.exports = {
  getAllInterviews,
  getInterviewByCommissioned,
  createNewInterview,
  updateOneInterview,
  deleteOneInterview,
};
