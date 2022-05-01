import { State } from '@store'

export type Brand<T, U> = T & { __brand: U }

export type GetState = () => State

export type StringDate = Brand<string, 'string_date'>
export type StringTime = Brand<string, 'string_time'>
