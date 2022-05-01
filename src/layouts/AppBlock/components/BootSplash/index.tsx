/*
 * @author GennadySX
 * @created at 2021
 **/

import React, { Fragment, useEffect, useRef, useState } from 'react'
import { Animated, ImageBackground, Text, View } from 'react-native'
import { Colors, Spacing } from '@styles/index'
// @ts-ignore
import { AnimatedSVGPath } from 'react-native-svg-animations'
import { HEIGHT, WIDTH } from '@utils/normalizer'
import { BootSplashLogoSvgPaths } from '@layouts/AppBlock/components/BootSplash/SvgPaths'
import DeviceInfo from 'react-native-device-info'
import { typography } from '@styles/typography'
import { Assets } from '@constants/Icons/Assets'
import { isIPhone } from '@utils/platform'

/***
 * Component self cleaner // you shouldn't worry about view weighing
 * @constructor
 */

export const BootSplash = () => {
  let anim = useRef(new Animated.Value(1)).current

  const [initLoading, setInitLoading] = useState<boolean>(true)
  const [initColor, setColor] = useState<string>(Colors.TRANSPARENT)

  const version = `${DeviceInfo.getVersion()}`

  const unsetView = () => {
    Animated.timing(anim, {
      useNativeDriver: true,
      duration: 500,
      toValue: 0,
    }).start()
  }

  setTimeout(() => {
    unsetView()
    setTimeout(() => setInitLoading(false), 500)
  }, 3500)

  useEffect(() => {
    setTimeout(() => setColor(Colors.WHITE), 1500)
  }, [])

  if (!initLoading) {
    return <Fragment />
  }

  return (
    <Animated.View
      style={{
        flex: 1,
        position: 'absolute',
        backgroundColor: Colors.WHITE,
        width: WIDTH,
        height: HEIGHT + 50,
        left: 0,
        zIndex: 9999,
        opacity: anim,
      }}>
      <ImageBackground
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
          alignSelf: 'center',
          paddingTop: 100,
          width: WIDTH,
          height: HEIGHT,
        }}
        imageStyle={{
          resizeMode: 'cover',
          width: WIDTH,
          height: HEIGHT + 100,
        }}
        source={Assets.splash}>
        <View
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center', top: Spacing.SMALL }}>
          <AnimatedSVGPath
            strokeColor={Colors.WHITE}
            duration={2500}
            strokeWidth={0.7}
            height={200}
            width={200}
            scale={1}
            fill={initColor}
            delay={1000}
            d={BootSplashLogoSvgPaths.join('')}
            loop={false}
          />
        </View>
        <Text
          style={{
            ...typography.regular,
            fontSize: 14,
            lineHeight: 16.48,
            textAlign: 'center',
            color: Colors.WHITE,
            position: 'absolute',
            bottom: isIPhone ? Spacing.LARGE + 50 : Spacing.LARGE,
            zIndex: 99,
          }}>
          App Version {version}
        </Text>
      </ImageBackground>
    </Animated.View>
  )
}
