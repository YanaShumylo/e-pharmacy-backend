import { Pharmacy } from "../../db/models/pharmacy.js";

export const getAllPharmacies = async () => {
    const pharmacies = await Pharmacy.find();
    return pharmacies;
};

