import { getOneProductId } from "../../services/products/getOneProductId.js";
import createHttpError from 'http-errors';

export const getOneProductIdController = async (req, res, next) => {
    const { productId } = req.params;

    const product = await getOneProductId(productId);

    if (!product) {
    next(createHttpError(404, 'Product not found'));
    return;
    }

    return res.status(200).json({
    status: 200,
    message: `Product successfully found.`,
    data: product,
    });
    }
