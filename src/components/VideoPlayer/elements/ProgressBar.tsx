/*
 * @author GennadySX
 * @created at 2022
 **/
import React from 'react'
import { StyleProp, Text, View, ViewStyle } from 'react-native'
import Slider from '@react-native-community/slider'
import { hitSlop30 } from '@styles/spacing'

import { Colors } from '@styles/index'
import { styles } from './style'

interface Props {
  currentTime: number
  duration: number
  onSlideCapture: (data: { seekTime: number }) => void
  onSlideStart: () => void
  onSlideComplete: () => void
  setIsUserUsingProgressBar: (arg: boolean) => void
  style?: StyleProp<ViewStyle>
}

export const ProgressBar: React.FC<Props> = ({
  currentTime,
  duration,
  onSlideCapture,
  onSlideStart,
  onSlideComplete,
  setIsUserUsingProgressBar,
  style,
}) => {
  const position = getMinutesFromSeconds(currentTime)
  const fullDuration = getMinutesFromSeconds(duration)

  return (
    <View style={[styles.wrapper, style]}>
      <Slider
        value={currentTime}
        minimumValue={0}
        maximumValue={duration}
        step={1}
        onValueChange={handleOnSlide}
        onSlidingStart={onSlideStart}
        onSlidingComplete={onSlideComplete}
        minimumTrackTintColor={Colors.WHITE}
        hitSlop={hitSlop30}
        maximumTrackTintColor={'#FFFFFF'}
        thumbTintColor={Colors.WHITE}
        onTouchMove={() => setIsUserUsingProgressBar(true)}
        onTouchEnd={() => setIsUserUsingProgressBar(false)}
      />
      <View style={styles.timeWrapper}>
        <Text style={styles.timeLeft}>{position}</Text>
        <Text style={styles.timeRight}>{fullDuration}</Text>
      </View>
    </View>
  )

  function getMinutesFromSeconds(time: number) {
    const minutes = time >= 60 ? Math.floor(time / 60) : 0
    const seconds = Math.floor(time - minutes * 60)

    return `${minutes >= 10 ? minutes : '0' + minutes}:${seconds >= 10 ? seconds : '0' + seconds}`
  }

  function handleOnSlide(time: number) {
    onSlideCapture({ seekTime: time })
  }
}
