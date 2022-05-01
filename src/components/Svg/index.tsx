/*
 * @author GennadySX
 * @created at 2022
 **/
import React, { FC } from 'react'
import { SvgProps as SvgPropsType, Color } from 'react-native-svg'
import { ImageStyle, StyleProp } from 'react-native'

export type SvgStyleType = {
  color?: Color | string
  secondaryColor?: Color
  backgroundColor?: Color
  width?: number | string
  height?: number
} & StyleProp<ImageStyle>

export type SvgProps = {
  source: FC<SvgPropsType> | any
  style?: SvgStyleType
} & SvgPropsType

export const Svg = ({ source, ...props }: SvgProps) => {
  return React.createElement(source, props)
}
