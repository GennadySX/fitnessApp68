/*
 * @author GennadySX
 * @created at 2022
 **/

import { StyleSheet } from 'react-native'
import { Colors, Spacing } from '@styles/index'
import { typography } from '@styles/typography'

export const styles = StyleSheet.create({
  block: {
    height: 75,
    width: '100%',
    borderRadius: 25,
    backgroundColor: Colors.LIGHT_BLUE,
    paddingHorizontal: Spacing.MEDIUM,
    marginBottom: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  label: {
    ...typography.bold,
    fontSize: 20,
    lineHeight: 23.86,
    letterSpacing: -0.3,
  },
  valueContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  measure: {
    ...typography.bold,
    fontSize: 20,
    lineHeight: 23.86,
    letterSpacing: -0.3,
  },
  arrow: {
    marginLeft: 10,
    right: 3,
    top: 2,
    transform: [{ rotate: '180deg' }],
  },
  value: {
    ...typography.bold,
    fontSize: 36,
    lineHeight: 43.52,
    letterSpacing: -0.3,
    textAlign: 'right',
  },
})
