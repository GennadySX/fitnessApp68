/*
 * @author GennadySX
 * @created at 2022
 **/

import React, { useRef } from 'react'
import {
  StyleProp,
  TextInput,
  TextInputProps,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native'
import { styles } from './styles'
import { Colors } from '@styles/index'
import HitSlops from "@constants/hitSlops";

export enum InputUIMode {
  error = 'rgba(235, 87, 87, 0.7)',
  success = 'rgba(39, 174, 96, 0.7)',
  init = '#EFF7F9',
}

type InputUIProps = {
  value: string
  onChangeText: (value: string) => void
  style?: StyleProp<ViewStyle>
  textStyle?: StyleProp<TextStyle>
  status?: InputUIMode
} & TextInputProps

export const InputUI = ({
  value,
  onChangeText,
  style,
  textStyle,
  status,
  ...props
}: InputUIProps) => {
  let textInputRef = useRef<TextInput>(null)

  const onFocus = () => textInputRef.current?.focus()

  return (
    <TouchableOpacity
      onPress={onFocus}
      activeOpacity={1}
      style={[styles.block, style, status && { backgroundColor: 'yellow' }]}>
      <TextInput
        ref={textInputRef}
        value={value}
        onChangeText={onChangeText}
        style={[styles.field, textStyle]}
        placeholderTextColor={Colors.LIGHT_GRAY}
        {...props}
      />
    </TouchableOpacity>
  )
}
