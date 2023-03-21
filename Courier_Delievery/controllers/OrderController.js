const Order = require('../models/OrderModel');

// ================ test ==================
// exports.getOrder = async (req, res) => {
//   try {
//     await res.json({
//       success: true,
//       msg: 'Order Controller is working',
//     });
//   } catch (error) {
//     res.status(500).json({
//       error,
//       msg: 'Not Woring!!',
//     });
//     console.log(error);
//   }
// };

//============ Get order ==========
exports.getAllOrder = async (req, res) => {
  try {
    const orders = await Order.find({});
    if (orders.length == 0)
      return res.status(200).json({ msg: 'No orders found' });
    else
      return res.status(200).json({
        msg: `Currently you have ${orders.length} orders`,
        orders,
      });
  } catch (error) {
    res.status(500).json({
      msg: 'Internal Error',
      error,
    });
  }
};

//============ Create order ==========
exports.createNewOrder = async (req, res) => {
  console.log('neworder', req.body);
  try {
    const order = await Order.create(req.body);
    res.status(200).json({
      msg: 'order created successfully',
      order: order,
    });
  } catch (error) {
    res.status(500).json({
      msg: 'Internal Error',
      error,
    });
  }
};

//============ Edit order ==========
exports.updateOrder = async (req, res) => {
  try {
    // console.log(req.params);
    const order = await Order.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      msg: 'order updated successfully',
      order,
    });
  } catch (error) {
    res.status(500).json({
      msg: 'Internal Error',
      error,
    });
  }
};

//============ Delete order ==========
exports.deleteOrder = async (req, res) => {
  try {
    const order = await Order.findByIdAndDelete(req.params.id);
    if (!order) return res.status(404).json({ msg: 'Not Found!!' });
    res.status(200).json({
      msg: `${order} deleted successfully`,
      order,
    });
  } catch (error) {
    res.status(500).json({
      msg: 'Internal Error',
      error,
    });
  }
};
