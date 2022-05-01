/*
 * @author GennadySX
 * @created at 2022
 **/

import { FlatList, StyleProp, ViewStyle } from 'react-native'
import { styles } from './styles'
import React, { memo, useRef } from 'react'
import { PrimaryBadge } from '@ui/PrimaryBadge'

type BadgeCarouselProps = {
  data: { name: string; value: string; additionVal?: any }[]
  clickAble?: boolean
  isDate?: boolean
  activeDot?: boolean
  debounce?: boolean
  activeList?: any[]
  onPress?: (value: string) => void
  itemStyle?: StyleProp<ViewStyle>
  style?: StyleProp<ViewStyle>
  contentContainerStyle?: StyleProp<ViewStyle>
  onViewableItemsChange?: (item: any) => void
}

export const BadgeCarousel = memo(
  ({
    data,
    activeList,
    contentContainerStyle,
     debounce,
    style,
    onViewableItemsChange,
    ...props
  }: BadgeCarouselProps) => {
    const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 50 })

    const onViewRef = useRef(
      ({ viewableItems }: any) =>
        onViewableItemsChange &&
        onViewableItemsChange({
          first: viewableItems[0],
          last: viewableItems[viewableItems.length - 1],
        }),
    )

    return (
      <FlatList
        data={data}
        style={[styles.block, style]}
        initialNumToRender={10}
        scrollEventThrottle={0.8}
        keyExtractor={(item, index) => String(index) + item.value}
        snapToAlignment={'start'}
        bounces={!debounce}
        renderItem={({ item, index }) => (
          <PrimaryBadge
            key={index}
            isActive={!!activeList?.length && activeList.includes(item.value)}
            {...item}
            {...props}
          />
        )}
        contentContainerStyle={contentContainerStyle}
        horizontal
        disableVirtualization
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewRef.current}
        viewabilityConfig={viewConfigRef.current}
      />
    )
  },
)
