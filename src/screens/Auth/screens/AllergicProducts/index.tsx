/*
 * @author GennadySX
 * @created at 2022
 **/

import React, { Fragment, useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { styles } from './style'
import CustomHeader from '@layouts/Header/CustomHeader/CustomHeader'
import { Title } from '@ui/Title'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { StackParamList } from '@routes/stackParams'
import { SCREENS } from '@routes/navigations.types'
import { PrimaryButton } from '@ui/PrimaryButton'
import { Spacing } from '@styles/index'
import { CheckBoxList, ItemValue } from '@screens/Auth/components/CheckBoxList'
import { authAllergicProductsMock } from '@screens/Auth/screens/AllergicProducts/mock'

export const AuthAllergicProductsScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<StackParamList, SCREENS.AUTH_ALLERGIC_PRODUCTS>>()

  const [items, setItems] = useState<string[]>([])

  const onSelectItem = (item: ItemValue<string>) => {
    if (items.includes(item?.value)) {
      setItems([...items.filter(v => item?.value !== v)])
    } else {
      setItems([...items, item.value])
    }
  }

  const onSubmit = () => navigation.goBack()
  const onNavigateNutrition = () => navigation.navigate(SCREENS.AUTH_NUTRITION_PROGRAM)

  return (
    <Fragment>
      <CustomHeader navigation={navigation} onRightCloseButton={onNavigateNutrition} />

      <ScrollView style={styles.block}>
        <Text style={styles.welcome}>Немного о себе</Text>
        <Title
          text={'Выберете продукты на \nкотоыре у Вас есть аллергия'}
          textStyle={[styles.title, { fontSize: 26 }]}
        />
        <View style={{ marginBottom: 100, paddingTop: Spacing.MEDIUM, padding: Spacing.SMALL }}>
          <CheckBoxList data={authAllergicProductsMock} onSelect={onSelectItem} selected={items} />
        </View>


        <View style={[styles.submitContainer, { paddingHorizontal: Spacing.MEDIUM, marginBottom: Spacing.GIANT, position: 'relative'}]}>
          <PrimaryButton
            disabled={!items.length}
            style={{ bottom: Spacing.SMALL }}
            onPress={onSubmit}
            title={'Готово'}
          />
        </View>
      </ScrollView>


    </Fragment>
  )
}
