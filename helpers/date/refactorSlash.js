import moment from "moment";

export const refactorSlash = (date) => {
  if (!date) return ''
  const dateTwo = date.slice(0, 10);
  return moment(dateTwo, 'YYYY-MM-DD').format('MM/DD/YYYY')
}
