const mongoose = require("mongoose");

const connectDB = (DB) => {
  return mongoose
    .connect(DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log(`DB connected`);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectDB;
// useNewUrlParser useUnifiedTopology
