import { getAllProducts, getOneProductId  } from "../services/products.js";
import { parsePaginationParams } from "../utils/parsePaginationParams.js";
import { parseFilterParams } from "../utils/parseFilterParams.js";
import createHttpError from 'http-errors';

export const getAllProductsController = async (req, res) => {
    const { page, limit } = parsePaginationParams(req.query);
    const filter = parseFilterParams(req.query);
    const products = await getAllProducts({page, limit, filter});
    res.status(200).json({
        status: 200,
        message: 'Successfully found products!',
        ... products,
    });
};

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
