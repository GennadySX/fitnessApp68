/*
 * @author GennadySX
 * @created at 2022
 **/


import { StyleSheet } from "react-native";
import { WIDTH } from "@utils/normalizer";
import { typography } from "@styles/typography";
import { Colors, Spacing } from "@styles/index";

export const styles = StyleSheet.create({
  block: {},
  item: {
    height: 150,
    width: (WIDTH / 5) - 5 ,
    alignItems: 'center',
    justifyContent: 'center',
  },
  countValue: {
    ...typography.bold,
    marginBottom: Spacing.MEDIUM,
    color: Colors.GRAY,
  },
  valueIcon: {},
})
