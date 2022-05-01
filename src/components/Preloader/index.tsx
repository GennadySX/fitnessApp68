/*
 * @author GennadySX
 * @created at 2022
 **/
import React from 'react'
import { ActivityIndicator, StyleProp, View, ViewStyle } from 'react-native'
import { style as s } from './style'

export interface IPreloader {
  style?: StyleProp<ViewStyle>
  spinnerTheme?: 'light' | 'dark'
  spinnerColor?: string
  animating?: boolean
  isLoad?: boolean
}

export const Preloader = ({ style, spinnerTheme, spinnerColor, animating, isLoad }: IPreloader) => {
  return (
    <View style={[s.block, style]}>
      <ActivityIndicator
        size={'large'}
        animating={isLoad ? animating : true}
        color={
          spinnerTheme === 'light'
            ? s.lightSpinner.color
            : spinnerColor
            ? spinnerColor
            : s.darkSpinner.color
        }
      />
    </View>
  )
}
