/*
 * @author GennadySX
 * @created at 2022
 **/

import { RootReducer } from './reducer'
import { createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

const middlewares = [thunk]
if (__DEV__) {
  const createDebugger = require('redux-flipper').default
  middlewares.push(createDebugger())
}

const store = createStore(RootReducer, applyMiddleware(...middlewares))

export type State = ReturnType<typeof store.getState>
export type RootState = ReturnType<typeof store.getState>
export type GetState = () => RootState

export default store
