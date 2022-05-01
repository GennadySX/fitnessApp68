/*
 * @author GennadySX
 * @created at 2022
 **/

import React, { useMemo } from 'react'
import Modal, { ModalProps } from 'react-native-modal'
import {
  Animated,
  Pressable,
  StyleProp,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { BlurView } from '@react-native-community/blur'
import { HEIGHT, WIDTH } from '@utils/normalizer'
import { _styles } from '@components/Modal/styles'
import HIT_SLOPS from '@constants/hitSlops'
import { Svg } from '@components/Svg'
import { IconsSVG } from '@constants/Icons/IconsSvg'

export type ModalBottomProps = {
  onClose?: () => void
  modalStyle?: StyleProp<ViewStyle>
  hasTopLine?: boolean
  title?: string
  hideHeader?: boolean
  hasTopCloseButton?: boolean
} & Partial<ModalProps>

export const ModalBottom = ({
  onClose,
  modalStyle,
  title,
  hasTopCloseButton,
  hasTopLine,
  children,
  hideHeader,
  ...props
}: ModalBottomProps) => {
  const { top } = useSafeAreaInsets()

  const _modalStyle = useMemo<StyleProp<ViewStyle>>(
    () => [_styles.modal, modalStyle, { marginTop: top }],
    [modalStyle, top],
  )

  return (
    <Modal
      statusBarTranslucent
      backdropColor={_styles.backdrop.backgroundColor}
      backdropOpacity={_styles.backdrop.opacity}
      avoidKeyboard
      onBackButtonPress={onClose}
      onBackdropPress={onClose}
      onSwipeComplete={onClose}
      swipeDirection="down"
      propagateSwipe
      customBackdrop={
        <Pressable style={{ flex: 1 }} onPress={onClose}>
          {hasTopCloseButton && (
            <TouchableOpacity
              onPress={onClose}
              style={{ position: 'absolute', top: HEIGHT/11, alignSelf: 'center', zIndex: 999 }}>
              <Svg source={IconsSVG.closeGray} />
            </TouchableOpacity>
          )}
          <BlurView
            style={{
              opacity: props.isVisible ? 1 : 0,
              flex: 1,
              width: WIDTH,
              height: HEIGHT,
              backgroundColor: _styles.backdrop.backgroundColor,
            }}
            blurType="light"
            blurAmount={1}
            blurRadius={3}
          />
        </Pressable>
      }
      useNativeDriverForBackdrop
      {...props}
      style={[_styles.container, props.style]}>
      <Animated.View style={_modalStyle}>
        {!hideHeader && (
          <View style={_styles.header}>
            {!!title && <Text style={_styles.title}>{title}</Text>}
          </View>
        )}
        {hasTopLine && <View hitSlop={HIT_SLOPS.hitSlop_8} style={_styles.topLine} />}
        {children}
      </Animated.View>
    </Modal>
  )
}
