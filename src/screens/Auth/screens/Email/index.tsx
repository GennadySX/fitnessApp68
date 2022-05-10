/*
 * @author GennadySX
 * @created at 2022
 **/

import React, { Fragment, useState } from 'react'
import { StatusBar, Text, View } from 'react-native'
import { styles } from './style'
import { Colors, Spacing } from '@styles/index'
import { Title } from '@ui/Title'
import { InputUI } from '@ui/Input'
import { PrimaryButton } from '@ui/PrimaryButton'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { StackParamList } from '@routes/stackParams'
import { SCREENS } from '@routes/navigations.types'
import CustomHeader from '@layouts/Header/CustomHeader/CustomHeader'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { HEIGHT } from '@utils/normalizer'

export const AuthEmailScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList, SCREENS.AUTH_EMAIL>>()

  const [email, setEmail] = useState<string>('')

  const onSubmit = () => {
    navigation.navigate(SCREENS.AUTH_CODE, {
      email,
    })
  }

  return (
    <Fragment>
      <CustomHeader navigation={navigation} />
      <StatusBar barStyle={'dark-content'} backgroundColor={Colors.WHITE} translucent={false} />

      <KeyboardAwareScrollView
        scrollEnabled={false}
        keyboardShouldPersistTaps={'handled'}
        keyboardDismissMode={'interactive'}
        style={styles.block}>
        <View style={{ height: HEIGHT }}>
          <Text style={styles.welcome}>Немного о себе</Text>
          <Title text={'Введите адрес \nэлектронной почты'} textStyle={styles.title} />
          <View style={{ flex: 1, paddingTop: Spacing.GIANT * 2, maxHeight: 520 }}>
            <InputUI
              textStyle={[styles.input, {width: '100%'}]}
              value={email}
              keyboardType={'email-address'}
              textContentType={'emailAddress'}
              onChangeText={setEmail}
              placeholder={'usermail@mail.ru'}
            />
          </View>
          <PrimaryButton
            styleBlock={{ bottom: Spacing.MEDIUM }}
            disabled={!email.length}
            onPress={onSubmit}
            title={'Продолжить'}
          />
        </View>
      </KeyboardAwareScrollView>
    </Fragment>
  )
}
