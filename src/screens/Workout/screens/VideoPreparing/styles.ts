/*
 * @author GennadySX
 * @created at 2022
 **/

import { StyleSheet } from 'react-native'
import { Colors, Spacing } from '@styles/index'
import { typography } from '@styles/typography'

export const styles = StyleSheet.create({
  block: {
    flex: 1,
    paddingHorizontal: Spacing.MEDIUM,
    paddingTop: 80,
  },
  title: {
    paddingVertical: Spacing.MEDIUM,
    ...typography.large,
    fontWeight: 'bold',
    fontSize: 25,
    top: 40,
    textAlign: 'center',
  },
  desc: {
    top: 70,
    textAlign: 'center',
    ...typography.medium,
    color: Colors.GRAY,
  },
})
