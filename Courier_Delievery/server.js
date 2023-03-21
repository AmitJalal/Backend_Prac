require('dotenv').config();
const express = require('express');
const connectDB = require('./db/db');
const cors = require('cors');

const app = express();

//================ middlewares =============
app.use(cors());
app.use(express.json());

//============= Import Routes ===================
const UserRouter = require('./routes/User.Routes.js');
const OrderRouter = require('./routes/Order.Routes');

//Port
const PORT = process.env.PORT || 5000;

//================= routes ===================

//user
app.use('/api/v1', UserRouter);

//order
app.use('/api/v1', OrderRouter);

//testing the server
app.get('/', (req, res) => {
  try {
    res.status(200).json({
      status: 'success',
      message: 'Working',
    });
  } catch (error) {
    res.json({
      error,
    });
  }
});

// start the db connection
const start = async () => {
  try {
    await connectDB(process.env.DB_URL);
    app.listen(PORT, () => {
      console.log(`App is running at PORT: ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
