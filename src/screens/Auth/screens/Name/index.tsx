/*
 * @author GennadySX
 * @created at 2022
 **/

import React, { Fragment, useEffect, useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from './style'
import CustomHeader from '@layouts/Header/CustomHeader/CustomHeader'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { StackParamList } from '@routes/stackParams'
import { SCREENS } from '@routes/navigations.types'
import { Colors, Spacing } from "@styles/index";
import { InputUI } from '@ui/Input'
import { PrimaryButton } from '@ui/PrimaryButton'
import { Title } from '@ui/Title'
//@ts-ignore
import SwitchSelector from 'react-native-switch-selector'
import { HEIGHT } from '@utils/normalizer'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const mockValues = [
  { label: 'Я мужчина', value: 1 },
  { label: 'Я женщина', value: 2 },
]

export const AuthNameScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList, SCREENS.AUTH_NAME>>()

  const [name, setName] = useState<string>('')
  const [gender, setGender] = useState<string>('' + mockValues[0]?.value)

  const onSubmit = () => navigation.navigate(SCREENS.AUTH_ABOUT)
  const onAddAllergicItems = () => navigation.navigate(SCREENS.AUTH_ALLERGIC_PRODUCTS)
  const onNavigateNutrition = () => navigation.navigate(SCREENS.AUTH_NUTRITION_PROGRAM)

  return (
    <Fragment>
      <CustomHeader navigation={navigation} onRightCloseButton={onNavigateNutrition} />

      <KeyboardAwareScrollView
        scrollEnabled={false}
        keyboardShouldPersistTaps={'handled'}
        keyboardDismissMode={'interactive'}
        style={styles.block}>
        <View style={{ height: HEIGHT - 90 }}>
          <Text style={styles.welcome}>Немного о себе</Text>
          <Title text={'Давайте познакомимся '} textStyle={[styles.title, { fontSize: 26 }]} />
          <SwitchSelector
            initial={0}
            onPress={setGender}
            textColor={Colors.BLACK}
            selectedColor={Colors.WHITE}
            buttonColor={Colors.PRIMARY_DARKER}
            textStyle={styles.switchTextUnActive}
            borderColor="transparent"
            height={65}
            backgroundColor={Colors.LIGHT_BLUE}
            hasPadding
            style={{ marginVertical: 30 }}
            valuePadding={5}
            options={mockValues}
            selectedTextStyle={styles.switchText}
          />
          <InputUI
            textStyle={styles.input}
            value={name}
            onChangeText={setName}
            placeholder={'Имя'}
          />

          <TouchableOpacity onPress={onAddAllergicItems} style={styles.linkBtn}>
            <Text style={styles.linkText}>{'Выбрать продукты, на которые \nу меня аллергия'}</Text>
          </TouchableOpacity>

          <View style={[styles.submitContainer, { alignSelf: 'flex-end' }]}>
            <PrimaryButton
              disabled={!name.length}
              onPress={onSubmit}
              styleBlock={{ bottom: Spacing.SMALL }}
              title={'Продолжить'}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </Fragment>
  )
}
