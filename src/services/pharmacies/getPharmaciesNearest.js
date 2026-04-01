import { Pharmacy } from "../../db/models/pharmacy.js";

export const getPharmaciesNearest = async ({ lat, lng, radius = 2000, limit = 6 }) => {
  const pharmacies = await Pharmacy.aggregate([
    {
      $geoNear: {
        near: { type: "Point", coordinates: [Number(lng), Number(lat)] },
        distanceField: "distance",
        spherical: true,
        maxDistance: Number(radius),
      },
    },
    { $limit: Number(limit) },
  ]);

  return pharmacies;
};