export const createTimestamp = (date) => {
  if (!date) date = new Date();
  const dateString = date.toISOString().replace(/\D/g,'');
  return dateString;
};
