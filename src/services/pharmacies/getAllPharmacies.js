import { pharmacyCollection } from "../../db/models/pharmacy.js";
import { calculatePaginationData } from "../../utils/calculatePaginationData.js";

export const getAllPharmacies = async ({ page = 1, limit = 12 }) => {

    const skip = (page - 1) * limit;

    const pharmacyQuery = pharmacyCollection.find();

    const pharmacyCount = await pharmacyCollection.find().merge(pharmacyQuery).countDocuments()

    const pharmacies = await pharmacyQuery.skip(skip).limit(limit).exec();

    const paginationData = calculatePaginationData(pharmacyCount, limit, page);

    return {
        data: pharmacies,
        ...paginationData,
    };
};

