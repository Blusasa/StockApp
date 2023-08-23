import { View, Text, StyleSheet, Pressable } from "react-native";

import { commonStyles, useTheme, Theme } from "../../../theme";
import { ReactElement } from "react";

import { GroupInfoProps } from "../types/GroupInfoProps";

const GroupBox = ({groupInfo} : GroupInfoProps) : ReactElement => {

    const theme = useTheme();
    const componentStyles = styles(theme);

    return (
        <Pressable
            onPress={(e) => console.log(`${groupInfo.name} pressed`)}
            style={({ pressed }) => [
            { backgroundColor: pressed ? theme.colors.pressableIn : theme.colors.transparent },
            componentStyles.mainContainer
        ]}>
            <Text style={[componentStyles.groupName]}>{groupInfo.name}</Text>
            <View style={[componentStyles.rankingContainer]}>
                <Text style={[componentStyles.hashSign]}>#</Text>
                <Text style={[componentStyles.rankingTxt]}>{groupInfo.place}/</Text>
                <Text style={[componentStyles.rankingTxt]}>{groupInfo.totalInGroup}</Text>
            </View>
        </Pressable>
    )
};

const styles = (theme : Theme) => StyleSheet.create({
    mainContainer: {
        flex: 1,
        ...commonStyles.flexRowSpaceBW,
        borderColor: theme.colors.primary,
        borderWidth: 3,
        borderRadius: 20,
        marginVertical: 7,
        marginHorizontal: 5,
    },
    groupName: {
        ...theme.fonts.header,
        fontSize: 20,
        marginLeft: 15,
        includeFontPadding: false,
        textAlign: "center",
        textAlignVertical: "center",
    },
    rankingContainer: {
        flexShrink: 1,
        ...commonStyles.flexRowEnd,
        marginRight: 15
    },
    hashSign: {
        ...theme.fonts.subtext,
        fontSize: 16,
        includeFontPadding: false,
        textAlign: "center",
        textAlignVertical: "center",
    },
    rankingTxt: {
        ...theme.fonts.regular,
        fontSize: 18,
        includeFontPadding: false,
        textAlign: "center",
        textAlignVertical: "center",
    }
});


export default GroupBox;