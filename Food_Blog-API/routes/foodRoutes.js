const {
  getAllFood,
  createNew,
  updateFoodInfo,
  deleteFood,
  insertFoods,
} = require("../controllers/foodControllers");


const foodRouter = require("express").Router();

foodRouter.get("/foods", getAllFood);

foodRouter.post("/food", createNew);

foodRouter.post("/foods", insertFoods);

foodRouter.patch("/food/:id", updateFoodInfo);

foodRouter.delete("/food/:id", deleteFood);

module.exports = foodRouter;
