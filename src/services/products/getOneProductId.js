import { productsCollection } from "../../db/models/product.js";

export const getOneProductId = async (productId) => {
    return productsCollection.findById(productId)
};
