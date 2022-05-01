/*
 * @author GennadySX
 * @created at 2022
 **/
import { StyleSheet } from 'react-native'
import { styles as s } from '@screens/Auth/screens/Name/style'
import { Colors, Spacing } from '@styles/index'
import { WIDTH } from '@utils/normalizer'
import { LIGHT_ORANGE, PRIMARY_LIGHT } from '@styles/colors'

export const styles = StyleSheet.create({
  ...s,
  placeHolderContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeHolderBtn: {
    alignItems: 'center',
    bottom: Spacing.EXTRA_GIANT,
  },
  imgContainerA: {
    width: WIDTH * 0.8,
    height: WIDTH * 0.8,
    borderRadius: WIDTH * 0.8,
    borderWidth: 4,
    borderColor: Colors.LIGHT_ORANGE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgContainerB: {
    width: WIDTH * 0.72,
    height: WIDTH * 0.72,
    borderRadius: WIDTH * 0.7,
    borderWidth: 4,
    borderColor: Colors.PRIMARY_LIGHT,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: WIDTH * 0.65,
    height: WIDTH * 0.65,
    borderRadius: WIDTH * 0.6,
    resizeMode: 'cover',
  },
})
