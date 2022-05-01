/*
 * @author GennadySX
 * @created at 2022
 **/

import React from 'react'
import { Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native'
import { styles } from '@screens/Auth/components/LevelActivity/styles'
import { Svg, SvgStyleType } from '@components/Svg'
import { IconsSVG } from '@constants/Icons/IconsSvg'
import { Slider } from '@miblanchard/react-native-slider'
import { Colors, Spacing } from '@styles/index'
import { typography } from '@styles/typography'

type LevelCalorieProps = {
  onChange: (calorie: string) => void
  calorie: number
}

const MAX = 1600
export const LevelCalorie = ({ calorie, onChange }: LevelCalorieProps) => {
  const onSlide = (val: number | Array<number>) => {
    if (Array.isArray(val)) {
      onChange(String(val[0]))
    }
  }

  return (
    <View style={[styles.block, { height: 210 }]}>
      <Text style={styles.title}>{'Выбери сам, \nпередвигая ползунок '}</Text>
      <View style={[styles.slideBlock, { top: Spacing.MEDIUM_PLUS, left: Spacing.EXTRA_TINY }]}>
        <MinButton activeOpacity={0.9} onPress={() => onChange('1200')} />
        <Slider
          value={calorie}
          step={50}
          maximumValue={MAX}
          minimumValue={1200}
          minimumTrackTintColor={Colors.PRIMARY_DARKER}
          maximumTrackTintColor={Colors.PRIMARY_LIGHT}
          containerStyle={styles.slider}
          renderThumbComponent={() => <TrackButton value={calorie} />}
          onValueChange={onSlide}
        />
        <MaxButton activeOpacity={0.9} value={calorie} onPress={() => onChange(String(MAX))} />
      </View>
    </View>
  )
}

const MinButton = (props: TouchableOpacityProps) => {
  return (
    <TouchableOpacity style={styles.minPinch} {...props}>
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

const TrackButton = ({ value }: { value: number }) => {
  return (
    <View>
      <View style={[styles.trackButton, { width: 48, height: 47, bottom: 40 }]}>
        <Text
          style={[
            styles.minText,
            {
              ...typography.regular,
              lineHeight: 16.7,
              color: Colors.WHITE,
              fontSize: 14,
              top: 4,
              position: 'absolute',
              alignSelf: 'center',
              textAlign: 'center',
              left: 0,
              width: 48,
              height: 47,
            },
          ]}>{`${value}\nКкал`}</Text>
        <Svg source={IconsSVG.pinchValueSlider} />
      </View>
    </View>
  )
}
