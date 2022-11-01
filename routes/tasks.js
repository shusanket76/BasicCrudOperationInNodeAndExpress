const express = require("express");
const router = express.Router();
const getAllTask = require("../controllers/getAllTask");
const postTask = require("../controllers/postTask");
const updateTask = require("../controllers/updateTask");
const singleTask = require("../controllers/singletask");
const deleteTask = require("../controllers/deleteTask");

router.route("/").get(getAllTask).post(postTask);
router.route("/:id").get(singleTask).patch(updateTask).delete(deleteTask);

module.exports = router;
