/*
 * @author GennadySX
 * @created at 2022
 **/

import { StyleSheet } from 'react-native'
import { Spacing } from '@styles/index'
import { typography } from '@styles/typography'
import { HEIGHT, WIDTH } from '@utils/normalizer'

export const _styles = StyleSheet.create({
  backdrop: {
    backgroundColor: 'rgba(24,50,86,0.7)',
    opacity: 1,
  },
  container: {
    margin: 0,
    justifyContent: 'flex-end',
  },
  modal: {
    paddingTop: Spacing.MEDIUM,
    paddingBottom: Spacing.LARGE,
    paddingHorizontal: Spacing.MEDIUM,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: 'hidden',
  },
  close: {
    width: 16,
    height: 16,
    marginRight: Spacing.TINY,
    marginLeft: 'auto',
  },
  topLine: {
    width: 30,
    height: 2,
    backgroundColor: '#cccccc',
    alignSelf: 'center',
    position: 'absolute',
    top: 12,
  },
  header: {
    marginTop: Spacing.MEDIUM,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Spacing.MEDIUM_PLUS,
  },
  title: {
    ...typography.large,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})
