/*
 * @author GennadySX
 * @created at 2022
 **/
import { StyleSheet } from 'react-native'
import { HEIGHT, WIDTH } from '@utils/normalizer'
import { Colors, Spacing } from '@styles/index'
import { typography } from '@styles/typography'

export const style = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    backgroundColor: '#000000',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 5,
  },
  controlsBlock: {
    elevation: 99,
    zIndex: 10,
    width: WIDTH,
    height: HEIGHT,
    top: 10,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  controlsBlockForTikTok: {
    width: WIDTH,
    height: HEIGHT,
  },
  controlOverlay: {
    top: 0,
    bottom: 0,
    left: 0,
    backgroundColor: '#111',
    opacity: 0.8,
    justifyContent: 'space-between',
    width: HEIGHT * 1.09,
    height: WIDTH,
  },
  controlOverlayForTikTok: {
    width: WIDTH * 1.09,
    height: HEIGHT,
  },
  fullScreenBtn: {
    alignSelf: 'flex-start',
    left: 20,
    top: 10,
    width: 60,
    height: 60,
  },
  fullScreenIcon: {
    alignSelf: 'center',
    width: 27,
    height: 27,
  },
  seekTime: {
    ...typography.bold,
    fontWeight: '700',
    color: Colors.WHITE,
    fontSize: 36,
    lineHeight: 43.52,
    textAlign: 'right',
    position: 'absolute',
    top: Spacing.LARGE,
    right: Spacing.EXTRA_GIANT + 20,
  },
})
