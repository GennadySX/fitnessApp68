/*
 * @author GennadySX
 * @created at 2022
 **/
import { StyleSheet } from 'react-native'
import { styles as AuthInitStyle } from '@screens/Auth/style'
import { typography } from '@styles/typography'
import { Colors, Spacing } from '@styles/index'
import { shadows } from '@styles/shadows'
import { isAndroid } from "@utils/platform";

export const styles = StyleSheet.create({
  ...AuthInitStyle,
  xCross: {
    position: 'absolute',
    right: Spacing.MEDIUM_PLUS,
    top: Spacing.EXTRA_GIANT,
    zIndex: 999,
  },
  title: {
    fontSize: 48,
    lineHeight: 57.26,
  },
  submitText: {
    ...typography.large,
    fontSize: 15.5,
    color: Colors.BLACK,
    fontFamily: isAndroid ? 'Gilroy-Black' : 'Gilroy-Bold',
  },
  submit: {
    height: 75,
    borderRadius: 25,
  },
  descContainer: {
    marginVertical: Spacing.MEDIUM,
  },
  desc: {
    ...typography.small,
    fontSize: 23,
    lineHeight: 36.07,
    color: Colors.LIGHT_GRAY,
  },
  subDescContainer: {
    top: Spacing.SMALL,
    backgroundColor: Colors.PRIMARY,
    borderRadius: Spacing.EXTRA_TINY,
    paddingHorizontal: Spacing.SMALL,
    paddingVertical: Spacing.EXTRA_TINY,
  },
  subDesc: {
    ...typography.small,
    fontSize: 26,
    lineHeight: 31.02,
    color: Colors.WHITE,
  },
})
