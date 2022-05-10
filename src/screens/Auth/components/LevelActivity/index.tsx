/*
 * @author GennadySX
 * @created at 2022
 **/

import React, { useState } from 'react'
import { Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native'
import { styles } from '@screens/Auth/components/LevelActivity/styles'
import { Svg, SvgStyleType } from '@components/Svg'
import { IconsSVG } from '@constants/Icons/IconsSvg'
import { Slider } from '@miblanchard/react-native-slider'
import { Colors } from '@styles/index'
import HitSlops from '@constants/hitSlops'

type LevelActivityProps = {}


const levelLabels = ['Минимум', 'Низкая', 'Средняя', 'Высокая', 'Максимум']
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
        <MinButton hitSlop={HitSlops.hitSlop_24} activeOpacity={0.9} onPress={() => setValue(0)} />
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
        <MaxButton
          value={value}
          hitSlop={HitSlops.hitSlop_24}
          activeOpacity={0.9}
          onPress={() => setValue(MAX)}
        />
      </View>

      <Text style={styles.desc}>
        {levelLabels[value]} уровень, <Text style={styles.descGray}>подойдет новичкам</Text>
      </Text>
    </View>
  )
}

const MinButton = (props: TouchableOpacityProps) => {
  return (
    <TouchableOpacity style={styles.minPinch} {...props}>
      <Text style={styles.minText}>Min</Text>
      <Svg source={IconsSVG.union} />
    </TouchableOpacity>
  )
}

const MaxButton = ({ value, ...props }: { value: number } & TouchableOpacityProps) => {
  const isActive = value === MAX
  return (
    <TouchableOpacity style={styles.maxPinch} {...props}>
      <Text style={[styles.minText, styles.maxText]}>Max</Text>
      <View style={styles.maxIcon}>
        <Svg
          source={IconsSVG.union}
          style={{ color: isActive ? Colors.PRIMARY_DARKER : Colors.PRIMARY_LIGHT } as SvgStyleType}
        />
      </View>
    </TouchableOpacity>
  )
}

const TrackButton = () => {
  return (
    <View style={styles.trackButton}>
      <Svg source={IconsSVG.pinchSlider} />
    </View>
  )
}
