const Task = require("../models/tasks");

const updateTask = async (req, res) => {
  try {
    const { id: taskId } = req.params;
    const task = await Task.findOneAndUpdate({ _id: taskId }, req.body, {
      runValidators: true,
      new: true,
    });
    res.json({ task });
  } catch (error) {
    res.send(error);
  }
};

module.exports = updateTask;
