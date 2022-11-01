const Task = require("../models/tasks");
const asyncWrapper = require("../notfound/async");

const getAllTask = asyncWrapper(async (req, res) => {
  const task = await Task.find({});
  res.send(task);
});

module.exports = getAllTask;
