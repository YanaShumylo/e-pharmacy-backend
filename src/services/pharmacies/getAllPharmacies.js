import { pharmacyCollection } from "../../db/models/pharmacy.js";

export const getAllPharmacies = async () => {
    const pharmacies = await pharmacyCollection.find();
    return pharmacies;
};

