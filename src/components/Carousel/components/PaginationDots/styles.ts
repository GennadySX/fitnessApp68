/*
 * @author GennadySX
 * @created at 2022
 **/

import { StyleSheet } from 'react-native'
import { PAGINATION_DOT_SIZE, PAGINATION_DOT_SIZE_ACTIVE } from '@components/Carousel/styles'

export const styles = StyleSheet.create({
  block: {},
  container: {
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dot: {
    width: PAGINATION_DOT_SIZE_ACTIVE,
    height: PAGINATION_DOT_SIZE+1,
    marginHorizontal: 4,
    borderRadius: 4,
  },
})
