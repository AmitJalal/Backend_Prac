const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema(
  {
    pickUpLocation: {
      type: String,
      required: true,
    },
    dropLocation: {
      type: String,
      required: true,
    },
    distance: {
      type: String,
    },
    weight: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      default: 150,
    },
    dropDate: {
      type: String,
    },
    pickUpDate: {
      type: String,
    },
  },
  { timestamps: true }
);

const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;

//  pickuplocation, dropLocation, distance, weight, amount, dropdate, pickupdate
