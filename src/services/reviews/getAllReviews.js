import { reviewsCollection } from "../../db/models/review.js";
import { calculatePaginationData } from "../../utils/calculatePaginationData.js";

export const getAllReviews = async ({ page = 1, limit = 12 }) => {
const skip = (page - 1) * limit;

const reviewsQuery = reviewsCollection.find();

const reviewsCount = await reviewsCollection.find().merge(reviewsQuery).countDocuments()

const reviews = await reviewsQuery.skip(skip).limit(limit).exec();

const paginationData = calculatePaginationData(reviewsCount, limit, page);

  return {
    data: reviews,
    ...paginationData,
  };
};
