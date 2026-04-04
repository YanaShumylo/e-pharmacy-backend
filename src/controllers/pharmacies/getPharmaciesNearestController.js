import { getPharmaciesNearest } from "../../services/pharmacies/getPharmaciesNearest.js";
import { parsePaginationParams } from "../../utils/parsePaginationParams.js";
import { parseGeoParams } from "../../utils/parseGeoParams.js";


export const getPharmaciesNearestController = async (req, res) => {
  const { page, limit } = parsePaginationParams(req.query);
  const { lat, lng, radius } = parseGeoParams (req.query);

  if (!lat || !lng) {
    return res.status(400).json({
      status: 400,
      message: "lat and lng query parameters are required",
    });
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

