const parseNumber = (value) => {
  const parsed = Number(value);
  return Number.isNaN(parsed) ? undefined : parsed;
};

export const parseGeoParams = (query) => {
  const lat = parseNumber(query.lat);
  const lng = parseNumber(query.lng);
  const radius = parseNumber(query.radius) || 2000;

  return { lat, lng, radius };
};