/*
 * @author GennadySX
 * @created at 2022
 **/

import React, { Fragment, useCallback, useState } from 'react'
import { styles } from './styles'
import Animated, { Easing, FadeIn, FadeOut, Layout, useSharedValue } from 'react-native-reanimated'

import { ListRenderItemInfo, ScrollViewProps, Text, TouchableOpacity, View } from 'react-native'
import { PaginationDots } from '@components/Carousel/components/PaginationDots'
import { Colors, Spacing } from '@styles/index'
import { WIDTH } from '@utils/normalizer'
import { typography } from '@styles/typography'

type CarouselProps = {
  data: any[]
  renderComponent: <ItemT>(info: ListRenderItemInfo<ItemT>) => React.ReactElement | null
}

export const Carousel = ({ data, renderComponent }: CarouselProps) => {
  const scrollAnimatedValue = useSharedValue(0)
  const [hintVisible, setHintVisibility] = useState<boolean>(true)

  const onScroll = useCallback<NonNullable<ScrollViewProps['onScroll']>>(
    ({
      nativeEvent: {
        contentOffset: { x },
      },
    }) => {
      scrollAnimatedValue.value = x
    },
    [scrollAnimatedValue],
  )

  const onTap = () => setHintVisibility(false)

  return (
    <Fragment>
      <Animated.FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        nestedScrollEnabled
        contentContainerStyle={styles.sliderContentContainer}
        onScroll={onScroll}
        data={data}
        keyExtractor={(v, i) => String(i)}
        renderItem={renderComponent}
      />

      <PaginationDots
        dotColor={Colors.PRIMARY}
        numberOfPages={data.length}
        animatedValue={scrollAnimatedValue}
        containerStyle={styles.pagination}
        unActiveColor={Colors.PRIMARY_DARKER}
      />

      {hintVisible && (
        <Animated.View
          entering={FadeIn.duration(500)}
          layout={Layout.easing(Easing.ease)}
          exiting={FadeOut.duration(500).easing(Easing.ease)}
          style={{
            width: WIDTH * 0.6,
            position: 'absolute',
            alignSelf: 'center',
            top: 170,
          }}>
          <TouchableOpacity
            onPressIn={onTap}
            activeOpacity={1}
            style={{
              width: '100%',
              backgroundColor: Colors.WHITE,
              padding: Spacing.SMALL,
              borderRadius: 15,
              zIndex: 2,
            }}>
            <Text
              style={{
                ...typography.large,
                fontSize: 14,
                lineHeight: 20.48,
                textAlign: 'center',
              }}>
              {'Листай в бок, там еще много \nинтересного 🙂'}
            </Text>
          </TouchableOpacity>
          <View
            style={{
              width: 20,
              height: 20,
              transform: [{ rotate: '45deg' }],
              position: 'absolute',
              alignSelf: 'center',

              backgroundColor: Colors.WHITE,
              zIndex: 1,
              bottom: -5,
            }}
          />
        </Animated.View>
      )}
    </Fragment>
  )
}
