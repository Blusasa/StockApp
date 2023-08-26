import {StyleSheet, TextStyle, ViewStyle,} from "react-native";
import { useTheme, Theme } from "../theme";

interface ThemedStyles {
    [key: string]: ViewStyle | TextStyle
}

function useThemedStyles(stylefunction: (theme: Theme) => ThemedStyles): ThemedStyles{
    const theme = useTheme();
    return StyleSheet.create(stylefunction(theme));
};

export {ThemedStyles, useThemedStyles};