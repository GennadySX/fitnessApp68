/*
 * @author GennadySX
 * @created at 2022
 **/
import { StyleSheet } from 'react-native'
import { hasNotch } from '@utils/normalizer'
import { Colors } from '@styles/index'
import { shadows } from '@styles/shadows'
import { typography } from '@styles/typography'
import { isAndroid } from '@utils/platform'

export const styles = StyleSheet.create({
  tabBarStyle: {
    height: hasNotch ? 86 : 56,
    backgroundColor: isAndroid ? 'rgba(254,255,255,0.95)' : Colors.TRANSPARENT,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: -90,
    ...shadows.normal,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    borderTopWidth: 0,
  },
  tabStyle: {
    paddingVertical: 8,
  },
  labelStyle: {
    marginTop: 0,
    ...typography.medium,
    fontSize: 10,
    lineHeight: 12,
    top: 5,
  },
})
