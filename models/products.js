const products = require("../graphql/dummy/products");

// query
const getAllProducts = () => {
  return products;
};

/**
 * @TODO
 */
const getProductById = () => {};

// mutation
const createProduct = (id, price, description) => {
  const newProduct = {
    id,
    price,
    description,
  };
  products.push(newProduct);

  return newProduct;
};

/**
 * @TODO
 */
const updateProduct = () => {};

const deleteProduct = () => {};

/**
 * @TODO
 * @description add review for product
 * @params productId ID!
 * @params rating Int!
 * @params comment String!
 * @returns Product
 */
const addNewProductReview = () => {};

module.exports = {
  getAllProducts,
  createProduct,
};
