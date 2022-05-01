/*
 * @author GennadySX
 * @created at 2022
 **/

import { StyleSheet } from 'react-native'
import { typography } from '@styles/typography'
import { Spacing } from '@styles/index'

export const styles = StyleSheet.create({
  block: {
    width: '100%',
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: Spacing.SMALL,
    height: 50,

  },
  text: {
    ...typography.regular,
    fontSize: 20,
    lineHeight: 23.2,
    letterSpacing: -0.3,
  },
  activeText: {
    ...typography.bold,
    fontSize: 20,
    lineHeight: 23.86,
    letterSpacing: -0.3,
  },
})
