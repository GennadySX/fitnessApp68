/*
 * @author GennadySX
 * @created at 2022
 **/
import React from 'react'
import { hitSlop20 } from '@styles/spacing'
import { TouchableOpacity, View } from 'react-native'
import { Svg } from '@components/Svg'
import { styles } from './style'
import { IconsSVG } from '@constants/Icons/IconsSvg'

interface Props {
  playing: boolean
  onPlay: () => void
  onPause: () => void
  skipForward: () => void
  skipBackward: () => void
}

export const PlayerControls: React.FC<Props> = ({
  playing,
  onPlay,
  onPause,
  skipForward,
  skipBackward,
}) => (
  <View style={styles.wrapperPlayerControls}>
    <TouchableOpacity style={styles.backward15} hitSlop={hitSlop20} onPress={skipBackward}>
      <Svg source={IconsSVG.back15secIcon} style={styles.sizes} />
    </TouchableOpacity>

    <TouchableOpacity
      activeOpacity={0.6}
      style={styles.touchable}
      onPress={playing ? onPause : onPlay}>
      {playing ? (
        <Svg source={IconsSVG.pauseButton} style={styles.sizes} />
      ) : (
        <Svg source={IconsSVG.playButton} style={styles.sizes} />
      )}
    </TouchableOpacity>

    <TouchableOpacity
      activeOpacity={0.6}
      style={styles.forward15}
      hitSlop={hitSlop20}
      onPress={skipForward}>
      <Svg source={IconsSVG.forward15secIcon} style={styles.sizes} />
    </TouchableOpacity>
  </View>
)
