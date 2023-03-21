require("dotenv").config();
const express = require("express");
const connectDB = require("./db/connect");
const app = express();

const products_routes = require("./routes/products");

app.get("/", (req, res) => {
  res.status(200).send("Hello!!!");
});

app.use("/api/products", products_routes);

const PORT = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.DB);
    app.listen(PORT, () => {
      console.log(`App is running at ${PORT}...`);
    });
  } catch (error) {
    console.log("ERROR" + error);
  }
};

start();
