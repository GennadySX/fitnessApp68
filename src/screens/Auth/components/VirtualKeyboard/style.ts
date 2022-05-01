/*
 * @author GennadySX
 * @created at 2022
 **/

import { StyleSheet } from 'react-native'
import { WIDTH } from '@utils/normalizer'
import { typography } from '@styles/typography'
import { Spacing } from '@styles/index'

export const styles = StyleSheet.create({
  block: {
    flex: 1,
    width: WIDTH,
  },
  containerStyle: {
    left: -Spacing.MEDIUM,
  },
  btn: {
    width: WIDTH / 4,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    marginHorizontal: Spacing.MEDIUM,
    marginBottom: Spacing.SMALL,
  },
  value: {
    ...typography.medium,
    fontSize: Spacing.MEDIUM_PLUS,
    letterSpacing: 4,
    textAlign: 'center',
    fontWeight: 'bold',
    lineHeight: 28.63,
  },
})
