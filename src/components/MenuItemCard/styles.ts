/*
 * @author GennadySX
 * @created at 2022
 **/

import { StyleSheet } from 'react-native'
import { Colors, Spacing } from '@styles/index'
import { typography } from '@styles/typography'
import { shadows } from '@styles/shadows'
import { isAndroid } from '@utils/platform'
import { HEIGHT, WIDTH } from '@utils/normalizer'

export const _style = StyleSheet.create({
  block: {
    width: '100%',
    backgroundColor: Colors.WHITE,
    marginBottom: Spacing.LARGE,
    ...shadows.normal,
    flexDirection: 'row',
    borderRadius: 25,
    paddingVertical: Spacing.MEDIUM,
    paddingHorizontal: Spacing.MEDIUM,
    paddingRight: Spacing.TINY,
    alignItems: 'center',
    elevation: 10,
  },
  iosShadow: {
    shadowOffset: {
      width: 0,
      height: Spacing.SMALL,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },

  infoContainer: {
    width: (WIDTH - Spacing.MEDIUM * 2) * 0.58,
    paddingBottom: Spacing.SMALL,
  },
  timeBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: Spacing.TINY,
  },
  hour: {
    ...typography.large,
    fontFamily: isAndroid ? 'Gilroy-Black' : 'Gilroy-Bold',
    fontSize: 24,
    lineHeight: 29.95,
    letterSpacing: -0.3,
  },
  dayTime: {
    ...typography.large,
    fontWeight: '700',
  },
  desc: {
    ...typography.medium,
    fontWeight: '600',
    color: Colors.GRAY,
    fontSize: 18,
    letterSpacing: -0.3,
    lineHeight: 21.47,
    paddingBottom: Spacing.SMALL,
  },
  containInfo: {
    ...typography.medium,
    color: Colors.GRAY,
    fontSize: 16,
    lineHeight: 19.09,
    letterSpacing: -0.3,
  },
  contains: {
    color: Colors.LIGHT_GRAY,
  },
  img: {
    width: 126,
    flexGrow: 1,
    height: 126,
    borderRadius: 20,
    resizeMode: 'cover',
    right: Spacing.EXTRA_TINY - 2,
  },
})
