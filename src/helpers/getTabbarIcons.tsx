/*
 * @author GennadySX
 * @created at 2022
 **/
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs'
import React, { FC } from 'react'
import { SvgProps as SvgPropsType } from 'react-native-svg'
import { Svg } from '@components/Svg'
import { Colors } from '@styles/index'

export const getTabBarIcon: (
  source: FC<SvgPropsType>,
) => BottomTabNavigationOptions['tabBarIcon'] =
  source =>
  ({ focused }) =>
    <Svg source={source} style={{ color: focused ? Colors.PRIMARY : Colors.GRAY } as any} />
