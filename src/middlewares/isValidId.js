import { isValidObjectId } from 'mongoose';
import createHttpError from 'http-errors';

export function isValidId(req, res, next)  {
    const { productId } = req.params;
  if (!isValidObjectId(productId)) {
    throw new createHttpError.BadRequest('ID is not valid');
  }
  next();
}