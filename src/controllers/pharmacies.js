import { getAllPharmacies, getPharmaciesNearest } from "../services/pharmacies.js";
import { parsePaginationParams } from "../utils/parsePaginationParams.js";
import { parseGeoParams } from "../utils/parseGeoParams.js";
import createHttpError from 'http-errors';

export const getAllPharmaciesController = async (req, res) => {
    const { page, limit } = parsePaginationParams(req.query);
    const pharmacies = await getAllPharmacies({page, limit});
    res.status(200).json({
    status: 200,
    message: 'Pharmacies fetched successfully!',
    ...pharmacies,
  });
};

export const getPharmaciesNearestController = async (req, res) => {
  const { page, limit } = parsePaginationParams(req.query);
  const { lat, lng, radius } = parseGeoParams (req.query);
  if (!lat || !lng) {
    throw createHttpError(400, 'lat and lng query parameters are required');
}
  const pharmacies = await getPharmaciesNearest({
    lat,
    lng,
    radius,
    page,
    limit,
  });
  res.status(200).json({
    status: 200,
    message: "Nearest pharmacies fetched successfully",
    ... pharmacies,
  });
};

