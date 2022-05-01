/*
 * @author GennadySX
 * @created at 2022
 **/

import React, { Fragment, useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { styles } from './style'
import CustomHeader from '@layouts/Header/CustomHeader/CustomHeader'
import { Title } from '@ui/Title'
import { Colors, Spacing } from '@styles/index'
//@ts-ignore
import SwitchSelector from 'react-native-switch-selector'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { StackParamList } from '@routes/stackParams'
import { SCREENS } from '@routes/navigations.types'
import { PrimaryButton } from '@ui/PrimaryButton'
import { HEIGHT, WIDTH } from '@utils/normalizer'
import { LevelCalorie } from '@screens/Auth/components/LevelCalorie'

const mockValues = [
  { label: '1200', value: 1200 },
  { label: '1400', value: 1400 },
  { label: '1600', value: 1600 },
]

export const AuthNutritionScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<StackParamList, SCREENS.AUTH_NUTRITION_PROGRAM>>()

  const [calorie, setCalorie] = useState<string>('' + mockValues[0]?.value)

  const onSubmit = () => navigation.navigate(SCREENS.AUTH_PREPARING)

  return (
    <Fragment>
      <CustomHeader navigation={navigation} />

      <ScrollView style={[styles.block, { flex: 1, minHeight: HEIGHT }]}>
        <Text style={styles.welcome}>Немного о себе</Text>
        <Title text={'Давайте познакомимся '} textStyle={[styles.title, { fontSize: 26 }]} />
        <SwitchSelector
          initial={0}
          onPress={setCalorie}
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

        <LevelCalorie calorie={Number(calorie)} onChange={setCalorie} />

        <View style={{ marginVertical: Spacing.MEDIUM_PLUS, marginBottom: Spacing.LARGE }}>
          <Text style={styles.desc}>
            Для планомерного достижения результата, совсем не обязательно выбирать минимальную цифру
            Ккал.
          </Text>
        </View>

        <PrimaryButton
          keyboardSensetive
          onPress={onSubmit}
          style={{
            bottom: Spacing.MEDIUM*2,
            marginBottom: Spacing.GIANT * 2,
            maxWidth: WIDTH - Spacing.MEDIUM_PLUS * 2,
            marginLeft: Spacing.EXTRA_TINY,
          }}
          title={`Моя норма ${calorie} Ккал`}
        />
      </ScrollView>
    </Fragment>
  )
}
