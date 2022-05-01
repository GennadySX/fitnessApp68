/*
 * @author GennadySX
 * @created at 2022
 **/

import { StyleSheet } from 'react-native'
import { Colors } from '@styles/index'
import { isIPhone } from '@utils/platform'

export const shadows = StyleSheet.create({
  normal: {
    shadowColor: Colors.LIGHT_GRAY,
    shadowOffset: {
      width: 2,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 10,
  },
  textShadow: {
    textShadowColor: Colors.BLACK,
    textShadowOffset: {
      width: isIPhone ? 0 : 0.2,
      height: isIPhone ? 0 : 0.9,
    },
    textShadowRadius: isIPhone ? 0 : 0.2,
  },
})
