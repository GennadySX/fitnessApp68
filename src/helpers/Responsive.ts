import { Dimensions } from 'react-native'

const { width, height } = Dimensions.get('screen')

export const RW = (val: number) => {
  const scale = width / 390
  return val * scale
}

export const RH = (val: number) => {
  const scale = height / 844
  return val * scale
}
