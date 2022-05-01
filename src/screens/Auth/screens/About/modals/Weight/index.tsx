/*
 * @author GennadySX
 * @created at 2022
 **/

import React, { useState, Fragment } from 'react'
import { Text, View } from 'react-native'
import { styles } from './styles'
import { ModalBottom, ModalBottomProps } from '@components/Modal'
import { Spacing } from '@styles/index'
import { SpinnerHorizontal } from '@screens/Auth/components/SpinnerHorizontal'
import { PrimaryButton } from '@ui/PrimaryButton'
import { WeightMock } from '@screens/Auth/screens/About/modals/Weight/mock'
import { MMKVStorageEnums } from '@utils/MMKVStorage'
import { isAndroid } from '@utils/platform'
import { NativeScreen } from 'react-native-screens'

type WeightModalProps = {
  weight: number
  setWeight: (weight: number) => void
  onClose: () => void
} & ModalBottomProps
export const WeightModal = ({ weight, setWeight, onClose, ...props }: WeightModalProps) => {
  const [v, setV] = useState<number>(weight)

  const onSubmit = () => {
    onClose()
    setWeight(v)
  }

  return (
    <ModalBottom
      modalStyle={{ paddingTop: 0, paddingLeft: 0 }}
      hasTopLine
      propagateSwipe
      onClose={onClose}
      {...props}>
      <View style={{ height: 450 }}>
        <View style={[styles.header, { paddingHorizontal: Spacing.MEDIUM }]}>
          <Text style={styles.title}>Текущий вес</Text>
          <Text style={styles.desc}>Укажите ваш текущий вес</Text>
        </View>
        {isAndroid ? (
          <SpinnerHorizontal
            valKey={MMKVStorageEnums.weightModal}
            value={v}
            onChange={setV}
            data={WeightMock}
          />
        ) : (
          <View>
            <NativeScreen>
              <SpinnerHorizontal
                valKey={MMKVStorageEnums.weightModal}
                value={v}
                onChange={setV}
                data={WeightMock}
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
      </View>
    </ModalBottom>
  )
}
