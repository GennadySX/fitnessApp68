/*
 * @author GennadySX
 * @created at 2022
 **/

import React, { useEffect, useState } from 'react'
import { StatusBar, Text, TouchableOpacity, View } from 'react-native'
import { styles } from './style'
import { Title } from '@ui/Title'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { StackParamList } from '@routes/stackParams'
import { SCREENS } from '@routes/navigations.types'
import { formatPhoneNumber } from '@helpers/formatPhoneNumberForPresenting'
import { Colors, Spacing } from '@styles/index'
import { VirtualKeyboard } from '@screens/Auth/components/VirtualKeyboard'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { CodeInput } from '@screens/Auth/components/CodeInput'

export const AuthCodeScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList, SCREENS.AUTH_CODE>>()
  const routeParams = useRoute<RouteProp<StackParamList, SCREENS.AUTH_CODE>>().params

  const isEmail = !!routeParams?.email

  const [code, setCode] = useState<string>('')
  const [submitAble, setSubmitable] = useState<boolean>(false)

  const onPressVK = (val: string) => {
    code.length < 4 && setCode(`${code + val}`)
  }

  const onPhoneClear = () => setCode(code.slice(0, -1))
  const onSubmit = () => navigation.navigate(SCREENS.AUTH_NAME)

  useEffect(() => {
    setSubmitable(code.length >= 4)
  }, [code])

  return (
    <View style={styles.block}>
      <StatusBar barStyle={'dark-content'} backgroundColor={Colors.WHITE} translucent={false} />
      <Text style={styles.verification}>Верификация</Text>
      <Title
        text={`Мы отправили вам ${isEmail ? 'код \nподтверждения' : 'СМС код'}`}
        textStyle={styles.title}
      />
      <Text style={[styles.verification, styles.routePhoneLabel]}>
        {`На ${isEmail ? 'почту ' : 'номер'}`}
        <Text style={styles.routePhone}>
          {isEmail ? routeParams?.email : ` +7 ${formatPhoneNumber(routeParams?.phone || ' ')}`}
        </Text>
      </Text>

      <View style={{ flex: 1, paddingTop: Spacing.GIANT + Spacing.MEDIUM, maxHeight: 520 }}>
        <CodeInput
          value={code}
          length={4}
          placeholder={'0'}
          style={{ marginBottom: Spacing.GIANT + 20 }}
        />
        <VirtualKeyboard
          submitAble={submitAble}
          onPress={onPressVK}
          onClear={onPhoneClear}
          onSubmit={onSubmit}
        />
        <View style={{ bottom: isEmail ? 15 : 0 }}>
          <CodeTimer />
        </View>
      </View>
    </View>
  )
}

const CodeTimer = () => {
  const [time, setTime] = useState<number>(0)
  const [isPassed, setIsPassed] = useState<boolean>(false)
  const [changeTime, setChangeTime] = useState<boolean>(false)
  const [seconds, setSeconds] = useState<number>(0)

  const range = 120
  const startTimer = time < range && time >= 0
  const countDownSec = range - time
  const countDownMin = countDownSec / 60

  const onActive = () => {
    setIsPassed(false)
  }

  useEffect(() => {
    const date = new Date()
    setSeconds(date.getSeconds() - 1)
  }, [])

  useEffect(() => {
    if (startTimer && !isPassed) {
      const date = new Date()
      const dateSeconds = date.getSeconds()
      const timer = setTimeout(() => {
        setTime(dateSeconds > seconds ? dateSeconds - seconds : dateSeconds + range - seconds)
        setChangeTime(!changeTime)
      }, 500)
      return () => clearTimeout(timer)
    } else {
      setIsPassed(true)
      setTime(0)
    }
  }, [isPassed, seconds, changeTime, startTimer])

  return (
    <TouchableOpacity
      onPress={onActive}
      disabled={!isPassed}
      style={styles.titleCountdownContainer}>
      <Text style={[styles.titleCountdown, isPassed && { color: Colors.BLUE }]}>
        {'Отпарвить код снова '}
        {!isPassed && (
          <Text style={styles.countdown}>
            через 0{Math.floor(countDownMin)}:{countDownSec % 60 < 10 ? '0' : ''}
            {(range - time) % 60}
          </Text>
        )}
      </Text>
    </TouchableOpacity>
  )
}
