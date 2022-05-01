import { StyleSheet } from 'react-native'
import { Colors, Spacing } from '@styles/index'
import { typography } from '@styles/typography'

export const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.WHITE,
  },
  button: {
    marginLeft: 'auto',
  },
  contentContainer: {
    minHeight: 56,
    paddingHorizontal: Spacing.MEDIUM,
    paddingVertical: Spacing.TINY ,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchWrap: {
    flex: 1,
  },
  title: {
    ...typography.medium,
    fontWeight: 'bold',
  },
  rightBtn: {
    position: 'absolute',
    right: Spacing.MEDIUM,
  },
  rightText: {
    ...typography.regular,
    color: Colors.GRAY,
  },
  rightCloseBtn: {
    position: 'absolute',
    right: Spacing.MEDIUM_PLUS,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusIcon: {
    width: 20,
    height: 20,
    color: '#CCCCCC',
  },
})
