import { getCartItems, updateCart, checkoutCart } from "../services/carts.js";

export const getCartItemsController = async (req, res) => {
  const cart = await getCartItems(req.user._id);
  res.status(200).json({
    status: 200,
    message: "Cart fetched successfully",
    data: cart,
  });
};

export const updateCartController = async (req, res) => {
  const { items } = req.body;
  const cart = await updateCart(req.user._id, items);
  res.status(200).json({
    status: 200,
    message: "Cart updated",
    data: cart,
  });
};

export const checkoutCartController = async (req, res) => {
  const order = await checkoutCart(req.user._id, req.body);
  res.status(200).json({
    status: 200,
    message: "Order placed successfully",
    data: order,
  });
};