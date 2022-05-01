/*
 * @author GennadySX
 * @created at 2022
 **/

import React, { FC, memo, useMemo } from 'react'
import { styles } from '@components/Carousel/components/PaginationDots/styles'
import Animated, { interpolate, interpolateColors, useAnimatedStyle } from 'react-native-reanimated'
import { StyleProp, View, ViewStyle } from 'react-native'
import { PAGINATION_DOT_SIZE, PAGINATION_DOT_SIZE_ACTIVE } from '@components/Carousel/styles'
import { WIDTH } from '@utils/normalizer'

export type PaginationDotsProps = {
  numberOfPages: number
  containerStyle?: StyleProp<ViewStyle>
  dotColor: string
  unActiveColor: string
} & Pick<DotProps, 'animatedValue'>

export const PaginationDots: FC<PaginationDotsProps> = memo(
  ({ numberOfPages, dotColor, unActiveColor, animatedValue, containerStyle }) => {
    const Dots = useMemo(
      () =>
        new Array(numberOfPages)
          .fill(0)
          .map((_, index) => (
            <Dot
              key={index}
              index={index}
              animatedValue={animatedValue}
              dotColor={dotColor}
              unActiveColor={unActiveColor}
            />
          )),
      [numberOfPages, animatedValue, dotColor, unActiveColor],
    )

    return (
      <View style={[styles.container, containerStyle]} pointerEvents="none">
        {Dots}
      </View>
    )
  },
)

export type DotProps = {
  index: number
  animatedValue: Animated.SharedValue<number>
  dotColor: string
  unActiveColor: string
}
export const Dot = ({ index, animatedValue, dotColor = '#CCCCCC', unActiveColor }: DotProps) => {
  const animStyle = useAnimatedStyle(() => {
    const width = interpolate(
      animatedValue.value,
      [WIDTH * (index - 1), WIDTH * index, WIDTH * (index + 1)],
      [PAGINATION_DOT_SIZE, PAGINATION_DOT_SIZE_ACTIVE, PAGINATION_DOT_SIZE],
      'clamp',
    )
    const opacity = interpolate(
      animatedValue.value,
      [WIDTH * (index - 1), WIDTH * index, WIDTH * (index + 1)],
      [0.48, 1, 0.48],
      'clamp',
    )

    return {
      width,
      opacity,
    }
  }, [animatedValue.value])

  const color = interpolateColors(animatedValue.value, {
    inputRange: [PAGINATION_DOT_SIZE, PAGINATION_DOT_SIZE_ACTIVE],
    outputColorRange: [unActiveColor, dotColor],
  })

  return <Animated.View style={[styles.dot, animStyle, { backgroundColor: color as any }]} />
}
