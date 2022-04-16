export const getDate = () => {
  const dateObj = new Date();
  const day = dateObj.getUTCDate();
  const month = dateObj.getUTCMonth() + 1;
  const year = dateObj.getUTCFullYear();

  return year + "-" + month + "-" + day
}
