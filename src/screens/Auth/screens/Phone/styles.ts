/*
 * @author GennadySX
 * @created at 2022
 **/
import { StyleSheet } from 'react-native'
import { typography } from '@styles/typography'
import { Colors, Spacing } from '@styles/index'

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
  privacyContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    bottom: Spacing.SMALL,
  },
  privacy: {
    ...typography.regular,
    color: Colors.GRAY,
  },
  privacyLinkBtn: {},
  privacyLink: {
    ...typography.regular,
    color: '#4135f8',
  },
})
