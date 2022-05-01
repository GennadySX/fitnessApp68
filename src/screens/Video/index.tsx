/*
 * @author GennadySX
 * @created at 2022
 **/
import React from "react";
import { VideoModal, VideoModalProps } from '@components/VideoModal'
import { useEffect, useRef } from 'react'
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native'
import { StackParamList } from '@routes/stackParams'
import { SCREENS } from '@routes/navigations.types'
import Orientation from "react-native-orientation-locker";
import {StatusBar} from "react-native";

export const VideoScreen = () => {
  const navigation = useNavigation()
  const route = useRoute<RouteProp<StackParamList, SCREENS.VIDEO>>().params
  let videoRef = useRef<VideoModalProps>(null).current

  const onClose = () => {
    navigation.goBack()
  }

  useEffect(() => {
    videoRef?.onOpen(route.uri)

    return () => {
      StatusBar.setHidden(false)
      Orientation.lockToPortrait()
    }
  }, [route.uri, videoRef])

  return <VideoModal isScreen onCloseScreen={onClose} ref={ref => (videoRef = ref)} />
}
