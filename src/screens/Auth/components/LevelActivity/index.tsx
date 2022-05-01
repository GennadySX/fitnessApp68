/*
 * @author GennadySX
 * @created at 2022
 **/

import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { styles } from '@screens/Auth/components/LevelActivity/styles'
import { Svg, SvgStyleType } from '@components/Svg'
import { IconsSVG } from '@constants/Icons/IconsSvg'
import { Slider } from '@miblanchard/react-native-slider'
import { Colors } from '@styles/index'

type LevelActivityProps = {}

const MAX = 4
export const LevelActivity = ({}: LevelActivityProps) => {
  const [value, setValue] = useState<number>(1)

  const onSlide = (val: number | Array<number>) => {
    if (Array.isArray(val)) setValue(Number(val[0]))
  }

  const isActive = (i: number) => value > i

  const track = (i: number) => {
    return (
      <View
        style={{
          width: 10,
          height: 10,
          borderRadius: 50,
          left: 10,
          backgroundColor: isActive(i) ? Colors.PRIMARY_DARKER : Colors.PRIMARY_LIGHT,
        }}
      />
    )
  }

  return (
    <View style={styles.block}>
      <Text style={styles.title}>{'Увровень физической \nнагрузки '}</Text>
      <View style={styles.slideBlock}>
        <MinButton />
        <Slider
          value={value}
          step={1}
          trackMarks={[1, 2, 3]}
          maximumValue={MAX}
          minimumValue={0}
          minimumTrackTintColor={Colors.PRIMARY_DARKER}
          maximumTrackTintColor={Colors.PRIMARY_LIGHT}
          containerStyle={styles.slider}
          renderTrackMarkComponent={track}
          renderThumbComponent={TrackButton}
          onValueChange={onSlide}
        />
        <MaxButton value={value} />
      </View>

      <Text style={styles.desc}>
        Низкий уровень, <Text style={styles.descGray}>подойдет новичкам</Text>
      </Text>
    </View>
  )
}

const MinButton = () => {
  return (
    <View style={styles.minPinch}>
      <Text style={styles.minText}>Min</Text>
      <Svg source={IconsSVG.union} />
    </View>
  )
}

const MaxButton = ({ value }: { value: number }) => {
  const isActive = value === MAX
  return (
    <View style={styles.maxPinch}>
      <Text style={[styles.minText, styles.maxText]}>Max</Text>
      <View style={styles.maxIcon}>
        <Svg
          source={IconsSVG.union}
          style={{ color: isActive ? Colors.PRIMARY_DARKER : Colors.PRIMARY_LIGHT } as SvgStyleType}
        />
      </View>
    </View>
  )
}

const TrackButton = () => {
  return (
    <View style={styles.trackButton}>
      <Svg source={IconsSVG.pinchSlider} />
    </View>
  )
}
