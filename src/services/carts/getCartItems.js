import { CartCollection } from "../../db/models/cart.js";

export const getCartItems = async (userId) => {
  const cart = await CartCollection.findOne({ user: userId })
    .populate('items.product');

  return cart;
};