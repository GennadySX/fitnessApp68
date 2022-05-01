/*
 * @author GennadySX
 * @created at 2021
 **/

import { createAsyncThunk } from '@reduxjs/toolkit'
import { Schedule } from '@reducers/entities/schedules/schedules.types'

export const fetchScheduleAction = createAsyncThunk(
  'fetch/schedule',
  async () => [{}] as Schedule[],
)
