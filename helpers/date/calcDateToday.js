import moment from "moment";
import {getDate} from "~/helpers/date/getDate";
import {refactorSlash} from "~/helpers/date/refactorSlash";

export const calcDateToday = (date) => {
  if (!date) return ''

  const dateB = moment(getDate());
  const dateC = moment(date.slice(0, 10));

  if (moment(dateC, 'YYYY-DD-MM').isValid()) {
    const days = dateB.diff(dateC, 'days')
    if (days === 0) {
      return 'Сегодня'
    } else if (days === -1) {
      return 'Завтра'
    }
    return refactorSlash(date)
  }
  return date
}
