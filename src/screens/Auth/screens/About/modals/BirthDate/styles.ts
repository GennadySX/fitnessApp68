/*
 * @author GennadySX
 * @created at 2022
 **/

import { StyleSheet } from 'react-native'
import { WIDTH } from '@utils/normalizer'
import { Colors, Spacing } from '@styles/index'
import { typography } from '@styles/typography'

export const styles = StyleSheet.create({
  block: {},
  header: {
    bottom: Spacing.MEDIUM,
    marginVertical: Spacing.MEDIUM_PLUS,
  },
  title: {
    ...typography.bold,
    fontSize: 48,
    lineHeight: 72,
  },
  desc: {
    ...typography.regular,
    fontSize: 24,
    lineHeight: 36,
    color: Colors.GRAY,
  },
  submitContainer: {
    width: WIDTH - Spacing.GIANT,
    paddingLeft: Spacing.GIANT / 2,
    marginTop: Spacing.LARGE * 1.5,
    justifyContent: 'center',
    alignSelf: 'center',
    right: 18,
  },
})
