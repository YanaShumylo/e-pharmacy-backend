import { pharmacyCollection } from "../../db/models/pharmacy.js";
import { calculatePaginationData } from "../../utils/calculatePaginationData.js";

export const getPharmaciesNearest = async ({ lat, lng, radius = 2000, page = 1, limit = 12 }) => {
  const skip = (page - 1) * limit;

  const allPharmacies = await pharmacyCollection.aggregate([
    {
      $geoNear: {
        near: { type: "Point", coordinates: [Number(lng), Number(lat)] },
        distanceField: "distance",
        spherical: true,
        maxDistance: Number(radius),
      },
    },
  ]);
  const totalItems = allPharmacies.length;

  const pharmacies = await pharmacyCollection.aggregate([
    {
      $geoNear: {
        near: { type: "Point", coordinates: [Number(lng), Number(lat)] },
        distanceField: "distance",
        spherical: true,
        maxDistance: Number(radius),
      },
    },
    { $skip: skip },
    { $limit: Number(limit) },
  ]);

  const paginationData = calculatePaginationData(totalItems, limit, page);

  return {
    data: pharmacies,
    ...paginationData,
  };
};