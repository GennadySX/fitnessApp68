/*
 * @author GennadySX
 * @created at 2022
 **/
import { StyleSheet } from 'react-native'
import { Colors, Spacing } from '@styles/index'
import { typography } from '@styles/typography'

export const styles = StyleSheet.create({
  block: {
    flex: 1,
    paddingHorizontal: Spacing.MEDIUM,
    paddingTop: Spacing.MEDIUM,
  },
  verification: {
    ...typography.regular,
    color: Colors.GRAY,
    fontSize: 20,
    marginBottom: Spacing.TINY + 2,
  },
  title: {
    ...typography.bold,
    fontSize: 26,
    lineHeight: 31.43,
    letterSpacing: -0.3,
    color: Colors.DARK,
  },
  routePhoneLabel: {
    paddingTop: Spacing.TINY,
    fontSize: 18,
  },
  routePhone: {
    ...typography.regular,
    color: Colors.BLUE,
    fontSize: 18,
    lineHeight: 20.75,
    letterSpacing: 1,
  },
  titleCountdownContainer: {
    paddingTop: Spacing.MEDIUM_PLUS,
    top: Spacing.MEDIUM_PLUS
  },
  titleCountdown: {
    ...typography.regular,
    color: Colors.GRAY,
    fontSize: 16,
    lineHeight: 18.75,
    textAlign: "center",
  },
  countdown: {
    color: Colors.BLUE
  }
})
