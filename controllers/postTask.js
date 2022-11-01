const Task = require("../models/tasks");
const asyncWrapper = require("../notfound/async");


const postTask = asyncWrapper(async (req, res, next) => {

    const task = await Task.create(req.body);
    res.status(201).json({ task });

});

module.exports = postTask;
