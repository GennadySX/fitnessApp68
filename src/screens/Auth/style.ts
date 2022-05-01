/*
 * @author GennadySX
 * @created at 2022
 **/
import { StyleSheet } from 'react-native'
import { HEIGHT, WIDTH } from '@utils/normalizer'
import { Spacing } from '@styles/index'

export const styles = StyleSheet.create({
  block: {
    flex: 1,
    paddingHorizontal: Spacing.MEDIUM,
  },
  bg: {
    resizeMode: 'cover',
    width: WIDTH,
    height: HEIGHT + 90,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    bottom: Spacing.MEDIUM,
  },
  btnContainer: {
    marginBottom: Spacing.MEDIUM_PLUS,
    marginTop: 20,
  },
})
