import { StyleSheet } from 'react-native'
import { Colors, Spacing } from '../../styles'
import { BLACK_80 } from '@styles/colors'
import { MEDIUM } from '@styles/spacing'
import { typography } from '@styles/typography'

export const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.WHITE,
  },
  contentContainer: {
    minHeight: 56,
    paddingHorizontal: Spacing.MEDIUM,
    paddingVertical: Spacing.TINY,
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
  },
  title: {
    ...typography.medium,
    fontWeight: 'bold',
  },
  crossIcon: { color: BLACK_80, width: 24, height: 24 },
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  headerRightIcon: { marginLeft: MEDIUM },
  headerRightIconConfirm: {
    marginLeft: MEDIUM,
    color: Colors.PRIMARY,
  },
})
