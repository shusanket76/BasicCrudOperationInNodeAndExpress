const express = require("express");
const app = express();
const task = require("./routes/tasks");
const connectdb = require("./db/key");
const notfound = require("./notfound/notfound");
const error = require("./notfound/error-handler");
app.use(express.json());

app.get("/home", (req, res) => {
  res.send("TASK MANAGER");
});

app.use("/api/v1/task", task);

app.use(notfound);
app.use(error);
const start = async () => {
  try {
    await connectdb();
    app.listen(5000, () => console.log("LISTENING BABAY"));
  } catch (error) {
    console.log(error);
  }
};

start();
