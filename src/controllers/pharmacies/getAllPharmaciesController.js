import { getAllPharmacies } from "../../services/pharmacies/getAllPharmacies.js";

export const getAllPharmaciesController = async (req, res) => {
    const pharmacies = await getAllPharmacies();

    res.status(200).json({
    status: 200,
    message: 'Pharmacies fetched successfully!',
    data: pharmacies,
  });
};

