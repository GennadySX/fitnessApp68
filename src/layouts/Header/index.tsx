/*
 * @author GennadySX
 * @created at 2022
 **/

import React, { Fragment, useLayoutEffect, useMemo } from 'react'
import { NativeStackHeaderProps } from '@react-navigation/native-stack'
import { TouchableOpacity, View, Text } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import HeaderBackButton from './components/HeaderBackButton/HeaderBackButton'
import { HeaderBackButtonProps } from '@react-navigation/native-stack/lib/typescript/src/types'
import { styles } from './styles'
import HeaderTitle from './components/HeaderTitle/HeaderTitle'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { StackParamList } from '@routes/stackParams'
import { Svg } from '@components/Svg'
import { IconsSVG } from '@constants/Icons/IconsSvg'
import { hitSlop30 } from '@styles/spacing'
import { PRIMARY } from '@styles/colors'

const Header = ({ navigation, route, options, back }: NativeStackHeaderProps) => {
  const { top, left, right } = useSafeAreaInsets()
  const headerStyle = useMemo(
    () => [
      styles.header,
      {
        paddingTop: top,
        paddingLeft: left,
        paddingRight: right,
      },
    ],
    [left, right, top],
  )

  const CustomBackButton = options.headerLeft as
    | ((props: HeaderBackButtonProps) => JSX.Element)
    | undefined

  const BackButton = CustomBackButton ? (
    <CustomBackButton canGoBack={!!back} />
  ) : (
    <HeaderBackButton onPress={navigation.goBack} />
  )

  const HeaderRight = options.headerRight as (() => JSX.Element) | undefined

  return (
    <View style={headerStyle}>
      <View style={styles.contentContainer}>
        {back && BackButton}

        <HeaderTitle route={route} options={options} />

        {HeaderRight && <HeaderRight />}
      </View>
    </View>
  )
}

export default Header

export const CloseHeader = ({
  onPress,
  title,
  icon,
}: {
  onPress: () => void
  title?: string
  icon?: any
}) => {
  const navigation = useNavigation<StackNavigationProp<StackParamList>>()
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => null,
      headerTitle: '',
      headerRight: () => (
        <View style={[styles.container, { justifyContent: title ? 'space-between' : 'flex-end' }]}>
          {!!title && <Text style={styles.title}>{title}</Text>}
          <TouchableOpacity activeOpacity={0.6} onPress={onPress} hitSlop={hitSlop30}>
            <Svg
              source={icon ? icon : IconsSVG.closeGray}
              style={styles.crossIcon}
              stroke={PRIMARY}
            />
          </TouchableOpacity>
        </View>
      ),
    })
  }, [navigation, onPress, title, icon])
  return <Fragment />
}

type BackConfirmHeaderProps = {
  onConfirm: () => void
  disabled?: boolean
}

export const BackConfirmHeader = ({ onConfirm, disabled }: BackConfirmHeaderProps) => {
  const navigation = useNavigation()
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: '',
      headerRight: () => (
        <View style={styles.headerContainer}>
          <TouchableOpacity activeOpacity={0.6} onPress={onConfirm} disabled={disabled}>
            <Text>Пропустить</Text>
          </TouchableOpacity>
        </View>
      ),
    })
  }, [navigation, onConfirm, disabled])
  return <Fragment />
}
