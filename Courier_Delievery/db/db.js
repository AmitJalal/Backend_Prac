const mongoose = require('mongoose');

const connectDB = (DB) => {
  mongoose
    .connect(DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('DB connected');
    })
    .catch((error) => console.log('error', error));
};

module.exports = connectDB;
