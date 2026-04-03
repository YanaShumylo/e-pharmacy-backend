import { productsCollection } from '../../db/models/product.js';
import { calculatePaginationData } from "../../utils/calculatePaginationData.js";

export const getAllProducts = async({ page=1, limit=12, filter = {} }) => {
  const skip = (page - 1) * limit;

  const query = {};

   if (filter.category) {
    query.category = filter.category;
  }

  if (filter.search) {
    query.name = { $regex: filter.search, $options: 'i' };
  }

  const productsQuery = productsCollection.find(query);

  const [productsCount, products] = await Promise.all([productsCollection.find().merge(productsQuery).countDocuments(),productsQuery.skip(skip).limit(limit).exec(),])

  const paginationData = calculatePaginationData(productsCount, limit, page);

  return {
    data: products,
    ...paginationData,
  };
};
