/*
 * @author GennadySX
 * @created at 2022
 **/

import React from 'react'
import { FlatList } from 'react-native'
import { ProductsMock } from '@mocks/products.mock'
import { MenuItemCard } from '@components/MenuItemCard'
import { _styles } from '@screens/Main/components/ProductList/styles'

export const ProductList = () => {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      style={_styles.block}
      scrollEnabled={false}
      contentContainerStyle={_styles.container}
      data={[...ProductsMock, ...ProductsMock]}
      renderItem={({ item, index }) => (
        <MenuItemCard
          style={[index === ProductsMock.length * 2 - 1 && { marginBottom: 110 }]}
          product={item}
          key={index}
        />
      )}
    />
  )
}
