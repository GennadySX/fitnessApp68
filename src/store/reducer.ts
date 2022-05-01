/*
 * @author GennadySX
 * @created at 2022
 **/
import { combineReducers, PayloadAction } from '@reduxjs/toolkit'
import { scheduleSlice } from '@reducers/entities/schedules/schedules.reducer'
import { authSlice } from '@reducers/auth/auth.reducer'

export const appReducer = combineReducers({
  auth: authSlice.reducer,
  entities: combineReducers({
    schedules: scheduleSlice.reducer,
  }),
})

/***
 * Обнулить кэширования стейта
 * @param state
 * @param action
 * @constructor
 */
export const RootReducer = (state: any, action: PayloadAction) => {
  if (action.type === 'logout') {
    // @ts-ignore
    return appReducer({}, action.type)
  }
  return appReducer(state, action)
}
