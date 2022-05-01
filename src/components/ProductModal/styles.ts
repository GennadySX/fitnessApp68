/*
 * @author GennadySX
 * @created at 2022
 **/

import { StyleSheet } from 'react-native'
import { typography } from '@styles/typography'
import { Colors, Spacing } from '@styles/index'

export const styles = StyleSheet.create({
  block: {},
  title: {
    ...typography.bold,
    fontSize: 32,
    lineHeight: 33.85,
    marginBottom: Spacing.SMALL,
  },
  desc: {
    ...typography.regular,
    fontSize: 18,
    lineHeight: 27,
    color: Colors.GRAY,
  },
  containBlockTitle: {
    ...typography.medium,
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 23.86,
    letterSpacing: -0.3,
    color: Colors.BLACK_10,
  },
  moreBtnText: {
    ...typography.medium,
    color: Colors.PRIMARY,
  },
  descCardBlock: {
    marginTop: 20,
    marginBottom: 100,
  },
  descCard: {
    flexDirection: 'row',
    paddingHorizontal: 35,
    paddingLeft: 25,
    alignItems: 'flex-start',
    marginBottom: Spacing.MEDIUM,
  },
  descCardTitle: {
    ...typography.bold,
    fontWeight: 'bold',
    fontSize: 58,
    paddingRight: 15,
    lineHeight: 72,
    color: Colors.PRIMARY,
    bottom: 12,
  },
  descCardText: {
    ...typography.medium,
    fontFamily: 'Gilroy-Regular',
    fontSize: 18,
    lineHeight: 27,
    color: Colors.GRAY,
    maxWidth: '90%',
  },
})
