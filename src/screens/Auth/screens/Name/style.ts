/*
 * @author GennadySX
 * @created at 2022
 **/
import { StyleSheet } from 'react-native'
import { styles as s } from '@screens/Auth/screens/Email/style'
import { typography } from '@styles/typography'
import { Colors } from '@styles/index'

export const styles = StyleSheet.create({
  ...s,
  input: {
    ...typography.bold,
    fontSize: 24,
    lineHeight: 28.63,
    letterSpacing: -0.3,
  },
  linkBtn: {
    top: 150,
  },
  linkText: {
    ...typography.regular,
    fontSize: 18,
    lineHeight: 20.88,
    letterSpacing: -0.3,
    textAlign: 'center',
    color: Colors.BLUE,
  },
  switchText: {
    ...typography.bold,
    fontSize: 18,
    lineHeight: 21.76,
    letterSpacing: -0.3,
    color: Colors.WHITE,
  },
  switchTextUnActive: {
    ...typography.regular,
    fontSize: 18,
    lineHeight: 21.19,
    letterSpacing: -0.3,
    color: Colors.DARK,
  },
  submitContainer: {
    width: '100%',
    position: 'absolute',
    alignSelf: 'center',
    bottom: 50,
  },
})
