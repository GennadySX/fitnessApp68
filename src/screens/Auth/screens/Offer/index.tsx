/*
 * @author GennadySX
 * @created at 2022
 **/

import React from 'react'
import {
  ImageBackground,
  StatusBar,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native'
import { styles } from './style'
import { Assets } from '@constants/Icons/Assets'
import { Colors } from '@styles/index'
import { Title } from '@ui/Title'
import { Button } from '@ui/Button'
import { Svg } from '@components/Svg'
import { IconsSVG } from '@constants/Icons/IconsSvg'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { StackParamList } from '@routes/stackParams'
import { SCREENS } from '@routes/navigations.types'
import { isAndroid, isIPhone } from '@utils/platform'

export const AuthOfferScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList, SCREENS.AUTH_OFFER>>()

  const onSubmit = () => navigation.navigate(SCREENS.HOME_TABS)

  return (
    <ImageBackground source={Assets.bgInit} imageStyle={styles.bg} style={styles.block}>
      <StatusBar
        backgroundColor={Colors.TRANSPARENT}
        barStyle={'light-content'}
        translucent
        animated
      />
      <TouchableOpacity style={styles.xCross} activeOpacity={0.6} onPress={onSubmit}>
        <Svg source={IconsSVG.xCross} />
      </TouchableOpacity>
      <View style={styles.container}>
        <Title text={'Приди в \nформу мечты!'} textStyle={styles.title} color={Colors.WHITE} />
        <View style={styles.descContainer}>
          <Text style={styles.desc}>
            {'Оформи бесплатную подписку, \nпохудей на '}
            <TouchableHighlight
              style={
                isIPhone && [
                  styles.subDescContainer,
                  { paddingHorizontal: 5, height: 35, paddingVertical: 0, top: 2 },
                ]
              }>
              <Text
                style={[
                  styles.subDesc,
                  isAndroid && styles.subDescContainer,
                  isIPhone && { paddingLeft: 5, fontSize: 25, fontWeight: 'bold' },
                ]}>
                1 кг за 7 дней
              </Text>
            </TouchableHighlight>
          </Text>
        </View>
        <View style={styles.btnContainer}>
          <Button
            onPress={onSubmit}
            textStyle={[styles.submitText, isIPhone && {fontWeight: 'bold'}]}
            style={styles.submit}
            title={'БЕСПЛАТНАЯ ПРОБНАЯ ВЕРСИЯ НА 7 ДНЕЙ'}
          />
        </View>
      </View>
    </ImageBackground>
  )
}
