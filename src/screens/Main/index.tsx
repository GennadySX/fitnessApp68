/*
 * @author GennadySX
 * @created at 2022
 **/
import { SafeAreaView, ScrollView, StatusBar, View } from 'react-native'
import React from 'react'
import { style } from '@screens/Main/styles'
import { DateCarousel } from '@screens/Main/components/DateCarousel'
import { SberCard } from '@screens/Main/components/SberCard'
import { Colors, Spacing } from '@styles/index'
import { ProductList } from '@screens/Main/components/ProductList'
import { AccountHeader } from '@screens/Main/components/Header'

export const MainScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar
        barStyle={'dark-content'}
        translucent={false}
        backgroundColor={Colors.WHITE}
        animated
      />
      <ScrollView style={style.block}>
        <View style={{ height: 200 }}>
          <AccountHeader />
          <DateCarousel />
        </View>
        <View
          style={{
            paddingHorizontal: Spacing.MEDIUM,
            marginBottom: Spacing.MEDIUM_PLUS,
            marginTop: Spacing.MEDIUM_PLUS,
          }}>
          <SberCard />
        </View>
        <ProductList />
        <View />
      </ScrollView>
    </SafeAreaView>
  )
}
