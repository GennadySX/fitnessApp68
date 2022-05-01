import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Svg } from '@components/Svg'
import { IconsSVG } from '@constants/Icons/IconsSvg'
import { styles } from './styles'
import { hitSlop10 } from '@styles/spacing'

export type HeaderBackButtonProps = {
  onPress: () => void
}

const HeaderBackButton = ({ onPress }: HeaderBackButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={styles.button}
      hitSlop={hitSlop10}
      onPress={onPress}>
      <Svg source={IconsSVG.back} style={styles.icon} stroke={styles.colorIcon.color} />
    </TouchableOpacity>
  )
}
export default React.memo(HeaderBackButton)
