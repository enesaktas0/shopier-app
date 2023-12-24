export const formatCurrency = (value, curr) =>
  new Intl.NumberFormat('en', { style: 'currency', currency: curr }).format(
    value,
  );
