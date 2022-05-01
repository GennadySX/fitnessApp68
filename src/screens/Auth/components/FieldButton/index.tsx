/*
 * @author GennadySX
 * @created at 2022
 **/

import React from 'react'
import { StyleProp, Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native'
import { styles } from './styles'
import { Svg } from '@components/Svg'
import { IconsSVG } from '@constants/Icons/IconsSvg'

type FieldButtonProps = {
  label: string
  value: string
  measure?: string
  onPress?: () => void
  style?: StyleProp<ViewStyle>
  labelStyle?: StyleProp<TextStyle>
  valueStyle?: StyleProp<TextStyle>
}

export const FieldButton = ({
  label,
  measure,
  value,
  onPress,
  valueStyle,
  labelStyle,
  style,
}: FieldButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.block, style]}
      onPress={() => onPress && onPress()}
      activeOpacity={0.6}>
      <Text style={[styles.label, labelStyle]}>{label} </Text>
      <View style={styles.valueContainer}>
        <Text style={[styles.value, valueStyle]}> {value} </Text>
        {!!measure && <Text style={styles.measure}> {measure} </Text>}
        <View style={styles.arrow}>
          <Svg source={IconsSVG.back} />
        </View>
      </View>
    </TouchableOpacity>
  )
}
