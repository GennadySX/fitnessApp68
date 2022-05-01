/*
 * @author GennadySX
 * @created at 2022
 **/

import { Tab } from '@layouts/HomeTabs'
import { SCREENS } from '@routes/navigations.types'
import { MainScreen } from '@screens/Main'
import { IconsSVG } from '@constants/Icons/IconsSvg'
import { getTabBarIcon } from '@helpers/getTabbarIcons'
import { SvgProps } from 'react-native-svg'
import { FC } from 'react'
import { MarathonScreen } from '@screens/Marathon'
import { WorkoutScreen } from '@screens/Workout'
import { FeedScreen } from '@screens/Feed'
export type TabScreenProps = Parameters<typeof Tab['Screen']>[number]

export const TabsScreens: TabScreenProps[] = [
  {
    name: SCREENS.MAIN,
    component: MainScreen,
    options: {
      headerShown: false,
      tabBarIcon: getTabBarIcon(IconsSVG.tabA as FC<SvgProps>),
    },
  },
  {
    name: SCREENS.MARATHON,
    component: MarathonScreen,
    options: {
      headerShown: false,
      tabBarIcon: getTabBarIcon(IconsSVG.tabB as FC<SvgProps>),
    },
  },
  {
    name: SCREENS.WORKOUT,
    component: WorkoutScreen,
    options: {
      headerShown: false,
      tabBarIcon: getTabBarIcon(IconsSVG.tabC as FC<SvgProps>),
    },
  },
  {
    name: SCREENS.FEED,
    component: FeedScreen,
    options: {
      headerShown: false,
      tabBarIcon: getTabBarIcon(IconsSVG.tabD as FC<SvgProps>),
    },
  },
]
