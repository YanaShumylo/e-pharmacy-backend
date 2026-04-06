import { isValidObjectId } from 'mongoose';
import createHttpError from 'http-errors';

export function isValidId(paramName) {
  return (req, res, next) => {

    const value = req.params[paramName];

    if (!isValidObjectId(value)) {
    return next(createHttpError(400, `${paramName} is not valid`));
    }
    next();
  };
}