import Joi from 'joi';

export const registerUserSchema = Joi.object({
  name: Joi.string().min(3).max(25).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().pattern(/^\+?[0-9]{10,15}$/).required(),
  password: Joi.string().required(),
});

export const loginUserSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});