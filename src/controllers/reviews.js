import { getAllReviews } from "../services/reviews.js";
import { parsePaginationParams } from "../utils/parsePaginationParams.js";

export const getAllReviewsController = async (req, res) => {
    const { page, limit } = parsePaginationParams(req.query);
    const reviews = await getAllReviews({ page, limit });
    res.status(200).json({
        status: 200,
        message: 'Successfully found reviews!',
        ...reviews,
    });
};
