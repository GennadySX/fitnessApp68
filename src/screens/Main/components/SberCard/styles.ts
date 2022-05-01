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
    height: 170,
    backgroundColor: Colors.LIGHT_BLUE,
    borderRadius: Spacing.MEDIUM,
    alignItems: 'center',
    paddingHorizontal: Spacing.MEDIUM,
    paddingTop: Spacing.MEDIUM,
  },
  desc: {
    ...typography.medium,
    textAlign: 'center',
    color: Colors.GRAY,
    marginTop: 10,
  },
  btn: {
    width: WIDTH - 150,
  },
  btnTitle: {},

  mdItem: {
    width: WIDTH / 3 - 12,
    paddingHorizontal: 5,
    marginBottom: Spacing.SMALL,
  },
  mdItemImg: {
    width: '100%',
    height: 90,
    resizeMode: 'contain',
  },
  mdItemName: {
    ...typography.medium,
    paddingBottom: Spacing.TINY,
  },
  mdItemContains: {
    ...typography.small,
    color: Colors.GRAY,
  },
})
