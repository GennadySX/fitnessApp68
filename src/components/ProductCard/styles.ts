/*
 * @author GennadySX
 * @created at 2022
 **/


import {StyleSheet} from "react-native";
import {WIDTH} from "@utils/normalizer";
import {Colors, Spacing} from "@styles/index";
import {typography} from "@styles/typography";

export const styles = StyleSheet.create({
    mdItem: {
        width: WIDTH / 3 - 12,
        paddingHorizontal: 5,
        marginBottom: Spacing.SMALL,
    },
    mdItemImg: {
        width: '100%',
        height: 90,
        resizeMode: 'contain',
    },
    mdItemName: {
        ...typography.medium,
        paddingBottom: Spacing.TINY,
    },
    mdItemContains: {
        ...typography.small,
        color: Colors.GRAY,
    },
})
