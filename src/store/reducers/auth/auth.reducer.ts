/*
 * @author GennadySX
 * @created at 2022
 **/

import { createSlice } from '@reduxjs/toolkit'
import { ReducerSingulars } from '@constants/reducerLIst'
import { fetchScheduleAction } from '@actions/entities/schedule.actions'

export const authSlice = createSlice({
  name: ReducerSingulars.Auth,
  initialState: {
    isLoaded: false,
    isLoading: false,
    error: '',
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchScheduleAction.fulfilled, state => {
        state.isLoading = false
      })
      .addCase(fetchScheduleAction.pending, state => {
        state.isLoading = true
      })
      .addCase(fetchScheduleAction.rejected, state => {
        state.isLoaded = false
        state.error = 'Ошибка'
      })
  },
})
