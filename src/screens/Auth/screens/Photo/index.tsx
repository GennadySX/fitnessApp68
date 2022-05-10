/*
 * @author GennadySX
 * @created at 2022
 **/

import React, { Fragment, useState } from 'react'
import { Text, TouchableOpacity, View, Image, ImageSourcePropType } from 'react-native'
import { styles } from './style'
import CustomHeader from '@layouts/Header/CustomHeader/CustomHeader'
import { Title } from '@ui/Title'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { StackParamList } from '@routes/stackParams'
import { SCREENS } from '@routes/navigations.types'
import { Svg } from '@components/Svg'
import { IconsSVG } from '@constants/Icons/IconsSvg'
import { PrimaryButton } from '@ui/PrimaryButton'
import ImagePicker, { Image as ImageType } from 'react-native-image-crop-picker'
import { Assets } from "@constants/Icons/Assets";
import { Spacing } from "@styles/index";

export const AuthPhotoScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList, SCREENS.AUTH_PHOTO>>()

  const [localFileImg, setlocalFileImg] = useState<ImageType>()

  const onChoisePhoto = async () => {
    await ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      freeStyleCropEnabled: true,
    })
      .then((image: ImageType) => {
        setlocalFileImg(image)
      })
      .catch(error => {
        console.log('error', error)
      })

  }

  const onSubmit = () => navigation.navigate(SCREENS.AUTH_PREPARING)

  return (
    <Fragment>
      <CustomHeader navigation={navigation} onRightCloseButton={onSubmit} />

      <View style={styles.block}>
        <Text style={styles.welcome}>Немного о себе</Text>
        <Title
          text={'Загрузите фото, чтобы мы \nзнали как вы выглядите'}
          textStyle={[styles.title, { fontSize: 26 }]}
        />

        <View style={styles.placeHolderContainer}>
          <TouchableOpacity onPress={onChoisePhoto} style={styles.placeHolderBtn}>
            {!!localFileImg?.path ? (
              <View style={styles.imgContainerA}>
                <View style={styles.imgContainerB}>
                  <Image style={styles.img} source={{uri: localFileImg?.path}} />
                </View>
              </View>
            ) : (
              <Svg source={IconsSVG.photoPlaceholder} />
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.submitContainer}>
          <PrimaryButton
            keyboardSensetive
            disabled={!localFileImg}
            onPress={onSubmit}
            styleBlock={{ bottom: Spacing.TINY }}
            title={'Продолжить'}
          />
        </View>
      </View>
    </Fragment>
  )
}
