/*
 * @author GennadySX
 * @created at 2022
 **/
import React from 'react'
import { ImageBackground, StatusBar, View } from 'react-native'
import { Assets } from '@constants/Icons/Assets'
import { Title } from '@ui/Title'
import { Colors } from '@styles/index'
import { Button } from '@ui/Button'
import { IconsSVG } from '@constants/Icons/IconsSvg'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { StackParamList } from '@routes/stackParams'
import { SCREENS } from '@routes/navigations.types'
import { styles } from '@screens/Auth/style'

export const AuthInitScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList, SCREENS.AUTH_INIT>>()

  const onLogBySMS = () => navigation.navigate(SCREENS.AUTH_PHONE)
  const onLogByEmail = () => navigation.navigate(SCREENS.AUTH_EMAIL)
  const onLogByApple = () => {}

  return (
    <ImageBackground source={Assets.bgInit} imageStyle={styles.bg} style={styles.block}>
      <StatusBar
        backgroundColor={Colors.TRANSPARENT}
        barStyle={'light-content'}
        translucent
        animated
      />
      <View style={styles.container}>
        <Title text={'Fitness \nСделай свой первый\nшаг, вместе с нами!'} color={Colors.WHITE} />
        <View style={styles.btnContainer}>
          <Button onPress={onLogBySMS} title={'Войти по SMS'} />
          <Button
            leftIcon={IconsSVG.apple}
            onPress={onLogByApple}
            title={'Войти с помощью Apple'}
          />
          <Button onPress={onLogByEmail} title={'Войти по E-mail'} pure />
        </View>
      </View>
    </ImageBackground>
  )
}
