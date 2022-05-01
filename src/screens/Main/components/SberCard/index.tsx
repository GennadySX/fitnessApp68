/*
 * @author GennadySX
 * @created at 2022
 **/

import React, { FC, useState } from 'react'
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import { Svg } from '@components/Svg'
import { IconsSVG } from '@constants/Icons/IconsSvg'
import { styles } from '@screens/Main/components/SberCard/styles'
import { PrimaryButton } from '@ui/PrimaryButton'
import { ModalBottom } from '@components/Modal'
import { ProductItems } from '@mocks/products.mock'
import { HEIGHT } from '@utils/normalizer'
import {ProductCard} from "@components/ProductCard";

export const SberCard: FC = () => {
  const [isVisibleModal, setIsVisibleModal] = useState<boolean>(false)

  const onShowModal = () => setIsVisibleModal(true)
  const onCloseModal = () => setIsVisibleModal(false)

  return (
    <View style={styles.block}>
      <Svg source={IconsSVG.SberLogo} />
      <Text style={styles.desc}>Покупай продукты на день в один клик !</Text>
      <View style={{ top: 25 }}>
        <PrimaryButton
          style={[styles.btn]}
          onPress={onShowModal}
          activeOpacity={0.8}
          title={'Купить'}
        />
      </View>

      <ModalBottom
        title={'Продукты на день'}
        modalStyle={{ maxHeight: HEIGHT - 100 }}
        statusBarTranslucent
        isVisible={isVisibleModal}
        onClose={onCloseModal}
        style={{ paddingHorizontal: 0 }}>
        <FlatList
          numColumns={3}
          data={ProductItems}
          showsVerticalScrollIndicator={false}
          scrollEnabled={false}
          renderItem={({ item, index }) => <ProductCard item={item} key={index} />}
          ListFooterComponent={() => (
            <View
              style={{
                height: 450,
                flex: 1,
                justifyContent: 'flex-end',
              }}>
              <View
                style={{
                  alignItems: 'center',
                  bottom: 260,
                }}>
                <PrimaryButton
                  style={styles.btn}
                  onPress={onCloseModal}
                  activeOpacity={0.8}
                  title={'Ок'}
                />
              </View>
            </View>
          )}
        />
      </ModalBottom>
    </View>
  )
}
