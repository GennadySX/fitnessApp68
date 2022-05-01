/*
 * @author GennadySX
 * @created at 2022
 **/

import React from 'react'
import { Text, View } from 'react-native'
import { ModalBottom, ModalBottomProps } from '@components/Modal'
import { Goals } from '@screens/Auth/screens/About'
import { PrimaryButton } from '@ui/PrimaryButton'
import { WIDTH } from '@utils/normalizer'
import { styles } from '@screens/Auth/screens/About/modals/BirthDate/styles'
import { Spacing } from "@styles/index";

type GoalModalProps = {
  goal: any
  setGoal: (goal: Goals) => void
  onClose: () => void
} & ModalBottomProps

const goals = ['Похудение', 'Поддержание веса ', 'Набор веса']

export const GoalModal = ({ goal, setGoal, onClose, ...props }: GoalModalProps) => {
  return (
    <ModalBottom modalStyle={{ paddingTop: 0 }} hasTopLine onClose={onClose} {...props}>
      <View style={styles.header}>
        <Text style={styles.title}>Цель</Text>
        <Text style={styles.desc}>Выберете цель, которую хотите достигнуть</Text>
      </View>
      <View>
        {goals.map((v: any, index) => (
          <View key={index} style={{ opacity: v === goal ? 1 : 0.4 }}>
            <PrimaryButton
              key={index}
              style={[{ width: WIDTH - 40, marginBottom: 20 }]}
              onPress={() => setGoal(v)}
              activeOpacity={0.8}
              title={v}
              unShadow
            />
          </View>
        ))}
      </View>
      <View style={styles.submitContainer}>
        <PrimaryButton
          title={'Готово'}
          onPress={onClose}
          style={{ bottom: Spacing.SMALL }}
          styleBlock={{ height: 70 }}
          textStyle={{ paddingTop: 12 }}
        />
      </View>
      <View />
    </ModalBottom>
  )
}
