/*
 * @author GennadySX
 * @created at 2022
 **/

import React from 'react'
import { ImageBackground, ImageSourcePropType, TouchableOpacity, View } from 'react-native'
import { Svg } from '@components/Svg'
import { IconsSVG } from '@constants/Icons/IconsSvg'
import { WIDTH } from '@utils/normalizer'
import { VideoPlayerRef } from '@layouts/AppBlock'
import { VideoMock } from '@mocks/video.mock'
import { useNavigation } from '@react-navigation/native'
import { isAndroid } from '@utils/platform'
import { SCREENS } from '@routes/navigations.types'
import { StackParamList } from '@routes/stackParams'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

type VideoPlayerProps = {
  poster: ImageSourcePropType
  closeModal?: () => void
}

export const VideoPlayer = ({ poster, closeModal }: VideoPlayerProps) => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList, any>>()

  const onOpen = () => {
    if (isAndroid) {
      VideoPlayerRef?.onOpen(VideoMock.music)
    } else {
      VideoPlayerRef?.onOpen(VideoMock.music, () => closeModal && closeModal())
    }
  }
  return (
    <ImageBackground
      source={poster}
      style={{ height: 250, width: WIDTH, alignItems: 'center', justifyContent: 'center' }}
      imageStyle={{ resizeMode: 'cover', width: WIDTH, height: '100%' }}>
      <TouchableOpacity onPress={onOpen} activeOpacity={0.7}>
        <Svg source={IconsSVG.playButton} style={{ width: 80, height: 80 }} />
      </TouchableOpacity>
    </ImageBackground>
  )
}
