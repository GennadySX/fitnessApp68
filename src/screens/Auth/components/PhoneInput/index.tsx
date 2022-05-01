/*
 * @author GennadySX
 * @created at 2022
 **/
import React from 'react'
import { StyleProp, Text, TextStyle, View, ViewStyle } from "react-native";
import { styles } from './styles'
import { formatPhoneNumber } from "@helpers/formatPhoneNumberForPresenting";

type PhoneInputProps = {
  value: string
  placeholder?: string
  style?: StyleProp<ViewStyle>
  textStyle?: StyleProp<TextStyle>
}
export const PhoneInput = ({ value, placeholder, textStyle, style }: PhoneInputProps) => {
  return (
    <View style={[styles.block, style]}>
      <Text style={styles.code}>+7 </Text>
      {!!value ? <Text style={[styles.value, textStyle]}>{formatPhoneNumber(value)}</Text> : <Text style={styles.placeholder}>{placeholder}</Text>}
    </View>
  )
}
