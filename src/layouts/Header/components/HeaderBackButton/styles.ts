import { StyleSheet } from 'react-native'
import { Colors, Spacing } from '../../../../styles'

export const styles = StyleSheet.create({
  button: {
    width: Spacing.MEDIUM_PLUS,
    height: Spacing.MEDIUM_PLUS,
    marginRight: Spacing.MEDIUM,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: Spacing.TINY,
    height: Spacing.MEDIUM,
  },
  colorIcon: {
    color: Colors.PRIMARY,
  },
})
