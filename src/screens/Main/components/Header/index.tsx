/*
 * @author GennadySX
 * @created at 2022
 **/

import { Image, Text, View, ViewStyle } from 'react-native'
import { style as s } from '@screens/Main/styles'
import { WIDTH } from '@utils/normalizer'
import { mainScreenMock } from '@mocks/mainScreen.mock'
import React from 'react'

type AccountHeaderProps = {
  unPadding?: boolean
  style: ViewStyle
}

export const AccountHeader = ({ unPadding, style }: AccountHeaderProps) => {
  return (
    <View style={[s.container, unPadding && { paddingHorizontal: 0 }, style]}>
      <View style={{ width: WIDTH - 80 }}>
        <Text style={s.name}>Привет {mainScreenMock.userName} ✋🏻</Text>
      </View>
      <Image
        source={{
          uri: mainScreenMock.userAvatar,
        }}
        style={s.avatar}
      />
    </View>
  )
}
