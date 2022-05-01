/*
 * @author GennadySX
 * @created at 2022
 **/

import React from 'react'
import { Text, View } from 'react-native'
import { styles } from './style'
import { WIDTH } from '@utils/normalizer'
import CircularProgress from 'react-native-circular-progress-indicator'
import { Colors } from '@styles/index'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { StackParamList } from '@routes/stackParams'
import { SCREENS } from '@routes/navigations.types'

export const AuthPreparingScreen = () => {
  const navigation = useNavigation<StackNavigationProp<StackParamList, SCREENS.AUTH_PREPARING>>()

  const onFinished = () => navigation.navigate(SCREENS.AUTH_OFFER)

  return (
    <View style={[styles.block, styles.blockPreparing]}>
      <Text style={[styles.titlePreparing]}>
        {'Создаем ваш личный план \nтренировок и питания'}
      </Text>

      <View style={styles.circleBlock}>
        <View style={[styles.circle, { width: WIDTH * 0.85, height: WIDTH * 0.85 }]}>
          <View style={styles.circleContainer}>
            <CircularProgress
              value={100}
              clockwise
              valueSuffix={'%'}
              circleBackgroundColor={Colors.WHITE}
              inActiveStrokeColor={Colors.PRIMARY_LIGHT}
              radius={120}
              duration={3000}
              onAnimationComplete={onFinished}
              activeStrokeSecondaryColor={Colors.PRIMARY}
              activeStrokeColor={Colors.PRIMARY_DARKER}
              progressValueColor={Colors.BLACK}
              fontSize={55}
              maxValue={100}
              activeStrokeWidth={20}
            />
          </View>
        </View>
      </View>
      <Text style={styles.desc}>
        Мы стараемся подобрать луший план тренировок для вас, это займет некоторое время
      </Text>
    </View>
  )
}
