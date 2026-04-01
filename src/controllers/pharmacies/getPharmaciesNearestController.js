import { getPharmaciesNearest } from "../../services/pharmacies/getPharmaciesNearest.js";

export const getPharmaciesNearestController = async (req, res) => {
  const { lat, lng, radius, limit } = req.query;

  if (!lat || !lng) {
    return res.status(400).json({
      status: 400,
      message: "lat and lng query parameters are required",
    });
  }

  try {
    const pharmacies = await getPharmaciesNearest({
      lat,
      lng,
      radius,
      limit,
    });

    res.status(200).json({
      status: 200,
      message: "Nearest pharmacies fetched successfully",
      data: pharmacies,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      status: 500,
      message: "Server error while fetching nearest pharmacies",
    });
  }
};