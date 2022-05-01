/*
 * @author GennadySX
 * @created at 2021
 **/

import { scheduleAdapter } from '@reducers/entities/schedules/schedules.reducer'
import { State } from '@store'
import { Schedule } from '@reducers/entities/schedules/schedules.types'

export const scheduleSelectors = scheduleAdapter.getSelectors(
  (state: State) => state.entities.schedules,
)

export const selectScheduleList = (state: State): Schedule[] => scheduleSelectors.selectAll(state)
