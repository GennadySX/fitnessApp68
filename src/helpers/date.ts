/*
 * @author GennadySX
 * @created at 2022
 **/

import moment from 'moment'
import {StringDate} from "@apptypes/types";

/**
 * Получения дни года как массивом
 * @param startDate
 * @param stopDateIn
 */
export const getDates = (startDate: Date, stopDateIn: Date | StringDate) => {
  let dateArray = []
  let currentDate = moment(startDate)
  while (currentDate <= moment(stopDateIn)) {
    dateArray.push(moment(currentDate).format('YYYY-MM-DD'))
    currentDate = moment(currentDate).add(1, 'days')
  }
  return dateArray
}


export const getDayName = (date: any) => {
  const day = new Date(date).getDay()

  switch (day) {
    case 1:
      return 'ПН'
    case 2:
      return 'ВТ'
    case 3:
      return 'СР'
    case 4:
      return 'ЧТ'
    case 5:
      return 'ПТ'
    case 6:
      return 'СБ'
    default:
      return 'ВС'
  }
}
