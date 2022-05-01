/*
 * @author GennadySX
 * @created at 2022
 **/
import { StyleSheet } from 'react-native'
import { styles as s } from '@screens/Auth/screens/Name/style'
import { typography } from '@styles/typography'
import { Colors, Spacing } from "@styles/index";

export const styles = StyleSheet.create({
  ...s,
  desc: {
    ...typography.regular,
    fontSize: 18,
    lineHeight: 20.88,
    letterSpacing: -0.3,
    color: Colors.GRAY,
    textAlign: 'center',
    paddingBottom: Spacing.GIANT
  },
})
