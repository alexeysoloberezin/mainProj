import moment from "moment";
import {getDate} from "@/helpers/date/getDate";

export const chatTime = (date) => {
  if (!date) return ''

  const newDate = moment(date)
  const dateNow = moment(getDate());

  if (newDate.isValid()) {
    const days = dateNow.diff(newDate, 'days')
    if (days === -1) return newDate.format('LT')
    return newDate.calendar()
  }else{
    return date
  }
}
