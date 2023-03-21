const Food = require("../models/foodModel");

// get all
exports.getAllFood = async (req, res) => {
  const { name, calories, sort, select } = req.query;
  const queryData = {};

  if (name) queryData.name = { $regex: name, $options: "i" };
  if (calories) queryData.calories = calories;

  let apiData = Food.find(queryData);

  if (sort) {
    let sortFix = sort.split(",").join(" ");
    apiData = apiData.sort(sortFix);
  }
  if (select) {
    let selectFix = select.split(",").join(" ");
    apiData = apiData.select(selectFix);
  }

  const foods = await apiData;

  try {
    res.send(foods);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

//create new
exports.createNew = async (req, res) => {
  const food = new Food(req.body);
  try {
    await food.save();
    res.send(food);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

//insertMany
exports.insertFoods = async (req, res) => {
  const foods = await Food.insertMany(req.body);
  try {
    res.send(foods);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

//update
exports.updateFoodInfo = async (req, res) => {
  try {
    const food = await Food.findByIdAndUpdate(req.params.id, req.body);
    await food.save();
    res.send(food);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

//delete
exports.deleteFood = async (req, res) => {
  try {
    const food = await Food.findByIdAndDelete(req.params.id);
    if (!food) res.status(404).send("Not Found");
    res.status(200).json({
      food: "deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
