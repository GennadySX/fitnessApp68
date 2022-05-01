/*
 * @author GennadySX
 * @created at 2022
 **/

import { StyleSheet } from 'react-native'
import { Colors, Spacing } from '@styles/index'
import { typography } from '@styles/typography'
import { isAndroid } from "@utils/platform";

export const styles = StyleSheet.create({
  block: {
    width: '100%',
    borderRadius: 25,
    height: 240,
    backgroundColor: Colors.LIGHT_BLUE,
    padding: Spacing.MEDIUM,
    marginBottom: Spacing.MEDIUM * 2,
  },
  title: {
    ...typography.small,
    fontWeight: '600',
    textAlign: 'center',
    fontSize: 20,
    lineHeight: 23.86,
    letterSpacing: -0.3,
    marginBottom: 30,
  },
  desc: {
    ...typography.bold,
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 19,
    letterSpacing: -0.3,
    color: Colors.BLACK_20,
  },
  descGray: {
    color: Colors.GRAY,
  },

  minPinch: {
    width: 55,
    marginVertical: Spacing.TINY,
  },
  minText: {
    position: 'absolute',
    zIndex: 2,
    ...typography.bold,
    fontSize: Spacing.SMALL,
    color: Colors.WHITE,
    lineHeight: 14.32,
    top: 7,
    left: 5,
  },
  maxPinch: {
    width: 55,
    right: 10,
    zIndex: 999,
  },
  maxText: {
    left: 28,
  },
  maxIcon: {
    transform: [{ rotate: '180deg' }],
  },
  trackButton: {
    height: 105,
  },
  slideBlock: {
    marginVertical: Spacing.MEDIUM_PLUS,
    flexDirection: 'row',
    width: '98%',
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  slider: {
    position: 'absolute',
    zIndex: 99,
    height: 105,
    width: '80%',
    left: 30,
  },
  sliderTrack: {
    backgroundColor: Colors.PRIMARY,
  },
})
