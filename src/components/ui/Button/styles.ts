/*
 * @author GennadySX
 * @created at 2022
 **/

import { StyleSheet } from 'react-native'
import { Colors, Spacing } from '@styles/index'
import { typography } from '@styles/typography'
import { WIDTH } from '@utils/normalizer'

export const styles = StyleSheet.create({
  block: {
    height: 60,
    backgroundColor: Colors.WHITE,
    marginBottom: Spacing.MEDIUM,
    minWidth: WIDTH - Spacing.MEDIUM * 2,
    borderRadius: Spacing.MEDIUM,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  pure: {
    backgroundColor: Colors.TRANSPARENT,
    borderColor: Colors.WHITE,
    borderWidth: 1,
  },
  pureText: {
    color: Colors.WHITE,
  },
  title: {
    ...typography.medium,
  },
})
