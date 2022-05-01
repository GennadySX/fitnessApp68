/*
 * @author GennadySX
 * @created at 2022
 **/

import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { Svg } from '@components/Svg'
import { IconsSVG } from '@constants/Icons/IconsSvg'
// @ts-ignore
import SwitchSelector from 'react-native-switch-selector'
import { Colors } from '@styles/index'
import { WIDTH } from '@utils/normalizer'
import { styles } from '@screens/Workout/screens/WorkoutFinish/style'
import { PrimaryButton } from '@ui/PrimaryButton'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { StackParamList } from '@routes/stackParams'
import { SCREENS } from '@routes/navigations.types'

const mockValues = [
  { label: 'Легко', value: 1 },
  { label: 'Сложно', value: 2 },
]

export const WorkoutFinishScreen = () => {
  const navigation = useNavigation<StackNavigationProp<StackParamList, SCREENS.WORKOUT_FINISH>>()

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [nVal, setNVal] = useState<number>(1)

  const onNavigateToWorkout = () => {
    navigation.pop(2)
  }

  return (
    <View style={styles.block}>
      <View style={styles.container}>
        <Svg source={IconsSVG.videoFinishDecor} />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Тренировка завершена</Text>
          <Text style={styles.titleDesc}>{'Поздравляю, ты на шаг ближе к\nсвоей цели!'}</Text>
        </View>
      </View>

      <View style={styles.switchContainer}>
        <Text style={styles.switchTitle}>Оцените сложность тренировки!</Text>

        <SwitchSelector
          initial={0}
          onPress={(value: string) => setNVal(Number(value))}
          textColor={Colors.BLACK}
          selectedColor={Colors.WHITE}
          buttonColor={Colors.PRIMARY_DARKER}
          borderColor="transparent"
          height={70}
          backgroundColor={Colors.LIGHT_BLUE}
          hasPadding
          style={{ width: WIDTH * 0.6, alignSelf: 'center' }}
          valuePadding={5}
          options={mockValues}
          textStyle={{ fontSize: 18 }}
          selectedTextStyle={{ fontWeight: 'bold', fontSize: 18 }}
        />
      </View>

      <View style={{ alignSelf: 'center', bottom: 20 }}>
        <PrimaryButton
          style={{ width: WIDTH - 50 }}
          onPress={onNavigateToWorkout}
          activeOpacity={0.8}
          title={'Закрыть'}
        />
      </View>
    </View>
  )
}
