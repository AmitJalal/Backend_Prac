require("dotenv").config();
const connectDB = require("./db/connect");
const ProductSchema = require("./models/product");

const Product = require("./products.json");

const start = async () => {
  try {
    await connectDB(process.env.DB);
    await ProductSchema.create(Product);
    console.log("success");
  } catch (error) {
    console.log(error);
  }
};

start();
