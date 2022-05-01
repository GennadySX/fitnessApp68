/*
 * @author GennadySX
 * @created at 2022
 **/

import React from 'react'
import { StyleProp, Text, TouchableOpacity, View, ViewStyle } from 'react-native'
import { Svg } from '@components/Svg'
import { IconsSVG } from '@constants/Icons/IconsSvg'
import { styles } from './styles'

export type ItemValue<T> = {
  label: string
  value: T
}

type ValueType = ItemValue<string>

type CheckBoxListProps = {
  data: ValueType[]
  selected: string[]
  onSelect: (val: ValueType) => void
  style?: StyleProp<ViewStyle>
}
export const CheckBoxList = ({ data, selected, onSelect, style }: CheckBoxListProps) => {
  const isActive = (val: ValueType): boolean => selected.includes(val?.value)

  return (
    <View style={[styles.block, style]}>
      {data.map((v, i) => (
        <TouchableOpacity
          onPress={() => onSelect(v)}
          key={i}
          activeOpacity={0.6}
          style={styles.btn}>
          <Text style={[styles.text, isActive(v) && styles.activeText]}>{v.label}</Text>
          {isActive(v) ? (
            <View style={{ position: 'absolute', right: -2, top: 3 }}>
              <Svg source={IconsSVG.circleActive} />
            </View>
          ) : (
            <Svg source={IconsSVG.circle} />
          )}
        </TouchableOpacity>
      ))}
    </View>
  )
}
