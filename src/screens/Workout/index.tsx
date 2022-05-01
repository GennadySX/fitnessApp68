/*
 * @author GennadySX
 * @created at 2022
 **/

import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { AccountHeader } from '@screens/Main/components/Header'
import { styles } from '@screens/Workout/styles'
// @ts-ignore
import SwitchSelector from 'react-native-switch-selector'
import { Colors } from '@styles/index'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { StackParamList } from '@routes/stackParams'
import { SCREENS } from '@routes/navigations.types'
import { isIPhone } from '@utils/platform'
import { hasNotch } from '@utils/normalizer'

const mockValues = [
  { label: '10', value: 10 },
  { label: '20', value: 20 },
  { label: '40', value: 40 },
  { label: '60', value: 60 },
]

export const WorkoutScreen = () => {
  const navigation = useNavigation<StackNavigationProp<StackParamList, SCREENS.HOME_TABS>>()

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [nVal, setNVal] = useState<number>(40)

  const onNavigateToPreparing = () => navigation.navigate(SCREENS.VIDEO_PREPARING)

  return (
    <View style={[styles.block, isIPhone && hasNotch && { paddingTop: 60 }]}>
      <AccountHeader unPadding />
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Тренировка</Text>
        <Text style={styles.headerDesc}>
          {'Выберите длительность \nтренировки и нажмите старт'}
        </Text>
      </View>
      <SwitchSelector
        initial={0}
        onPress={(value: string) => setNVal(Number(value))}
        textColor={Colors.BLACK}
        selectedColor={Colors.WHITE}
        buttonColor={Colors.PRIMARY_DARKER}
        textStyle={{ fontWeight: 'bold' }}
        borderColor="transparent"
        height={60}
        backgroundColor={Colors.LIGHT_BLUE}
        hasPadding
        valuePadding={5}
        options={mockValues}
        selectedTextStyle={{ fontWeight: 'bold' }}
      />

      <View style={styles.circleBlock}>
        <View style={styles.circle}>
          <View style={[styles.circle, styles.circleSecondary]}>
            <TouchableOpacity
              onPress={onNavigateToPreparing}
              activeOpacity={0.7}
              style={[styles.circle, styles.circleTiny]}>
              <Text style={styles.circleBtnTitle}>СТАРТ</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}
