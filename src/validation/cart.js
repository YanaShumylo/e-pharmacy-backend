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
    quantity: Joi.number().integer().min(1).required().messages({  "any.required": "Quantity is required", "number.base": "Quantity must be a number", "number.integer": "Quantity must be an integer", "number.min": "Quantity must be at least 1",
  }),
  }).unknown(false)
  ).min(1).max(100).required().messages({"any.required": "Items are required", "array.base": "Items must be an array", "array.min": "Cart cannot be empty", "array.max": "Cart cannot contain more than 100 items",
  }),
});

export const checkoutCartSchema = Joi.object({
  name: Joi.string().trim().min(3).max(25).pattern(/^[A-Za-zА-Яа-яІіЇїЄє]+([ '-][A-Za-zА-Яа-яІіЇїЄє]+)*$/).required().messages({"any.required": "Name is required","string.empty": "Name cannot be empty", "string.min": "Name must be at least 3 characters", "string.max": "Name must be at most 25 characters", "string.pattern.base": "The name may contain only letters, spaces, hyphens, or apostrophes.",
  }),
  email: Joi.string().trim().email().lowercase().required().messages({"any.required": "Email is required", "string.empty": "Email cannot be empty", "string.email": "Email must be a valid email address",
  }),
  phone: Joi.string().pattern(/^\+?[1-9]\d{7,14}$/).trim().required().messages({"any.required": "Phone number is required", "string.empty": "Phone number cannot be empty","string.pattern.base": "Invalid phone number format.",
  }),
  address: Joi.string().trim().min(3).required().messages({ "any.required": "Address is required", "string.empty": "Address cannot be empty", "string.min": "Address must be at least 3 characters long",
  }),
  paymentMethod: Joi.string().valid("Cash On Delivery", "Bank").required().messages({"any.required": "Payment method is required", "any.only": "Payment method must be either Cash On Delivery or Bank",
  }),
  }).unknown(false);
