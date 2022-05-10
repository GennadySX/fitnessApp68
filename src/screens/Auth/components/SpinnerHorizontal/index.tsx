/*
 * @author GennadySX
 * @created at 2022
 **/

import React, { memo, useEffect, useRef, useState } from 'react'
import { FlatList, NativeScrollEvent, NativeSyntheticEvent, Text, View } from 'react-native'
import { styles } from '@screens/Auth/components/SpinnerHorizontal/styles'
import { Svg } from '@components/Svg'
import { IconsSVG } from '@constants/Icons/IconsSvg'
import { MMKV } from 'react-native-mmkv'
import { MMKVStorage, MMKVStorageEnums } from '@utils/MMKVStorage'
import { WIDTH } from '@utils/normalizer'
import { Colors } from '@styles/index'
import { GrowthMock } from '@screens/Auth/screens/About/modals/Growth/mock'
import { WeightMock } from '@screens/Auth/screens/About/modals/Weight/mock'
import { isIPhone } from '@utils/platform'
import { HapticFeedbacks, HapticVibration } from '@utils/vibration'
import { TimerSleep } from '@helpers/Sleep'

type SpinnerHorizontalProps = {
  data: number[]
  value?: number
  onChange?: (v: number) => void
  valKey: MMKVStorageEnums
  initialIndex?: number
}

const ITEM_WIDTH = WIDTH / 5 - 5

export const SpinnerHorizontal = ({
  data,
  onChange,
  value,
  valKey,
  initialIndex,
}: SpinnerHorizontalProps) => {
  const flatListRef = useRef<FlatList>(null)
  const [s, setS] = useState<boolean>(!initialIndex)

  const onScrollFinish = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    // const cWidth = WIDTH / 5 - 5
    // const lWidth = e.nativeEvent.layoutMeasurement.width
    // const bWidth = e.nativeEvent.contentSize.width

    const scrollPosition = e.nativeEvent.contentOffset.x
    // setActiveIndex( e.nativeEvent.contentOffset.x ? Math.round(scrollPosition / cWidth) : 0 )
    const is = e.nativeEvent.contentOffset.x ? Math.round(scrollPosition / ITEM_WIDTH) : 0
    s && MMKVStorage.set(valKey, is)
  }

  new MMKV().addOnValueChangedListener(key => {
    if (key === String(valKey) && onChange) {
      const val = new MMKV().getNumber(valKey) || 0
      val >= 0 && onChange(data[val] as number)
    }
  })

  const getItemLayout = (_: any, index: number) => ({
    length: data.length,
    offset: (ITEM_WIDTH + 0.5) * index,
    index,
  })

  useEffect(() => {
    if (initialIndex) {
      TimerSleep(0.1).then(() => {
        flatListRef.current?.scrollToOffset({
          offset: ITEM_WIDTH * initialIndex,
          animated: false,
        })
        TimerSleep(0.3).then(() => setS(true))
      })
    }
  }, [initialIndex])

  return (
    <View style={{ width: WIDTH, top: 20 }} onStartShouldSetResponder={() => !isIPhone}>
      <ActiveValue initialIndex={initialIndex} valKey={valKey} />
      <FlatList
        horizontal
        ref={flatListRef}
        initialNumToRender={initialIndex}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ height: 150, paddingHorizontal: WIDTH / 2.5, flexGrow: 1 }}
        data={data}
        onScrollToIndexFailed={() => console.log('onScrollToIndexFailed')}
        getItemLayout={getItemLayout}
        scrollEventThrottle={WIDTH / 5}
        keyExtractor={(v, i) => String(i)}
        renderItem={(itemProps: { item: number; index: number }) => <Item {...itemProps} />}
        onScroll={onScrollFinish}
        snapToInterval={ITEM_WIDTH}
        snapToAlignment={isIPhone ? 'center' : undefined}
        decelerationRate={isIPhone ? 'normal' : WIDTH / 5}
      />
    </View>
  )
}

const Item = memo(({ item, index }: { item: number; index: number }) => {
  return (
    <View key={index} style={[styles.item]}>
      <Text style={[styles.countValue]}>{item}</Text>
      <View style={[styles.valueIcon]}>
        <Svg source={IconsSVG.lineGray} />
      </View>
    </View>
  )
})

const ActiveValue = memo(
  ({ valKey, initialIndex }: { valKey: MMKVStorageEnums; initialIndex?: number }) => {
    const [active, setActive] = useState<number>(initialIndex || 0)

    const data = valKey === MMKVStorageEnums.growthModal ? GrowthMock : WeightMock

    new MMKV().addOnValueChangedListener(key => {
      if (key === String(valKey)) {
        HapticVibration(HapticFeedbacks.selection)
        const value = new MMKV().getNumber(valKey) || 0
        setActive(Number(value))
      }
    })

    return (
      <View
        style={[
          styles.item,
          {
            position: 'absolute',
            alignSelf: 'flex-end',
            right: WIDTH / 2 - 22,
            zIndex: 9,
            width: 50,
            backgroundColor: Colors.WHITE,
          },
        ]}>
        <Text
          style={[
            styles.countValue,
            {
              position: 'absolute',
              zIndex: 999,
              backgroundColor: Colors.WHITE,
              fontSize: 72,
              lineHeight: 90,
              height: 90,
              right: -42,
              top: -40,
              width: 130,
              textAlignVertical: 'bottom',
              textAlign: 'center',
              color: Colors.DARK,
            },
          ]}>
          {data[active]}
        </Text>
        <View
          style={[
            styles.valueIcon,
            {
              bottom: 0,
              zIndex: 9999,
            },
          ]}>
          <Svg source={IconsSVG.lineDark} />
        </View>
      </View>
    )
  },
)
