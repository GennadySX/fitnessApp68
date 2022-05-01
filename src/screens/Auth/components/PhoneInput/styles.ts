/*
 * @author GennadySX
 * @created at 2022
 **/

import { StyleSheet } from 'react-native'
import { WIDTH } from '@utils/normalizer'
import { Colors, Spacing } from '@styles/index'
import { typography } from '@styles/typography'

export const styles = StyleSheet.create({
  block: {
    width: WIDTH - Spacing.MEDIUM * 2,
    flexDirection: 'row',
    height: 75,
    backgroundColor: Colors.LIGHT_BLUE,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: Spacing.MEDIUM_PLUS
  },
  code: {
    ...typography.bold,
    fontSize: 30,
    letterSpacing: 4,
    lineHeight: 36.27,
    color: Colors.DARK,
  },
  value: {
    ...typography.regular,
    fontSize: 30,
    letterSpacing: 2,
    lineHeight: 35.31,
    color: Colors.DARK,
  },
  placeholder: {
    ...typography.regular,
    fontSize: 30,
    color: Colors.LIGHT_GRAY,
    lineHeight: 55.34,
    letterSpacing: 2,
  },
})
