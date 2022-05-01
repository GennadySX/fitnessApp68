/*
 * @author GennadySX
 * @created at 2022
 **/

// import { Storage } from 'redux-persist'
import { MMKV } from 'react-native-mmkv'
import { consolePrettier } from "@helpers/console";


export enum MMKVStorageEnums {
  weightModal = '@weightModal',
  weightModalTemp = '@weightModalTemp',
  growthModal = '@growthModal',
  growthModalTemp = '@growthModalTemp',
  refreshToken = '@refresh_token',
  accessToken = '@access_token',
  appLaunch = 'appLaunch',
  deviceToken = '@device_token',
}

const mmkv = new MMKV()

export const persistStorageMMKV /*: Storage*/ = {
  setItem: (key: string, value: string) => {
    mmkv.set(key, value)
    return Promise.resolve(true)
  },
  getItem: (key: string) => {
    const value = mmkv.getString(key)
    return Promise.resolve(value)
  },
  removeItem: (key: string) => {
    mmkv.delete(key)
    return Promise.resolve()
  },
}

const setToMMKVStorage: Function = (key: MMKVStorageEnums, data: string) => {
  console.log('(MMKVStorage) setToMMKVStorage:::::', data)
  mmkv.set(key, data)
}
const multiSetToMMKVStorage: Function = (params: [MMKVStorageEnums, string][]) => {
  consolePrettier('(MMKVStorage) multiSetToMMKVStorage:::::', params, true)
  params.map(([key, data]) => mmkv.set(key, data))
}

const removeFromMMKVStorage: Function = (key: MMKVStorageEnums) => {
  console.log('(MMKVStorage) removeFromAsyncStorage:::::', key)
  mmkv.delete(key)
}

const multiRemoveFromMMKVStorage: Function = (keys: MMKVStorageEnums[]) => {
  keys.map(key => mmkv.delete(key))
}

const getFromMMKVStorage = <T>(key: MMKVStorageEnums, disLog?: boolean): T | undefined => {
  !disLog && console.log('(MMKVStorage) getFromMMKVStorage:::::', key)
  return mmkv.getString(key) as unknown as T
}

export const MMKVStorage = {
  store: mmkv,
  get: getFromMMKVStorage,
  set: setToMMKVStorage,
  delete: removeFromMMKVStorage,
  multiSet: multiSetToMMKVStorage,
  multiDelete: multiRemoveFromMMKVStorage,
}
