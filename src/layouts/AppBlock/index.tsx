/*
 * @author GennadySX
 * @created at 2022
 **/

import React, { createRef, Fragment, ReactChild, ReactChildren, ReactNode } from 'react'
import { StatusBar } from 'react-native'
import { Colors } from '@styles/index'
import { SafeAreaProvider } from 'react-native-safe-area-context/src/SafeAreaContext'
import { VideoModal, VideoModalProps } from '@components/VideoModal'
import { LogBox } from 'react-native'
import { BootSplash } from "@layouts/AppBlock/components/BootSplash";

LogBox.ignoreLogs(['ViewPropTypes will be removed', 'ColorPropType will be removed'])

type AppBlockProps = {
  children: ReactNode | ReactChildren | ReactChild
}
export let VideoPlayerRef = createRef<VideoModalProps>().current
export const AppBlock = ({ children }: AppBlockProps) => {
  return (
    <Fragment>
      <VideoModal ref={ref => (VideoPlayerRef = ref)} />
      <SafeAreaProvider>
        <StatusBar barStyle={'dark-content'} backgroundColor={Colors.WHITE} />
        <BootSplash/>
        {children}
      </SafeAreaProvider>
    </Fragment>
  )
}
