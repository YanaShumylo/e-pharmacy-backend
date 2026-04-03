const parseCategories = (category) => {
  const isString = typeof category === 'string';
  if (!isString) return;
  const isCategory= (category) => ['Heart', 'Medicine', 'Head', 'Hand', 'Leg'].includes(category);

  if (isCategory(category)) return category;
};

  const parseSearch = (search) => {
  if (typeof search !== 'string') return;
  const trimmed = search.trim();
  if (!trimmed) return;
  return trimmed;
};

export const parseFilterParams = (query) => {
  const { category, search } = query;

  const parsedCategory = parseCategories(category);
  const parsedSearch = parseSearch(search);

  return {
    category: parsedCategory,
    search: parsedSearch,
  };
};