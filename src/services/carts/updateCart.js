import { CartCollection } from "../../db/models/cart.js";

export const updateCart = async (userId, items) => {
  let cart = await CartCollection.findOne({ user: userId });

  if (!cart) {
    cart = await CartCollection.create({
      user: userId,
      items,
    });
    return cart;
  }

  cart.items = items;
  await cart.save();

  return cart;
};