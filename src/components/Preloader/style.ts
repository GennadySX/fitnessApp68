/*
 * @author GennadySX
 * @created at 2022
 **/
import { StyleSheet } from 'react-native'

import { Colors } from '../../styles'

export const style = StyleSheet.create({
  block: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    backgroundColor: '#ffffff',
    zIndex: 999
  },
  darkSpinner: {
    color: Colors.PRIMARY,
  },
  lightSpinner: {
    color: Colors.WHITE,
  },
})
