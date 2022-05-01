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
    height: 75,
    width: WIDTH - Spacing.MEDIUM * 2,
    backgroundColor: Colors.LIGHT,
    borderRadius: Spacing.MEDIUM,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Spacing.MEDIUM,
  },
  field: {
    ...typography.regular,
    fontSize: Spacing.MEDIUM_PLUS,
    lineHeight: 28.25,
    letterSpacing: 2,
    textAlign: 'center',
    paddingHorizontal: 15,
  },
})
