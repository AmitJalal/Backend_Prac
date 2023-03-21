const mongoose = require("mongoose");

const connectDB = (DB) => {
  return mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
