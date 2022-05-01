/*
 * @author GennadySX
 * @created at 2022
 **/

import React, { Fragment } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from './style'
import { Title } from '@ui/Title'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { StackParamList } from '@routes/stackParams'
import { SCREENS } from '@routes/navigations.types'
import { Svg } from '@components/Svg'
import { IconsSVG } from '@constants/Icons/IconsSvg'

const mock = [
  'Политика конфиденциальности',
  'Пользовательское соглашение ',
  'Согласие на обработку ПД',
  'Правила продажи товаров',
]

export const AuthAgreementsScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<StackParamList, SCREENS.AUTH_AGREEMENTS>>()

  const onNavigateAgreement = () => navigation.navigate(SCREENS.AUTH_AGREEMENT)
  return (
    <Fragment>
      <View style={styles.block}>
        <Title text={'Правила и соглашения'} textStyle={[styles.title, { fontSize: 26 }]} />

        <View style={styles.btnContainer}>
          {mock.map((v, i) => (
            <TouchableOpacity key={i} style={styles.btn} onPress={onNavigateAgreement}>
              <Text style={styles.btnTitle}>{v}</Text>
              <View style={styles.btnArrow}>
                <Svg source={IconsSVG.back} />
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </Fragment>
  )
}
