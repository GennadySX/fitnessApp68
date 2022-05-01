/*
 * @author GennadySX
 * @created at 2022
 **/

import React from 'react'
import { ModalBottom } from '@components/Modal'
import { FlatList, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { Product } from '@reducers/entities/Product/product.types'
import { HEIGHT, WIDTH } from '@utils/normalizer'
import { VideoPlayer } from '@components/VideoPlayer'
import { styles } from '@components/ProductModal/styles'
import { Container } from '@layouts/Container'
import { ProductContainsMock, ProductItems, ProductsMock } from '@mocks/products.mock'
import { ProductCard } from '@components/ProductCard'
import { Colors, Spacing } from '@styles/index'
import { PrimaryBadge } from '@ui/PrimaryBadge'
import { Carousel } from '@components/Carousel'
import { typography } from '@styles/typography'

type ProductModalProps = {
  item: Product
  onClose: () => void
  isVisible: boolean
}

export const ProductModal = ({ item: product, onClose, isVisible }: ProductModalProps) => {
  return (
    <ModalBottom
      hideHeader
      statusBarTranslucent
      modalStyle={{
        paddingHorizontal: 0,
        height: HEIGHT - 110,
        paddingTop: 0,
        zIndex: 5,
        marginBottom: 0,
        paddingBottom: 0,
      }}
      onClose={onClose}
      swipeDirection={undefined}
      propagateSwipe
      hasTopCloseButton
      isVisible={isVisible}>
      <ScrollView nestedScrollEnabled bounces={false} scrollEventThrottle={15}>
        <Carousel
          data={[product.imgUri, ProductsMock[1]?.imgUri, ProductsMock[2]?.imgUri]}
          renderComponent={({ item, index }: { item: any; index: number }) => (
            <VideoPlayer key={index} closeModal={onClose} poster={{ uri: item }} />
          )}
        />

        <Container>
          <Text style={[styles.title, { color: Colors.BLACK }]}>{product.description}</Text>
          <Text style={styles.desc}>
            Сытное блюдо на скорую руку - яичница-глазунья в хрустящей гренке. Отличный вариант
            эффектного завтрака из самых простых продуктов.
          </Text>
        </Container>
        <Container unPaddingBottom>
          <Text style={styles.containBlockTitle}>Ценность</Text>
        </Container>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingRight: Spacing.MEDIUM,
            paddingLeft: Spacing.EXTRA_TINY,
            paddingTop: Spacing.MEDIUM,
            maxWidth: WIDTH - Spacing.MEDIUM,
          }}>
          {ProductContainsMock.map((item, index) => (
            <PrimaryBadge
              key={index}
              name={item.name}
              value={item.value}
              isActive={false}
              itemStyle={{ paddingHorizontal: Spacing.SMALL }}
            />
          ))}
        </View>
        <Container
          unPaddingBottom
          style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={styles.containBlockTitle}>Продукты</Text>
          <TouchableOpacity style={{ bottom: 5 }}>
            <Text style={styles.moreBtnText}>См. все</Text>
          </TouchableOpacity>
        </Container>
        <FlatList
          data={ProductItems}
          horizontal
          contentContainerStyle={{ paddingLeft: 10, marginTop: 10, paddingRight: 25 }}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => <ProductCard item={item} key={index} />}
        />
        <Container unPaddingBottom>
          <Text style={styles.containBlockTitle}>Рецепт</Text>
        </Container>
        <View style={styles.descCardBlock}>
          <View style={styles.descCard}>
            <Text style={styles.descCardTitle}>1</Text>
            <Text style={styles.descCardText}>
              Налейте растительное масло в чистую сковороду и поставьте на огонь.
            </Text>
          </View>
          <View style={styles.descCard}>
            <Text style={styles.descCardTitle}>2</Text>
            <Text style={styles.descCardText}>
              Разбейте яйца и вылейте их на сковороду, тараясь не повредить желток.
            </Text>
          </View>
          <View style={styles.descCard}>
            <Text style={styles.descCardTitle}>3</Text>
            <Text style={styles.descCardText}>
              Посолите по вкусу и жарьте 2-3 минуты. Лопаткой аккуратно переложите яичницу на
              тарелку и подавайте на стол.
            </Text>
          </View>
        </View>
      </ScrollView>
    </ModalBottom>
  )
}
