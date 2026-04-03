export const calculatePaginationData = (count, limit, page) => {
  const totalPages = Math.ceil(count / limit);
  const hasNextPage = Boolean(totalPages - page);
  const hasPreviousPage = page !== 1;

  return {
    page,
    limit,
    totalItems: count,
    totalPages,
    hasNextPage,
    hasPreviousPage,
  };
};