/*
 * @author GennadySX
 * @created at 2022
 **/

import { StyleSheet } from 'react-native'
import { Colors, Spacing } from '@styles/index'
import { typography } from '@styles/typography'

export const styles = StyleSheet.create({
  block: {
    alignItems: 'center',
  },
  item: {
    backgroundColor: Colors.LIGHT_ORANGE,
    minWidth: 50,
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    borderRadius: 15,
    marginBottom: Spacing.SMALL,
  },
  itemActive: {
    backgroundColor: Colors.PRIMARY_DARKER,
  },
  itemDayName: {
    ...typography.medium_plus,
    color: Colors.PRIMARY_DARKER,
    fontSize: 18,
    paddingBottom: 10,
    fontWeight: 'bold'
  },
  itemDayNameActive: {
    color: Colors.WHITE,
  },
  itemDay: {
    ...typography.medium,
    color: Colors.BLACK,
  },
  itemDayActive: {
    color: Colors.WHITE,
    fontWeight: 'bold',
  },
  dot: {
    marginLeft: 10,
    width: Spacing.TINY,
    height: Spacing.TINY,
    borderRadius: 50,
    backgroundColor: Colors.PRIMARY,
  },
})
