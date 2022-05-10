/*
 * @author GennadySX
 * @created at 2022
 **/

import React, { useState, Fragment, memo } from 'react'
import { Text, View } from 'react-native'
import { styles } from './styles'
import { ModalBottom, ModalBottomProps } from '@components/Modal'
import { GrowthMock } from '@screens/Auth/screens/About/modals/Growth/mock'
import { Spacing } from '@styles/index'
import { PrimaryButton } from '@ui/PrimaryButton'
import { MMKVStorageEnums } from '@utils/MMKVStorage'
import { SpinnerHorizontal } from '@screens/Auth/components/SpinnerHorizontal'
import { isAndroid } from '@utils/platform'
import { NativeScreen } from 'react-native-screens'

type GrowthModalProps = {
  growth: number
  setGrowth: (growth: number) => void
  onClose: () => void
} & ModalBottomProps

export const GrowthModal = ({ growth, setGrowth, onClose, ...props }: GrowthModalProps) => {

  const [v, setV] = useState<number>(Number(GrowthMock[50]))

  const onSubmit = () => {
    onClose()
    setGrowth(v)
  }
  return (
    <ModalBottom
      modalStyle={{ paddingTop: 0, paddingLeft: 0 }}
      hasTopLine
      coverScreen
      propagateSwipe
      onClose={onClose}
      {...props}>
      <Fragment>
        <View style={[styles.header, { paddingHorizontal: Spacing.MEDIUM }]}>
          <Text style={styles.title}>Рост</Text>
          <Text style={styles.desc}>Укажите Ваш рост</Text>
        </View>
        {isAndroid ? (
          <SpinnerHorizontal
            valKey={MMKVStorageEnums.growthModal}
            value={growth}
            onChange={setV}
            initialIndex={50}
            data={GrowthMock}
          />
        ) : (
          <View style={{ paddingTop: 0 }}>
            <NativeScreen enabled={!isAndroid}>
              <SpinnerHorizontal
                valKey={MMKVStorageEnums.growthModal}
                value={growth}
                onChange={setV}
                initialIndex={50}
                data={GrowthMock}
              />
            </NativeScreen>
          </View>
        )}
        <View style={[styles.submitContainer, { right: 5 }]}>
          <PrimaryButton
            title={'Готово'}
            onPress={onSubmit}
            style={{ bottom: Spacing.SMALL }}
            styleBlock={{ height: 70 }}
            textStyle={{ paddingTop: 12 }}
          />
        </View>
      </Fragment>
    </ModalBottom>
  )
}
