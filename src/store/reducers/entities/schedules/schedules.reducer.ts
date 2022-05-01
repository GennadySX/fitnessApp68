/*
 * @author GennadySX
 * @created at 2022
 **/

import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Schedule } from '@reducers/entities/schedules/schedules.types'
import { fetchScheduleAction } from '@actions/entities/schedule.actions'
import { ReducerPlurals } from '@constants/reducerLIst'

type initscheduleState = {
  isLoading: boolean
  isLoaded: boolean
  error?: string | null
}

export const scheduleAdapter = createEntityAdapter<Schedule>()

export const scheduleSlice = createSlice({
  name: ReducerPlurals.Schedules,
  initialState: scheduleAdapter.getInitialState<initscheduleState>({
    isLoaded: false,
    isLoading: false,
    error: null,
  }),
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchScheduleAction.fulfilled, (state, action: PayloadAction<Schedule[]>) => {
      scheduleAdapter.setAll(state, action.payload)
    })
  },
})
