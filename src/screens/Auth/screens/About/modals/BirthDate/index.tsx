/*
 * @author GennadySX
 * @created at 2022
 **/

import React from 'react'
import { Text, View } from 'react-native'
import { styles } from './styles'
import { ModalBottom, ModalBottomProps } from '@components/Modal'
import DatePicker from 'react-native-date-picker'
import { PrimaryButton } from '@ui/PrimaryButton'
import { WIDTH } from '@utils/normalizer'
import { Colors, Spacing } from '@styles/index'

type BirthDateModalProps = {
  date: any
  setDate: any
  onClose: () => void
} & ModalBottomProps

export const BirthDateModal = ({ date, setDate, onClose, ...props }: BirthDateModalProps) => {
  return (
    <ModalBottom modalStyle={{ paddingTop: 0 }} hasTopLine onClose={onClose} {...props}>
      <View style={styles.block}>
        <View style={styles.header}>
          <Text style={styles.title}>Дата рождения</Text>
          <Text style={styles.desc}>Укажите Ваш возраст, мы подберём упражнения </Text>
        </View>
        <DatePicker
          mode="date"
          date={date}
          style={{ width: WIDTH - Spacing.MEDIUM * 2 }}
          textColor={Colors.DARK}
          onDateChange={setDate}
          maximumDate={new Date(2010, 0, 1)}
          minimumDate={new Date(1960, 1, 1)}
        />
        <View style={[styles.submitContainer, { right: 15 }]}>
          <PrimaryButton
            title={'Готово'}
            onPress={onClose}
            style={{ bottom: Spacing.SMALL }}
            styleBlock={{ height: 70 }}
            textStyle={{ paddingTop: 12 }}
          />
        </View>
      </View>
    </ModalBottom>
  )
}
