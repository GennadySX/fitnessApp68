/*
 * @author GennadySX
 * @created at 2022
 **/
import React from 'react'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import { Svg } from '@components/Svg'
import { IconsSVG } from '@constants/Icons/IconsSvg'
import { styles } from '@screens/Auth/components/VirtualKeyboard/style'
import HitSlops from '@constants/hitSlops'
import { HapticFeedbacks, HapticVibration } from '@utils/vibration'
import { Spacing } from "@styles/index";

enum ValueType {
  number,
  clear,
  submit,
}

type ValueProps = { value: string; type: ValueType }

type VirtualKeyboardProps = {
  onPress: (val: string) => void
  onClear?: () => void
  onSubmit?: () => void
  submitAble?: boolean
}

export const VirtualKeyboard = ({
  onClear,
  onSubmit,
  submitAble,
  onPress: onPressButton,
}: VirtualKeyboardProps) => {
  const onPress = (val: ValueProps) => {
    if (val.type === ValueType.number) {
      HapticVibration(HapticFeedbacks.keyboardPress)
      onPressButton && onPressButton(val.value)
    } else if (val.type === ValueType.submit) {
      HapticVibration(HapticFeedbacks.longPress)
      onSubmit && onSubmit()
    } else {
      HapticVibration(HapticFeedbacks.impactHeavy)
      onClear && onClear()
    }
  }

  return (
    <FlatList
      keyExtractor={(item, index) => String(index)}
      data={values}
      style={styles.block}
      bounces={false}
      scrollEnabled={false}
      contentContainerStyle={styles.containerStyle}
      renderItem={({ item, index }) =>
        item.type === ValueType.submit && !submitAble ? (
          <View />
        ) : (
          <TouchableOpacity
            hitSlop={HitSlops.hitSlop_16}
            style={[styles.btn, item.type === ValueType.submit && { paddingTop: 10 }, {marginBottom: Spacing.TINY}]}
            key={index}
            onPress={() => onPress(item)}>
            {item.type !== ValueType.number ? (
              <Svg source={item.type === ValueType.clear ? IconsSVG.clearVK : IconsSVG.submitVK} />
            ) : (
              <Text style={styles.value}>{item.value}</Text>
            )}
          </TouchableOpacity>
        )
      }
      numColumns={3}
    />
  )
}

const values: ValueProps[] = [
  {
    value: '1',
    type: ValueType.number,
  },
  {
    value: '2',
    type: ValueType.number,
  },
  {
    value: '3',
    type: ValueType.number,
  },
  {
    value: '4',
    type: ValueType.number,
  },
  {
    value: '5',
    type: ValueType.number,
  },
  {
    value: '6',
    type: ValueType.number,
  },
  {
    value: '7',
    type: ValueType.number,
  },
  {
    value: '8',
    type: ValueType.number,
  },
  {
    value: '9',
    type: ValueType.number,
  },
  {
    value: 'clear',
    type: ValueType.clear,
  },
  {
    value: '0',
    type: ValueType.number,
  },
  {
    value: 'submit',
    type: ValueType.submit,
  },
]
