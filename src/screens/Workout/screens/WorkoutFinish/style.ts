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
  },
  container: {
    top: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    bottom: 140,
    paddingHorizontal: Spacing.MEDIUM,
  },
  title: {
    ...typography.large,
    fontSize: 30,
    lineHeight: 35.79,
    textAlign: 'center',
    fontWeight: '600',
    marginBottom: Spacing.SMALL,
  },
  titleDesc: {
    ...typography.medium,
    color: Colors.GRAY,
    lineHeight: 21.19,
    fontSize: 18,
    textAlign: 'center',
  },
  switchContainer: {
    bottom: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  switchTitle: {
    ...typography.medium,
    fontSize: 20,
    lineHeight: 23.54,
    textAlign: 'center',
    marginBottom: Spacing.MEDIUM,
    fontWeight: '600',
  },
})
