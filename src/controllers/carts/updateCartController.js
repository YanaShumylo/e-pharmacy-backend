import { updateCart } from "../../services/carts/updateCart.js";

export const updateCartController = async (req, res) => {
  const { items } = req.body;

  const cart = await updateCart(req.user._id, items);

  res.status(200).json({
    status: 200,
    message: "Cart updated",
    data: cart,
  });
};