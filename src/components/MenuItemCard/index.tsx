/*
 * @author GennadySX
 * @created at 2022
 **/

import React, { useState } from 'react'
import { Product } from '@reducers/entities/Product/product.types'
import { Image, StyleProp, Text, TouchableOpacity, View, ViewStyle } from 'react-native'
import { _style } from '@components/MenuItemCard/styles'
import { ProductModal } from '@components/ProductModal'
import { isIPhone } from '@utils/platform'

type MenuItemCardProps = {
  product: Product
  style?: StyleProp<ViewStyle>
}

export const MenuItemCard = ({ product, style }: MenuItemCardProps) => {
  const [visibleModal, setVisibilityModal] = useState<boolean>(false)

  return (
    <TouchableOpacity
      style={[_style.block, style, isIPhone && _style.iosShadow]}
      activeOpacity={0.7}
      onPress={() => setVisibilityModal(true)}>
      <View style={_style.infoContainer}>
        <View style={_style.timeBlock}>
          <Text style={[_style.hour, isIPhone && { fontWeight: '900' }]}>{product.hour}</Text>
          <Text style={_style.dayTime}>
            {' - '}
            {product.dayTime}
          </Text>
        </View>

        <Text style={_style.desc}>{product.description}</Text>
        <Text style={_style.containInfo}>
          КБЖУ: <Text style={_style.contains}>{product.contains}</Text>
        </Text>
      </View>
      <Image source={{ uri: product.imgUri }} style={_style.img} />
      <ProductModal
        item={product}
        onClose={() => setVisibilityModal(!visibleModal)}
        isVisible={visibleModal}
      />
    </TouchableOpacity>
  )
}
