/*
 * @author GennadySX
 * @created at 2022
 **/

import { StyleSheet } from 'react-native'
import { typography } from '@styles/typography'
import { Colors, Spacing } from '@styles/index'

export const style = StyleSheet.create({
  block: {
    flex: 1,
    paddingTop: 20,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 16,
  },
  name: {
    ...typography.medium,
    fontSize: 18,
    color: Colors.GRAY,
    paddingTop: 10,
    bottom: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  header: {
    paddingHorizontal: 16,
  },
  headerTitle: {
    ...typography.bold,
    paddingTop: Spacing.MEDIUM,
    fontSize: 26,
  },
  dateTitle: {
    paddingLeft: 15,
    color: Colors.PRIMARY_DARKER,
  },
})
