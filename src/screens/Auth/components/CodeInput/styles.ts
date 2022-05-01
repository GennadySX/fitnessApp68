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
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  valueContainer: {
    backgroundColor: Colors.LIGHT_BLUE,
    height: 90,
    borderRadius: 25,
    width: 70,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  code: {
    ...typography.regular,
    fontSize: 48,
    letterSpacing: 4,
    lineHeight: 56.5,
    color: Colors.DARK,
  },
  placeholder: {
    ...typography.regular,
    fontSize: 48,
    letterSpacing: 4,
    lineHeight: 55.34,
    color: Colors.LIGHT_GRAY,
  },
})
