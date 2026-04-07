import Joi from 'joi';

const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,64}$/;

export const registerUserSchema = Joi.object({
  image: Joi.string().uri().optional(),
  name: Joi.string().trim().min(3).max(25).pattern(/^[A-Za-zА-Яа-яІіЇїЄє]+([ '-][A-Za-zА-Яа-яІіЇїЄє]+)*$/).required().messages({"any.required": "Name is required","string.empty": "Name cannot be empty", "string.min": "Name must be at least 3 characters", "string.max": "Name must be at most 25 characters", "string.pattern.base": "The name may contain only letters, spaces, hyphens, or apostrophes.",
  }),
  email: Joi.string().trim().email().lowercase().required().messages({"any.required": "Email is required", "string.empty": "Email cannot be empty", "string.email": "Email must be a valid email address",
  }),
  password: Joi.string().min(8).max(50).pattern(passwordPattern).required().messages({ "any.required": "Password is required", "string.empty": "Password cannot be empty", "string.min": "Password must be at least 8 characters", "string.max": "Password must be at most 64 characters", "string.pattern.base": "The password must contain uppercase and lowercase letters, a number, and a special character.",
  }),
  spent: Joi.number().required().messages({"any.required":"Spent is required"}),
  phone: Joi.string().pattern(/^\+?[1-9]\d{7,14}$/).required().messages({ "any.required": "Phone number is required", "string.empty": "Phone number cannot be empty", "string.pattern.base": "Invalid phone number format.",
  }),
  address: Joi.string().trim().min(5).required().messages({ "any.required": "Address is required", "string.empty": "Address cannot be empty", "string.min": "Address must be at least 5 characters long",
  }),
  }).unknown(false);

export const loginUserSchema = Joi.object({
  email: Joi.string().trim().email().lowercase().required().messages({"any.required": "Email is required", "string.empty": "Email cannot be empty", "string.email": "Email must be a valid email address",
  }),
  password: Joi.string().min(8).max(50).pattern(passwordPattern).required().messages({"any.required": "Password is required", "string.empty": "Password cannot be empty", "string.min": "Password must be at least 8 characters", "string.max": "Password must be at most 64 characters", "string.pattern.base": "The password must contain uppercase and lowercase letters, a number, and a special character.",
  }),
  }).unknown(false);
