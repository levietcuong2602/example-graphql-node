const ordersModel = require("../../models/orders");

module.exports = {
  Query: {
    orders: () => {
      console.log("Get all order from db");
      return ordersModel.getAllOrders();
    },
  },
};
