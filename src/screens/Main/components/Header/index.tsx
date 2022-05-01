/*
 * @author GennadySX
 * @created at 2022
 **/

import { Image, Text, View } from 'react-native'
import { style } from '@screens/Main/styles'
import { WIDTH } from '@utils/normalizer'
import { mainScreenMock } from '@mocks/mainScreen.mock'
import React from 'react'

type AccountHeaderProps = {
  unPadding?: boolean
}

export const AccountHeader = ({ unPadding }: AccountHeaderProps) => {
  return (
    <View style={[style.container, unPadding && { paddingHorizontal: 0 }]}>
      <View style={{ width: WIDTH - 80 }}>
        <Text style={style.name}>Привет {mainScreenMock.userName} ✋🏻</Text>
      </View>
      <Image
        source={{
          uri: mainScreenMock.userAvatar,
        }}
        style={style.avatar}
      />
    </View>
  )
}
