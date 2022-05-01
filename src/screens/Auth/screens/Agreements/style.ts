/*
 * @author GennadySX
 * @created at 2022
 **/
import { StyleSheet } from 'react-native'
import { styles as s } from '@screens/Auth/screens/Name/style'
import { Colors, Spacing } from '@styles/index'
import { typography } from '@styles/typography'

export const styles = StyleSheet.create({
  ...s,
  btnContainer: {
    marginTop: Spacing.MEDIUM_PLUS,
  },
  btn: {
    paddingVertical: Spacing.MEDIUM,
    borderBottomColor: Colors.BLACK_80,
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  btnTitle: {
    ...typography.medium,
    fontSize: 17,
    lineHeight: 20,
  },
  btnArrow: {
    right: Spacing.EXTRA_TINY,
    transform: [{ rotate: '180deg' }],
  },

  agreementText: {
    paddingVertical: Spacing.MEDIUM_PLUS,
    ...typography.regular,
    fontSize: 16,
    lineHeight: 18,
    color: Colors.BLACK_20,
    marginBottom: Spacing.EXTRA_GIANT,
  },
})
