import { CartCollection } from "../db/models/cart.js";

export const getCartItems = async (userId) => {
  const cart = await CartCollection.findOne({ user: userId })
    .populate('items.product');
  return cart;
};

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

export const checkoutCart = async (userId, orderData) => {
    const cart = await CartCollection.findOne({ user: userId }).populate('items.product');
    if (!cart || cart.items.length === 0) {
        throw new Error('Cart is empty');
    }
    const total = cart.items.reduce((sum, item) => {
        return sum + item.product.price * item.quantity;
    }, 0);
    const order = {
        user: userId,
        items: cart.items,
        total,
        ...orderData,
    };
    cart.items = [];
    await cart.save();
    return order;
};
