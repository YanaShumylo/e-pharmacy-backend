import { checkoutCart } from "../../services/carts/checkoutCart.js";

export const checkoutCartController = async (req, res) => {
  const order = await checkoutCart(req.user._id, req.body);

  res.status(200).json({
    status: 200,
    message: "Order placed successfully",
    data: order,
  });
};