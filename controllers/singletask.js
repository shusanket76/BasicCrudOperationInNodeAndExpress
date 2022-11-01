const { Error } = require("mongoose");
const Task = require("../models/tasks");
const asyncWrapper = require("../notfound/async");

const singleTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await Task.findOne({ _id: taskID });
  if (!task) {

    return next(error);
  } else {
    return res.send("found");
  }
});

module.exports = singleTask;
