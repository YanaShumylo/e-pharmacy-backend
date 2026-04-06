import Joi from "joi";
import mongoose from "mongoose";

const objectId = (value, helpers) => {
  if (!mongoose.Types.ObjectId.isValid(value)) {
    return helpers.error("any.invalid");
  }
  return value;
};

export const updateCartSchema = Joi.object({
  items: Joi.array().items(Joi.object({
  product: Joi.string().custom(objectId).required().messages({"any.required": "Product ID is required", "any.invalid": "Invalid product ID",
  }),
  quantity: Joi.number().min(1).required().messages({"number.min": "Quantity must be at least 1",
  }),})).min(1).required().messages({"array.min": "Cart cannot be empty",
  }),
});

export const checkoutSchema = Joi.object({
  name: Joi.string().min(2).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().required(),
  address: Joi.string().required(),
  paymentMethod: Joi.string().valid("Cash On Delivery", "Bank").required(),
});