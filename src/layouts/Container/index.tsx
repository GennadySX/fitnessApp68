/*
 * @author GennadySX
 * @created at 2022
 **/

import React, { ReactChild, ReactChildren, ReactNode } from 'react'
import {StyleProp, View, ViewStyle} from 'react-native'
import { Spacing } from '@styles/index'

type ContainerProps = {
  children: ReactNode | ReactChildren | ReactChild
    style?: StyleProp<ViewStyle>
    unPaddingVertical?: boolean
    unPaddingBottom?: boolean
}
export const Container = ({ children, style, unPaddingVertical, unPaddingBottom }: ContainerProps) => {


    return (
        <View style={[{paddingHorizontal: Spacing.MEDIUM, paddingVertical: unPaddingVertical ? 0 : Spacing.MEDIUM}, unPaddingBottom && {paddingBottom: 0}, style ]}>
            {children}
        </View>
    )
}
