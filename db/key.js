const mongoose = require("mongoose");

const conncetionkey =
  "mongodb+srv://user:user@cluster0.gaecyir.mongodb.net/Hello?retryWrites=true&w=majority";

const connectDb = () => {
  return mongoose.connect(conncetionkey);
};

module.exports = connectDb;
