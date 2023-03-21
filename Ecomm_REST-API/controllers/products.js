const Product = require("../models/product");

const getProducts = async (req, res) => {
  const { company, name, featured, sort, select } = req.query;
  const queryObject = {};

  if (company) {
    queryObject.company = company;
  }
  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }
  if (featured) {
    queryObject.featured = featured;
  }

  let apiData = Product.find(queryObject);

  if (sort) {
    // sort(field1 field2 field3 ...)
    // sort(-name company ......) -> here "," will be replaced by " "
    let sortFix = sort.split(",").join(" ");
    apiData = apiData.sort(sortFix);
  }
  if (select) {
    let selectFix = select.split(",").join(" ");
    apiData = apiData.select(selectFix);
  }

  const data = await apiData;
  res.status(200).json({ data });
};

const getProductsTesting = async (req, res) => {
  const data = await Product.find(req.query);
  res.status(200).json({ data });
};

module.exports = { getProducts, getProductsTesting };
