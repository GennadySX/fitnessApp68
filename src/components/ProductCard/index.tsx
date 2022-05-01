/*
 * @author GennadySX
 * @created at 2022
 **/

import { styles } from './styles'
import { Image, ImageRequireSource, Text, TouchableOpacity } from 'react-native'
import React from 'react'

type ProductCardProps = {
  item: {
    img: ImageRequireSource
    name: string
    contain: string
  }
}
export const ProductCard = ({ item }: ProductCardProps) => {
  return (
    <TouchableOpacity style={styles.mdItem} activeOpacity={0.7}>
      <Image source={item.img} style={styles.mdItemImg} />
      <Text style={styles.mdItemName}>{item.name}</Text>
      <Text style={styles.mdItemContains}>{item.contain}</Text>
    </TouchableOpacity>
  )
}
