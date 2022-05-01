/*
 * @author GennadySX
 * @created at 2022
 **/

import React from 'react'
import { ColorValue, StyleProp, Text, TextStyle } from 'react-native'
import { styles } from '@ui/Title/styles'

type TitleProps = {
  text: string
  textStyle?: StyleProp<TextStyle>
  color?: ColorValue
  fontSize?: number
}

export const Title = ({ text, textStyle, color, fontSize }: TitleProps) => {
  return (
    <Text style={[styles.text, textStyle, color && { color }, fontSize && { fontSize }]}>
      {text}
    </Text>
  )
}
