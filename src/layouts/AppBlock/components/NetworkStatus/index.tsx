/*
 * @author GennadySX
 * @created at 2022
 **/

import React, { Fragment, useCallback, useEffect, useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { BlurView } from '@react-native-community/blur'
import { HEIGHT, WIDTH } from '@utils/normalizer'
import { _styles } from '@components/Modal/styles'
import { Title } from '@ui/Title'

import NetInfo from '@react-native-community/netinfo'
import { Colors, Spacing } from '@styles/index'
import { typography } from '@styles/typography'

export const NetworkStatus = () => {
  const [modalVisible, setModalVisibility] = useState<boolean>(false)

  const handleNetworkStatus = useCallback(() => {
    NetInfo.addEventListener(state => {
      if (!state.isConnected) {
        setModalVisibility(true)
      }
    })
  }, [])

  const onClose = () => setModalVisibility(false)

  useEffect(() => {
    handleNetworkStatus()

    return () => handleNetworkStatus()
  }, [handleNetworkStatus])

  if (!modalVisible) return <Fragment />

  return (
    <View
      style={{
        position: 'absolute',
        zIndex: 999,
        flex: 1,
        width: WIDTH,
        height: HEIGHT + 100,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: Spacing.MEDIUM,
      }}>
      <BlurView
        style={{
          position: 'absolute',
          opacity: 1,
          flex: 1,
          width: WIDTH,
          height: HEIGHT + 100,
          backgroundColor: _styles.backdrop.backgroundColor,
        }}
        blurType="light"
        blurAmount={1}
        blurRadius={3}
      />

      <View
        style={{
          backgroundColor: Colors.WHITE,
          width: '100%',
          borderRadius: Spacing.SMALL,
          alignItems: 'center',
          justifyContent: 'center',
          padding: Spacing.MEDIUM,
          paddingTop: Spacing.LARGE,
        }}>
        <Title
          text={'Отсутствует подключение \nк интернету '}
          textStyle={{
            fontSize: 26,
            lineHeight: 31.02,
            textAlign: 'center',
            marginBottom: Spacing.MEDIUM_PLUS,
          }}
        />

        <Text
          style={{
            ...typography.medium_thin,
            fontSize: 22,
            color: Colors.BLACK_50,
            lineHeight: 25.89,
            textAlign: 'center',
          }}>
          {'Пожалуйста, подключитесь \nк интернету и попробуйте \nснова '}
        </Text>

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={onClose}
          style={{
            padding: Spacing.MEDIUM,
            marginTop: Spacing.MEDIUM,
            paddingHorizontal: Spacing.MEDIUM_PLUS,
          }}>
          <Text
            style={{
              ...typography.medium_thin,
              fontSize: 18,
              color: 'rgba(47, 128, 237, 1)',
              lineHeight: 21.89,
              textAlign: 'center',
            }}>
            Ok
          </Text>
        </TouchableOpacity>
      </View>

      <View />
    </View>
  )
}
