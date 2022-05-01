/*
 * @author GennadySX
 * @created at 2022
 **/

import { PixelRatio, StyleSheet } from 'react-native'
import { Colors } from './index'

export const typography = StyleSheet.create({
  sfPro: {
    fontFamily: 'SF Pro Display',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 34,
    lineHeight: 40,
    color: Colors.BLACK,
  },
  regular: {
    fontFamily: 'Gilroy-Regular',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 23.06,
    letterSpacing: -0.3,
    color: Colors.BLACK,
  },
  large: {
    fontFamily: 'Gilroy-SemiBold',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: PixelRatio.getFontScale() * 1.07 * 24,
    lineHeight: 30,
    color: Colors.BLACK,
  },
  small: {
    fontFamily: 'Gilroy-SemiBold',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 16,
    color: Colors.BLACK,
  },
  extraBold: {
    fontFamily: 'Gilroy-ExtraBold',
    fontWeight: '800',
    fontSize: 16,
    lineHeight: 19.6,
    letterSpacing: -0.3,
    color: Colors.BLACK,
  },
  bold: {
    fontFamily: 'Gilroy-Black',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 18,
    letterSpacing: -0.3,
    color: Colors.BLACK,
  },
  medium: {
    fontFamily: 'Gilroy-SemiBold',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 18,
    lineHeight: 21.47,
    color: Colors.BLACK,
  },
  medium_thin: {
    fontFamily: 'Gilroy-Medium',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 18,
    lineHeight: 21.47,
    color: Colors.BLACK,
  },
  medium_plus: {
    fontFamily: 'Gilroy-SemiBold',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 20,
    lineHeight: 20,
    color: Colors.BLACK,
  },

})
