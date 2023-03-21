const {
  getAllOrder,
  createNewOrder,
  updateOrder,
  deleteOrder,
} = require('../controllers/OrderController');

const OrderRouter = require('express').Router();

OrderRouter.get('/order', getAllOrder);

OrderRouter.post('/order', createNewOrder);

OrderRouter.patch('/order/:id', updateOrder);

OrderRouter.delete('/order/:id', deleteOrder);

module.exports = OrderRouter;
