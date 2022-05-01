/*
 * @author GennadySX
 * @created at 2022
 **/
import { StyleSheet } from 'react-native'
import { styles as s } from '@screens/Workout/styles'
import { typography } from '@styles/typography'
import { Colors, Spacing } from '@styles/index'
import { WIDTH } from '@utils/normalizer'
import { shadows } from '@styles/shadows'

export const styles = StyleSheet.create({
  ...s,
  blockPreparing: {
    paddingTop: Spacing.GIANT + 50,
  },
  titlePreparing: {
    ...typography.bold,
    fontWeight: '900',
    fontSize: 26,
    lineHeight: 32.45,
    textAlign: 'center',
    color: Colors.BLACK,
    ...shadows.textShadow,
  },
  desc: {
    ...typography.small,
    fontSize: 18,
    lineHeight: 21.47,
    color: Colors.LIGHT_GRAY,
    textAlign: 'center',
  },
  circleBlock: {
    ...s.circleBlock,
    marginBottom: Spacing.GIANT + 30,
  },
  circleContainer: {
    ...s.circle,
    ...s.circleSecondary,
    width: WIDTH * 0.7,
    height: WIDTH * 0.7,
  },
})
