const productModel = require("../../models/products");

module.exports = {
  Query: {
    products: async (root, args, context, info) => {
      console.log("Get all product from db");
      return Promise.resolve(productModel.getAllProducts());
    },
  },
  Mutation: {
    createProduct: (_, args) => {
      console.log("Create new product from db");
      return productModel.createProduct(args.id, args.price, args.description);
    },
  },
};
