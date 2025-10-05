export const formatCurrency = (value) => {
  return `$${value.toLocaleString()}`;
};

export const formatNumber = (value) => {
  return value.toLocaleString();
};
