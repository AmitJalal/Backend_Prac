require("dotenv").config();
const express = require("express");
const connectDB = require("./db/connectDB");
const foodRouter = require("./routes/foodRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

//routes
app.use(foodRouter);

app.get("/", (req, res) => {
  res.status(200).json({
    msg: "Working",
  });
});

const start = async () => {
  try {
    await connectDB(process.env.DB);
    app.listen(PORT, () => {
      console.log(`App is running at PORT: ${PORT}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
