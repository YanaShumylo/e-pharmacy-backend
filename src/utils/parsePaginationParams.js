const parseNumber = (number, defaultValue) => {
  const isString = typeof number === 'string';
  if (!isString) return defaultValue;

  const parsedNumber = parseInt(number);
  if (Number.isNaN(parsedNumber)) {
    return defaultValue;
  }

  return parsedNumber;
};

export const parsePaginationParams = (query) => {
  const { page, limit } = query;

  const parsedPage = parseNumber(page, 1);
  const parsedLimit = parseNumber(limit, 12);

  return {
    page: parsedPage,
    limit: parsedLimit,
  };
};
