/*
 * @author GennadySX
 * @created at 2022
 **/

import React, { Fragment, useEffect, useState } from 'react'
import { ScrollView, StatusBar, Text, View } from 'react-native'
import { styles } from './style'
import CustomHeader from '@layouts/Header/CustomHeader/CustomHeader'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { StackParamList } from '@routes/stackParams'
import { SCREENS } from '@routes/navigations.types'
import { Colors, Spacing } from '@styles/index'
import { Title } from '@ui/Title'
import { FieldButton } from '@screens/Auth/components/FieldButton'
import { PrimaryButton } from '@ui/PrimaryButton'
import { LevelActivity } from '@screens/Auth/components/LevelActivity'
import { BirthDateModal } from '@screens/Auth/screens/About/modals/BirthDate'
import { WeightModal } from '@screens/Auth/screens/About/modals/Weight'
import { GrowthModal } from '@screens/Auth/screens/About/modals/Growth'
import { GoalModal } from '@screens/Auth/screens/About/modals/Goal'

const titleScreen =
  'Всего 5 вопросов на этой \nстранице подзволят \nподбрать специально для \nВас программу тренировок и \nпитания'

export enum Goals {
  loss = 'Похудение',
  maintenance = 'Поддержание веса',
  gain = 'Набор веса',
}

export const AuthAboutScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList, SCREENS.AUTH_ABOUT>>()

  const [birthDate, setBirthDate] = useState<Date>(new Date())
  const [growth, setGrowth] = useState<number>(0)
  const [weight, setWeight] = useState<number>(0)
  const [goal, setGoal] = useState<Goals>(Goals.loss)
  const getAge = `${new Date().getFullYear() - birthDate.getFullYear()}`

  const [dateModalVisible, setDateModalVisibility] = useState<boolean>(false)
  const [goalModalVisible, setGoalModalVisibility] = useState<boolean>(false)
  const [growthModalVisible, setGrowthModalVisibility] = useState<boolean>(false)
  const [weightModalVisible, setWeightModalVisibility] = useState<boolean>(false)

  const onSubmit = () => navigation.navigate(SCREENS.AUTH_PHOTO)
  const onNavigateNutrition = () => navigation.navigate(SCREENS.AUTH_NUTRITION_PROGRAM)

  return (
    <Fragment>
      <CustomHeader navigation={navigation} onRightCloseButton={onNavigateNutrition} />
      <ScrollView style={styles.block}>
        <StatusBar barStyle={'dark-content'} backgroundColor={Colors.WHITE} translucent={false} />
        <Text style={styles.welcome}>Немного о себе</Text>
        <Title text={titleScreen} textStyle={[styles.title, { fontSize: 25 }]} />

        <View style={{ marginVertical: Spacing.LARGE - 2, marginBottom: Spacing.GIANT * 1.5 }}>
          <FieldButton
            label={'Возраст'}
            value={getAge}
            onPress={() => setDateModalVisibility(true)}
          />
          <FieldButton
            label={'Рост'}
            value={String(growth)}
            measure={'см'}
            onPress={() => setGrowthModalVisibility(true)}
          />
          <FieldButton
            label={'Текущий вес'}
            value={String(weight)}
            measure={'kg'}
            onPress={() => setWeightModalVisibility(true)}
          />
          <FieldButton
            label={'Цель:'}
            value={goal}
            onPress={() => setGoalModalVisibility(true)}
            valueStyle={{ fontSize: 24, lineHeight: 28.63 }}
          />

          <LevelActivity />

          <PrimaryButton
            keyboardSensetive
            onPress={onSubmit}
            styleBlock={{ bottom: 0 }}
            title={'Продолжить'}
          />
        </View>
      </ScrollView>

      <BirthDateModal
        date={birthDate}
        setDate={setBirthDate}
        isVisible={dateModalVisible}
        onClose={() => setDateModalVisibility(false)}
      />

      {growthModalVisible && (
        <GrowthModal
          growth={growth}
          setGrowth={setGrowth}
          onClose={() => setGrowthModalVisibility(false)}
          isVisible={growthModalVisible}
        />
      )}

      {weightModalVisible && (
        <WeightModal
          weight={weight}
          setWeight={setWeight}
          onClose={() => setWeightModalVisibility(false)}
          isVisible={weightModalVisible}
        />
      )}
      <GoalModal
        goal={goal}
        setGoal={setGoal}
        onClose={() => setGoalModalVisibility(false)}
        isVisible={goalModalVisible}
      />
    </Fragment>
  )
}
