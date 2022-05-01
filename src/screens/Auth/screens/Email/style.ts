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
  welcome: {
    ...typography.regular,
    color: Colors.GRAY,
    fontSize: 20,
    marginBottom: Spacing.TINY + 2,
  },
  title: {
    ...typography.bold,
    fontSize: 30,
    lineHeight: 36.27,
    color: Colors.DARK,
  },
  input: {
    ...typography.regular,
    fontSize: Spacing.MEDIUM_PLUS,
    lineHeight: 28.25,
    letterSpacing: 2,
    textAlign: 'center',
  },
})
