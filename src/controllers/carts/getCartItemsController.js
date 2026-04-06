import { getCartItems } from "../../services/carts/getCartItems.js";

export const getCartItemsController = async (req, res) => {
  const cart = await getCartItems(req.user._id);

  res.status(200).json({
    status: 200,
    message: "Cart fetched successfully",
    data: cart,
  });
};