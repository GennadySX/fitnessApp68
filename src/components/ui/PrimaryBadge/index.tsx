/*
 * @author GennadySX
 * @created at 2022
 **/

import { styles } from './styles'
import { StyleProp, Text, TouchableOpacity, View, ViewStyle } from 'react-native'
import HIT_SLOPS from '@constants/hitSlops'
import React from 'react'
import moment from 'moment'

type PrimaryBadgeProps = {
  name: string
  value: string
  isDate?: boolean
  activeDot?: boolean
  isActive?: boolean
  clickAble?: boolean
  onPress?: (value: string) => void
  itemStyle?: StyleProp<ViewStyle>
}

export const PrimaryBadge = ({
  isActive,
  onPress,
  name,
  value,
  isDate,
  activeDot,
  clickAble,
  itemStyle,
}: PrimaryBadgeProps) => {
  return (
    <View style={[styles.block]}>
      <TouchableOpacity
        disabled={!clickAble}
        activeOpacity={clickAble ? 0.9 : 1}
        hitSlop={HIT_SLOPS.hitSlop_16}
        style={[styles.item, isActive && styles.itemActive, itemStyle]}
        onPress={() => onPress && onPress(value)}>
        <Text style={[styles.itemDayName, isActive && styles.itemDayNameActive]}>{name}</Text>
        <Text style={[styles.itemDay, isActive && styles.itemDayActive]}>
          {isDate ? String(moment(value).date()) : value}
        </Text>
      </TouchableOpacity>
      {isActive && activeDot && <View style={styles.dot} />}
    </View>
  )
}
