const Task = require("../models/tasks");

const deleteTask = async (req, res) => {
  try {
    const { id: TaskId } = req.params;
    await Task.findOneAndDelete({ _id: TaskId });
    res.send("DELETED");
  } catch (error) {
    res.send(error);
  }
};

module.exports = deleteTask;
