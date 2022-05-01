/*
 * @author GennadySX
 * @created at 2022
 **/

import { StyleSheet } from 'react-native'
import { typography } from '@styles/typography'
import { Colors, Spacing } from '@styles/index'

export const _style = StyleSheet.create({
  block: {
    borderRadius: Spacing.MEDIUM,
    shadowColor: '#f6873a',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 7,
    elevation: 10,
  },
  title: {
    ...typography.bold,
    fontSize: 20,
    paddingTop: 7,
    color: Colors.WHITE,
  },
})
