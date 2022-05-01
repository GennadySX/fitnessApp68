import React, { FC, useMemo } from 'react'
import { StyleProp, Text, TouchableOpacity, View, ViewStyle } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { styles } from './styles'
import HeaderBackButton from '../components/HeaderBackButton/HeaderBackButton'
import { SCREENS } from '@routes/navigations.types'
import { StackParamList } from '@routes/stackParams'
import { StackNavigationProp } from '@react-navigation/stack'
import { Svg, SvgStyleType } from '@components/Svg'
import { SvgProps as SvgPropsType } from 'react-native-svg'
import { hitSlop30 } from '@styles/spacing'
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type CustomHeaderProps = {
  navigation?: any
  title?: string
  style?: StyleProp<ViewStyle>
  buttonIcon?: any | FC<SvgPropsType>
  onPressButton?: () => void
  buttonIconFill?: string
  buttonIconStroke?: string
  buttonIconStyle?: SvgStyleType
  disabled?: boolean
  onRightCloseButton?: () => void
}

const CustomHeader = ({
  navigation,
  title,
  style,
  buttonIcon,
  onPressButton,
  buttonIconFill,
  buttonIconStroke,
  buttonIconStyle,
  disabled,
  onRightCloseButton,
}: CustomHeaderProps) => {
  const { top, left, right } = useSafeAreaInsets()
  const headerStyle = useMemo(
    () => [
      styles.header,
      {
        paddingTop: top,
        paddingLeft: left,
        paddingRight: right,
      },
      style,
    ],
    [left, right, style, top],
  )
  const svg = () => {
    if (buttonIcon) {
      if (buttonIconFill) {
        return <Svg source={buttonIcon} fill={buttonIconFill} />
      } else if (buttonIconStroke) {
        return <Svg source={buttonIcon} stroke={buttonIconStroke} />
      } else if (buttonIconStyle) {
        return <Svg source={buttonIcon} style={buttonIconStyle} />
      } else {
        return <Svg source={buttonIcon} />
      }
    }
  }

  return (
    <View style={headerStyle}>
      <View style={styles.contentContainer}>
        {navigation && <HeaderBackButton onPress={navigation.goBack} />}
        {title && <Text style={styles.title}>{title}</Text>}

        {buttonIcon && (
          <TouchableOpacity onPress={onPressButton} disabled={disabled} style={styles.button}>
            {svg()}
          </TouchableOpacity>
        )}

        {onRightCloseButton && (
          <TouchableOpacity
            onPress={onRightCloseButton}
            style={styles.rightCloseBtn}
            hitSlop={hitSlop30}>
            <Text style={styles.rightText}>Пропустить</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}
export default CustomHeader
