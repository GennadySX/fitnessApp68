/*
 * @author GennadySX
 * @created at 2022
 **/

import React, { useEffect, useState } from 'react'
import { StatusBar, Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import { Title } from '@ui/Title'
import { VirtualKeyboard } from '@screens/Auth/components/VirtualKeyboard'
import { Colors, Spacing } from '@styles/index'
import { PhoneInput } from '@screens/Auth/components/PhoneInput'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { StackParamList } from '@routes/stackParams'
import { SCREENS } from '@routes/navigations.types'

export const AuthPhoneScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList, SCREENS.AUTH_PHONE>>()

  const [phone, setPhone] = useState<string>('')
  const [submitAble, setSubmitable] = useState<boolean>(false)

  const onPressVK = (val: string) => {
    phone.length <= 9 && setPhone(`${phone + val}`)
  }

  const onPhoneClear = () => setPhone(phone.slice(0, -1))
  const onSubmit = () => navigation.navigate(SCREENS.AUTH_CODE, { phone })
  const onNavigateAgreements = () => navigation.navigate(SCREENS.AUTH_AGREEMENTS)

  useEffect(() => {
    setSubmitable(phone.length >= 10)
  }, [phone])

  return (
    <View style={styles.block}>
      <StatusBar barStyle={'dark-content'} backgroundColor={Colors.WHITE} translucent={false} />
      <Text style={styles.welcome}>Добро пожаловать</Text>
      <Title text={'Введите Ваш номер \nтелефона'} textStyle={styles.title} />

      <View style={{ flex: 1, paddingTop: Spacing.GIANT * 2, maxHeight: 520 }}>
        <PhoneInput
          value={phone}
          placeholder={'(900) 000-00-00'}
          style={{ marginBottom: Spacing.GIANT }}
        />
        <VirtualKeyboard
          submitAble={submitAble}
          onPress={onPressVK}
          onClear={onPhoneClear}
          onSubmit={onSubmit}
        />
      </View>
      <View style={styles.privacyContainer}>
        <Text style={styles.privacy}>Продолжая авторизацию, вы соглашаетесь с </Text>
        <TouchableOpacity style={styles.privacyLinkBtn} onPress={onNavigateAgreements}>
          <Text style={styles.privacyLink}>пользовательским соглашением</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
