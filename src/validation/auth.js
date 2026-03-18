import Joi from 'joi';

const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,64}$/;

export const registerUserSchema = Joi.object({
  name: Joi.string().trim().min(3).max(25).pattern(/^[A-Za-zА-Яа-яІіЇїЄє]+([ '-][A-Za-zА-Яа-яІіЇїЄє]+)*$/).required().messages({
      "string.pattern.base": "The name may contain only letters, spaces, hyphens, or apostrophes.",
    }),
  email: Joi.string().trim().email().lowercase().required(),
  phone: Joi.string().pattern(/^\+?[1-9]\d{7,14}$/).required().messages({
      "string.pattern.base": "Invalid phone number format.",
    }),
  password: Joi.string().pattern(passwordPattern).required().messages({
    "string.pattern.base": "The password must contain uppercase and lowercase letters, a number, and a special character.",
    }),
});

export const loginUserSchema = Joi.object({
  email: Joi.string().trim().email().lowercase().required(),
  password: Joi.string().pattern(passwordPattern).required().messages({
    "string.pattern.base": "The password must contain uppercase and lowercase letters, a number, and a special character.",
    }),
});