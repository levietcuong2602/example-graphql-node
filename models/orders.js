const orders = require("../graphql/dummy/orders");

// Query
const getAllOrders = () => {
  return orders;
};

// TODO
const getOrderById = () => {};

// Mutation
/**
 * @TODO
 */
const createOrder = () => {};

const updateOrder = () => {};

const deleteOrder = () => {};

module.exports = {
  getAllOrders,
};
