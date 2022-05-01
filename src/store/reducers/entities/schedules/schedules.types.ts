/*
 * @author GennadySX
 * @created at 2022
 **/

import { Brand, StringTime } from '@apptypes/types'

export type WorkTimeId = Brand<number, 'work_time_id'>

export enum WeekDaysEnum {
  mon = 'monday',
  tue = 'tuesday',
  wed = 'wednesday',
  thu = 'thursday',
  fri = 'friday',
  sat = 'saturday',
  sun = 'sunday',
}

export type Schedule = {
  id: WorkTimeId
  startsAt: StringTime
  endsAt: StringTime
  weekday: WeekDaysEnum
}
