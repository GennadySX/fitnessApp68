/*
 * @author GennadySX
 * @created at 2022
 **/

import React from 'react'
import { StyleProp, Text, TextStyle, TouchableOpacity, ViewStyle } from 'react-native'
import { styles } from './styles'
import { Svg } from '@components/Svg'

type ButtonProps = {
  onPress: () => void
  style?: StyleProp<ViewStyle>
  title: string
  textStyle?: StyleProp<TextStyle>
  leftIcon?: any
  rightIcon?: any
  pure?: boolean
}

export const Button = ({
  onPress,
  title,
  style,
  textStyle,
  pure,
  rightIcon,
  leftIcon,
}: ButtonProps) => {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={onPress} style={[styles.block, pure && styles.pure, style]}>
      {leftIcon && <Svg source={leftIcon} />}
      <Text
        style={[styles.title, pure && styles.pureText, leftIcon && { paddingLeft: 10 }, textStyle]}>
        {title}
      </Text>
      {rightIcon && <Svg source={rightIcon} />}
    </TouchableOpacity>
  )
}
