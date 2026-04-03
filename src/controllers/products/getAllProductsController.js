import { getAllProducts } from "../../services/products/getAllProducts.js";
import { parsePaginationParams } from "../../utils/parsePaginationParams.js";
import { parseFilterParams } from "../../utils/parseFilterParams.js";

export const getAllProductsController = async (req, res) => {
    const { page, limit } = parsePaginationParams(req.query);
    const filter = parseFilterParams(req.query);

    const products = await getAllProducts({page, limit, filter});

    res.status(200).json({
        status: 200,
        message: 'Successfully found products!',
        data: products,
    });
};
