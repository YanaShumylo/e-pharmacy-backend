import { getAllPharmacies } from "../../services/pharmacies/getAllPharmacies.js";
import { parsePaginationParams } from "../../utils/parsePaginationParams.js";

export const getAllPharmaciesController = async (req, res) => {
    const { page, limit } = parsePaginationParams(req.query);

    const pharmacies = await getAllPharmacies({page, limit});

    res.status(200).json({
    status: 200,
    message: 'Pharmacies fetched successfully!',
    ...pharmacies,
  });
};

