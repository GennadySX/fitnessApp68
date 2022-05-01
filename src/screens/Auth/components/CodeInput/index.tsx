/*
 * @author GennadySX
 * @created at 2022
 **/
import React from 'react'
import { StyleProp, Text, View, ViewStyle } from "react-native";
import { styles } from '@screens/Auth/components/CodeInput/styles'

type CodeInputProps = {
  value: string
  length?: number
  placeholder?: string
  style?: StyleProp<ViewStyle>
}
export const CodeInput = ({ value, length = 4, placeholder, style}: CodeInputProps) => {
  const values = [...Array(length)].map((v, i) => value[i])

  return (
    <View style={[styles.block, style]}>
      {values.map((v, i) => (
        <View key={i} style={styles.valueContainer}>
          <Text style={[styles.code, !v && styles.placeholder]}>{v || placeholder || '0'}</Text>
        </View>
      ))}
    </View>
  )
}
