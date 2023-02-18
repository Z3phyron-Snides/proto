const Product = require("../models/product");

exports.calculateTotalAmount = (productId, quantity) => {
  return Product.findById(productId)
    .then((product) => product.price * quantity)
    .catch((err) => console.error(err.message));
};

exports.decreaseQuantity = async (id) => {
  try {
    const product = await Product.findById(id);
    product.stock -= 1;
    await product.save();
  } catch (error) {
    throw new Error(error);
  }
};
