/*
 * @author GennadySX
 * @created at 2022
 **/
import React, { Fragment } from 'react'
import {
  ActivityIndicator,
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
  TouchableOpacityProps,
  View,
} from 'react-native'
// @ts-ignore
import LinearGradient from '@gennadysx/react-native-linear-gradient'
import { _style } from '@ui/PrimaryButton/styles'
import { Colors, Spacing } from '@styles/index'
import { useKeyboard } from '@react-native-community/hooks'

type PrimaryButtonProps = {
  title: string
  onPress?: () => void
  style?: StyleProp<ViewStyle>
  styleBlock?: StyleProp<ViewStyle>
  textStyle?: StyleProp<TextStyle>
  loading?: boolean
  unShadow?: boolean
  disabled?: boolean
  keyboardSensetive?: boolean
} & TouchableOpacityProps

export const PrimaryButton = ({
  title,
  loading,
  textStyle,
  onPress,
  style,
  styleBlock,
  disabled,
  unShadow,
  keyboardSensetive,
  ...props
}: PrimaryButtonProps) => {
  const { keyboardShown } = useKeyboard()

  if (keyboardSensetive && keyboardShown) return <Fragment />

  return (
    <View style={{ top: 0 }}>
      <TouchableOpacity
        activeOpacity={0.6}
        disabled={disabled}
        onPress={() => onPress && !disabled && onPress()}
        style={[
          _style.block,
          style,
          { paddingVertical: 0 },
          {
            height: 50,
          },
          styleBlock,
          unShadow && {
            shadowColor: 'transparent',
          },
          disabled && { opacity: 0.5 },
        ]}
        {...props}>
        <LinearGradient
          style={[
            style as ViewStyle,
            {
              padding: Spacing.MEDIUM,
              width: '100%',
              alignItems: 'center',
              height: 60,
              bottom: 0,
              borderRadius: Spacing.MEDIUM,
            },
            styleBlock,
          ]}
          colors={['#F2521F', Colors.PRIMARY, '#FF8D4E']}
          start={{ x: 0.09, y: 0.5 }}
          end={{ x: 1, y: 0.009 }}
          locations={[0.005, 1, 0.9]}>
          {loading ? (
            <ActivityIndicator color={Colors.WHITE} size={'small'} style={{ width: 40 }} />
          ) : (
            <Text style={[_style.title, textStyle]}>{title}</Text>
          )}
        </LinearGradient>
      </TouchableOpacity>
    </View>
  )
}
